import type { PlopTypes } from "@turbo/gen";
import * as fs from "fs";
import * as path from "path";
import { generateSpringCss } from "./springUtils";
import { ComponentTokenData, TokenValueType, Type } from "./types";

const readTokenFile = (filePath: string): object => {
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
};

const getTokenDataFiles = (dir: string): string[] => {
  const files = fs.readdirSync(dir);
  return files.filter((file) => path.extname(file) === ".json");
};

const processTypescaleTokens = (tokenData: object) => {
  const primitiveKeys = [
    "font",
    "line-height",
    "size",
    "weight",
    "tracking",
    "prominent",
  ];
  return Object.entries(tokenData).sort(
    ([keyA], [keyB]) =>
      Number(primitiveKeys.includes(keyB.split(".").at(-1)!)) -
      Number(primitiveKeys.includes(keyA.split(".").at(-1)!)),
  );
};

/**
 * Processes motion tokens by generating spring animation CSS.
 */
const processMotionTokens = (
  tokenData: Record<string, string | { stiffness: string; damping: string }>,
) => {
  return Object.fromEntries(
    Object.entries(tokenData).map(([key, value]) => [
      key,
      typeof value !== "object"
        ? value
        : generateSpringCss(
            parseFloat(tokenData[value.stiffness] as string),
            parseFloat(tokenData[value.damping] as string),
          ),
    ]),
  );
};

const componentTokenActions = (): PlopTypes.ActionType[] => {
  const TOKEN_DATA_DIR = "token-data/components";
  const OUTPUT_DIR = "packages/ui/src/tokens/component-tokens";
  const TEMPLATE_FILE = "templates/component_token_set.scss.hbs";
  const INDEX_TEMPLATE_FILE = "templates/component_index.scss.hbs";

  const tokenFiles = getTokenDataFiles(TOKEN_DATA_DIR);
  console.log(`Found ${tokenFiles.length} component token file(s) to process.`);

  return tokenFiles.map((file) => {
    const tokenData: ComponentTokenData = readTokenFile(
      path.join(TOKEN_DATA_DIR, file),
    ) as ComponentTokenData;
    tokenData.tokens.forEach((e) => {
      if (e.tokenValueType === TokenValueType.Typography && e.data.token.type) {
        e.data.token.type = Object.fromEntries(
          Object.entries(e.data.token.type!).map(([k, v]) => [
            k,
            v.substring(tokenData.tokenSetName.length + 1),
          ]),
        ) as Type;
      }
    });

    const name = path.basename(file, ".json");

    return {
      type: "add",
      path: `${OUTPUT_DIR}/{{kebabCase name}}.scss`,
      templateFile: TEMPLATE_FILE,
      data: { ...tokenData, name },
      force: true,
    };
  });
};

const sysTokenActions = (): PlopTypes.ActionType[] => {
  const TOKEN_DATA_DIR = "token-data/sys";
  const OUTPUT_DIR = "packages/ui/src/tokens/sys-tokens";

  const tokenHandlers = {
    "typescale.json": (data: object) => ({
      tokens: processTypescaleTokens(data),
      template: "templates/type_tokens_vars.scss.hbs",
    }),
    "motion.json": (data: object) => ({
      tokens: processMotionTokens(
        data as Record<string, string | { stiffness: string; damping: string }>,
      ),
      template: "templates/motion_tokens_vars.scss.hbs",
    }),
  };

  const defaultHandler = (data: object) => ({
    tokens: data,
    template: "templates/sys_tokens_vars.scss.hbs",
  });

  const tokenFiles = getTokenDataFiles(TOKEN_DATA_DIR);

  return tokenFiles.map((file) => {
    const fullPath = path.join(TOKEN_DATA_DIR, file);
    const data = readTokenFile(fullPath);
    const handler =
      tokenHandlers[file as keyof typeof tokenHandlers] || defaultHandler;

    const { tokens, template } = handler(data);
    const name = path.basename(file, ".json");

    return {
      type: "add",
      path: `${OUTPUT_DIR}/${name}.scss`,
      templateFile: template,
      data: { tokens, name },
      force: true,
    };
  });
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper("eq", (a, b) => a === b);
  plop.setHelper("isdefined", (value) => value !== undefined);

  plop.setGenerator("Component Tokens", {
    description: "Generates SCSS token files from JSON data.",
    prompts: [],
    actions: [...componentTokenActions(), ...sysTokenActions()],
  });
}
