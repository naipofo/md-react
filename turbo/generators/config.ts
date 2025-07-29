import type { PlopTypes } from "@turbo/gen";
import * as fs from "fs";
import * as path from "path";

const componentTokenActions = () => {
  const TOKEN_DATA_DIR = "token-data/components";
  const OUTPUT_DIR = "packages/ui/src/tokens/component-tokens";
  const TEMPLATE_FILE = "templates/component_token_set.scss.hbs";

  const getTokenDataFiles = (): string[] => {
    const files = fs.readdirSync(TOKEN_DATA_DIR);
    return files.filter((file) => path.extname(file) === ".json");
  };

  const tokenFiles = getTokenDataFiles();

  console.log(`Found ${tokenFiles.length} token file(s) to process.`);

  const actions: PlopTypes.ActionType[] = tokenFiles.map((file) => {
    const tokenDataPath = path.join(TOKEN_DATA_DIR, file);
    const tokenDataContent = fs.readFileSync(tokenDataPath, "utf-8");
    const tokenData = JSON.parse(tokenDataContent);
    const name = path.basename(file, ".json");

    return {
      type: "add",
      path: `${OUTPUT_DIR}/{{kebabCase name}}.scss`,
      templateFile: TEMPLATE_FILE,
      data: {
        ...tokenData,
        name,
      },
      force: true,
    };
  });

  return actions;
};

const sysTokenActions = () => {
  const TOKEN_DATA_DIR = "token-data/sys";
  const OUTPUT_DIR = "packages/ui/src/tokens/sys-tokens";

  const normalSysTokenFiles = [
    "color.json",
    "corner.json",
    "corner-value.json",
  ];

  const actions: (PlopTypes.ActionType | null)[] = normalSysTokenFiles.map(
    (file) => {
      const tokenDataPath = path.join(TOKEN_DATA_DIR, file);
      const tokenDataContent = fs.readFileSync(tokenDataPath, "utf-8");
      const tokens = JSON.parse(tokenDataContent);
      const name = path.basename(file, ".json");

      return {
        type: "add",
        path: `${OUTPUT_DIR}/${name}.scss`,
        templateFile: "templates/sys_tokens_vars.scss.hbs",
        data: {
          tokens,
          name,
        },
        force: true,
      };
    },
  );

  // Exception for typescale
  const typescaleTokenFile = "typescale.json";
  const typescaleDataPath = path.join(TOKEN_DATA_DIR, typescaleTokenFile);
  const tokenDataContent = fs.readFileSync(typescaleDataPath, "utf-8");
  const tokens = JSON.parse(tokenDataContent);
  const name = path.basename(typescaleTokenFile, ".json");
  actions.push({
    type: "add",
    path: `${OUTPUT_DIR}/${name}.scss`,
    templateFile: "templates/type_tokens_vars.scss.hbs",
    data: {
      tokens,
      name,
    },
    force: true,
  });

  return actions.filter(
    (action): action is PlopTypes.ActionType => action !== null,
  );
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper("eq", (a, b) => a === b);
  plop.setGenerator("Component Tokens", {
    description: "Generates SCSS component token files from JSON data files.",
    prompts: [],
    actions: [...componentTokenActions(), ...sysTokenActions()],
  });
}
