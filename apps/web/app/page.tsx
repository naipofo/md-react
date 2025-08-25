"use client";

import { Badge } from "@repo/ui/components/badge/Badge";
import { ButtonGroup } from "@repo/ui/components/button-group/ButtonGroup";
import { SplitButton } from "@repo/ui/components/split-button/SplitButton";
import { Button } from "@repo/ui/components/button/Button";
import { Fab } from "@repo/ui/components/fab/Fab";
import { FabMenu } from "@repo/ui/components/fab-menu/FabMenu";
import { FabMenuItem } from "@repo/ui/components/fab-menu/FabMenuItem";
import { IconButton } from "@repo/ui/components/icon-button/IconButton";
import { PlainTooltip } from "@repo/ui/components/tooltip/PlainTooltip";
import { RichTooltip } from "@repo/ui/components/tooltip/RichTooltip";
import { Snackbar } from "@repo/ui/components/snackbar/Snackbar";
import { useEffect, useState } from "react";
import { TextField } from "@repo/ui/components/text-field/TextField";
import { Checkbox } from "@repo/ui/components/checkbox/Checkbox";

export default function Home() {
  const components = [
    {
      title: "badge",
      elements: () => [
        {
          name: "with count",
          element: (
            <Badge badge={"999+"}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "orange",
                }}
              ></div>
            </Badge>
          ),
        },
        {
          name: "dot",
          element: (
            <Badge>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "orange",
                }}
              ></div>
            </Badge>
          ),
        },
      ],
    },
    {
      title: "button-group",
      elements: () => [
        {
          name: "standard small",
          element: (
            <ButtonGroup variant="standard" size="small">
              <Button size="small" variant="outlined">
                Button 1
              </Button>
              <Button size="small" variant="outlined">
                A longer button
              </Button>
              <Button size="small" variant="outlined">
                Btn 3
              </Button>
            </ButtonGroup>
          ),
        },
        {
          name: "connected medium icon buttons",
          element: (
            <ButtonGroup variant="connected" size="medium">
              <IconButton
                variant="outlined"
                shape="square"
                toggle={true}
                selected={false}
                size="medium"
                filledIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z"
              />
              <IconButton
                variant="outlined"
                shape="square"
                toggle={true}
                selected={true}
                size="medium"
                filledIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
              />
              <IconButton
                variant="outlined"
                shape="square"
                toggle={true}
                selected={false}
                size="medium"
                filledIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
              />
              <IconButton
                variant="outlined"
                shape="square"
                toggle={true}
                selected={false}
                size="medium"
                filledIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
              />
              <IconButton
                variant="outlined"
                shape="square"
                toggle={true}
                selected={true}
                size="medium"
                filledIcon="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z"
              />
            </ButtonGroup>
          ),
        },
        {
          name: "standard large mixed width icon buttons",
          element: (
            <ButtonGroup variant="standard" size="large">
              <IconButton
                width="narrow"
                variant="tonal"
                shape="square"
                size="large"
                filledIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z"
              />
              <IconButton
                width="default"
                variant="tonal"
                shape="square"
                size="large"
                filledIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
              />
              <IconButton
                width="wide"
                variant="tonal"
                shape="square"
                size="large"
                filledIcon="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z"
              />
            </ButtonGroup>
          ),
        },
        {
          name: "connected x-large mixed",
          element: (
            <ButtonGroup variant="connected" size="x-large">
              <Button variant="filled" toggle={true} size="x-large">
                First
              </Button>
              <IconButton
                variant="filled"
                shape="square"
                filledIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z"
                toggle={true}
                selected={true}
                size="x-large"
              />
              <Button
                variant="filled"
                toggle={true}
                selected={true}
                size="x-large"
              >
                Last
              </Button>
            </ButtonGroup>
          ),
        },
      ],
    },
    {
      title: "button",
      elements: () =>
        (["outlined", "filled", "text", "tonal", "elevated"] as const).flatMap(
          (variant) =>
            (["round", "square"] as const).flatMap((type) =>
              [false, true].flatMap((disabled) =>
                (
                  ["x-small", "small", "medium", "large", "x-large"] as const
                ).map((size) => ({
                  name: `${variant} ${type}${disabled ? " disabled" : ""}`,
                  element: (
                    <Button
                      variant={variant}
                      shape={type}
                      disabled={disabled}
                      size={size}
                      startIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"
                      endIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                    >
                      {`${size}`}
                    </Button>
                  ),
                })),
              ),
            ),
        ),
    },
    {
      title: "toggle-button",
      elements: () =>
        (["outlined", "filled", "tonal", "elevated"] as const).flatMap(
          (variant) =>
            (["round", "square"] as const).flatMap((type) =>
              [false, true].flatMap((disabled) =>
                (
                  ["x-small", "small", "medium", "large", "x-large"] as const
                ).flatMap((size) =>
                  [false, true].map((selected) => ({
                    name: `${variant} ${type}${
                      selected ? " selected" : ""
                    }${disabled ? " disabled" : ""}`,
                    element: (
                      <Button
                        variant={variant}
                        selected={selected}
                        shape={type}
                        disabled={disabled}
                        size={size}
                        startIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"
                        endIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                        toggle={true}
                      >
                        {`${size}`}
                      </Button>
                    ),
                  })),
                ),
              ),
            ),
        ),
    },
    {
      title: "fab",
      elements: () =>
        (
          [
            "primary",
            "secondary",
            "tertiary",
            "primary-tonal",
            "secondary-tonal",
            "tertiary-tonal",
          ] as const
        ).flatMap((variant) =>
          (["baseline", "medium", "large"] as const).flatMap((size) => [
            {
              name: `${size} ${variant}`,
              element: (
                <Fab
                  icon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                  size={size}
                  variant={variant}
                />
              ),
            },
            {
              name: `extended ${size} ${variant}`,
              element: (
                <Fab
                  icon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                  size={size}
                  variant={variant}
                  label={`${size} ${variant}`}
                />
              ),
            },
          ]),
        ),
    },
    {
      title: "icon-button",
      elements: () =>
        (["outlined", "filled", "standard", "tonal"] as const).flatMap(
          (variant) =>
            (["round", "square"] as const).flatMap((type) =>
              [false, true].flatMap((disabled) =>
                (
                  ["x-small", "small", "medium", "large", "x-large"] as const
                ).flatMap((size) =>
                  (["narrow", "default", "wide"] as const).map((width) => ({
                    name: `${size} ${variant} ${type}${
                      disabled ? " disabled" : ""
                    } ${width}`,
                    element: (
                      <IconButton
                        variant={variant}
                        shape={type}
                        disabled={disabled}
                        size={size}
                        width={width}
                        filledIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"
                      />
                    ),
                  })),
                ),
              ),
            ),
        ),
    },

    {
      title: "toggle-icon-button",
      elements: () =>
        (["outlined", "filled", "tonal", "standard"] as const).flatMap(
          (variant) =>
            (["round", "square"] as const).flatMap((type) =>
              [false, true].flatMap((disabled) =>
                (
                  ["x-small", "small", "medium", "large", "x-large"] as const
                ).flatMap((size) =>
                  [false, true].map((selected) => ({
                    name: `${size} ${variant} ${type}${
                      selected ? " selected" : ""
                    }${disabled ? " disabled" : ""}`,
                    element: (
                      <IconButton
                        variant={variant}
                        selected={selected}
                        shape={type}
                        disabled={disabled}
                        size={size}
                        outlinedIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                        filledIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"
                        toggle={true}
                      />
                    ),
                  })),
                ),
              ),
            ),
        ),
    },
    {
      title: "split-button",
      elements: () =>
        (["outlined", "filled", "tonal", "elevated"] as const).flatMap(
          (variant) =>
            ([false, true] as const).flatMap((disabled) =>
              (
                ["x-small", "small", "medium", "large", "x-large"] as const
              ).flatMap((size) =>
                [false, true].map((selected) => ({
                  name: `${variant} ${size}${
                    selected ? " selected" : ""
                  }${disabled ? " disabled" : ""}`,
                  element: (
                    <SplitButton
                      variant={variant}
                      selected={selected}
                      disabled={disabled}
                      size={size}
                      startIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z"
                    >
                      {`${size}`}
                    </SplitButton>
                  ),
                })),
              ),
            ),
        ),
    },
    {
      title: "FAB menu",
      elements: () =>
        (["primary", "secondary", "tertiary"] as const).map((variant) => ({
          name: variant,
          element: (
            <FabMenu variant={variant}>
              <FabMenuItem
                variant={variant}
                icon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z"
              >
                Hello
              </FabMenuItem>
              <FabMenuItem variant={variant}>There</FabMenuItem>
            </FabMenu>
          ),
        })),
    },
    {
      title: "tooltip",
      elements: () => [
        {
          name: "Plain tooltip",
          element: <PlainTooltip supportingText="Send a message" />,
        },
        {
          name: "Rich tooltip",
          element: (
            <RichTooltip
              subhead="Rich tooltip"
              supportingText="Rich tooltips bring attention to a particular element of feature that warrants the user's focus."
            >
              <Button variant="text" size="x-small" shape="round">
                Action
              </Button>
              <Button variant="text" size="x-small" shape="round">
                Action2
              </Button>
            </RichTooltip>
          ),
        },
      ],
    },
    {
      title: "snackbar",
      elements: () => [
        {
          name: "Snackbar without action",
          element: <Snackbar label="Photos deleted" />,
        },
        {
          name: "Snackbar with action",
          element: (
            <Snackbar label="Photos deleted">
              <Button variant="text" size="x-small" shape="round">
                Action
              </Button>
            </Snackbar>
          ),
        },
      ],
    },
    {
      title: "Text Field",
      elements: () =>
        (["filled", "outlined"] as const).flatMap((variant) =>
          [true, false].flatMap((hasError) =>
            [true, false].map((disabled) => ({
              name:
                variant +
                (hasError ? " with error" : "") +
                (disabled ? " disabled" : ""),
              element: (
                <TextField
                  variant={variant}
                  supportingTextStart="Supporting Text"
                  supportingTextEnd="0/100"
                  labelText="Given name"
                  hasError={hasError}
                  disabled={disabled}
                  placeholder="123"
                />
              ),
            })),
          ),
        ),
    },
    {
      title: "Checkbox",
      elements: () => {
        const AnimatedStateCheckbox = ({
          disabled = false,
          hasError = false,
        }: {
          disabled?: boolean;
          hasError?: boolean;
        }) => {
          const [checked, setChecked] = useState<boolean | "indeterminate">(
            false,
          );

          useEffect(() => {
            const statesCycle: (boolean | "indeterminate")[] = [
              true,
              "indeterminate",
              false,
            ];
            const intervalId = setInterval(() => {
              setChecked((currentChecked) => {
                const currentIndex = statesCycle.indexOf(currentChecked);
                // Cycle to the next state, wrapping around.
                const nextIndex = (currentIndex + 1) % statesCycle.length;
                return statesCycle[nextIndex]!;
              });
            }, 1500);

            return () => clearInterval(intervalId); // Cleanup on unmount
          }, []);

          return (
            <Checkbox
              checked={checked}
              hasError={hasError}
              disabled={disabled}
            />
          );
        };

        const staticCheckboxes = (
          [false, true, "indeterminate"] as const
        ).flatMap((checked) =>
          [false, true].flatMap((disabled) =>
            [false, true].map((hasError) => {
              let name =
                checked === "indeterminate"
                  ? "indeterminate"
                  : checked
                    ? "checked"
                    : "unchecked";
              if (hasError) {
                name += " error";
              }
              if (disabled) {
                name += " disabled";
              }
              return {
                name,
                element: (
                  <Checkbox
                    checked={checked}
                    hasError={hasError}
                    disabled={disabled}
                  />
                ),
              };
            }),
          ),
        );

        const animatedCheckboxes = [
          {
            name: "animated normal",
            element: <AnimatedStateCheckbox />,
          },
          {
            name: "animated error",
            element: <AnimatedStateCheckbox hasError={true} />,
          },
          {
            name: "animated disabled",
            element: <AnimatedStateCheckbox disabled={true} />,
          },
        ];

        return [...staticCheckboxes, ...animatedCheckboxes];
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const { title, elements } = components[activeIndex]!;

  return (
    <main>
      <section className="component-section">
        <h1>{title}</h1>
        <div className="component-grid">
          {elements().map(({ element, name }, i) => (
            <div className="component-cell" key={i}>
              {element}
              <label className="component-label">{name}</label>
            </div>
          ))}
        </div>
      </section>
      <nav>
        {components.map(({ title }, i) => (
          <button
            onClick={() => setActiveIndex(i)}
            key={i}
            className={i === activeIndex ? "active" : ""}
          >
            {title}
          </button>
        ))}
      </nav>
    </main>
  );
}
