import { Badge } from "@repo/ui/components/badge/Badge";
import { ButtonGroup } from "@repo/ui/components/button-group/ButtonGroup";
import { Button } from "@repo/ui/components/button/Button";
import { Fab } from "@repo/ui/components/fab/Fab";
import { IconButton } from "@repo/ui/components/icon-button/IconButton";

export default function Home() {
  return (
    <>
      <nav>
        <a href="#badge">badge</a>
        <a href="#button-group">button group</a>
        <a href="#button">button</a>
        <a href="#toggle-button">toggle button</a>
        <a href="#fab">fab</a>
        <a href="#xfab">xfab</a>
        <a href="#icon-button">icon button</a>
        <a href="#toggle-icon-button">toggle icon button</a>
      </nav>

      <main>
        <section className="component-section">
          <h1 id="badge">Badge</h1>
          <div className="component-grid">
            <div className="component-cell">
              <Badge badge={"999+"}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "orange",
                  }}
                ></div>
              </Badge>
              <label className="component-label">with count</label>
            </div>
            <div className="component-cell">
              <Badge>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "orange",
                  }}
                ></div>
              </Badge>
              <label className="component-label">dot</label>
            </div>
          </div>
        </section>
        <section className="component-section">
          <h1 id="button-group">Button Group</h1>
          <div className="component-grid">
            <div className="component-cell">
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
              <label className="component-label">standard small</label>
            </div>
            <div className="component-cell">
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
              <label className="component-label">
                connected medium icon buttons
              </label>
            </div>
            <div className="component-cell">
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
              <label className="component-label">
                standard large mixed width icon buttons
              </label>
            </div>
            <div className="component-cell">
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
              <label className="component-label">connected x-large mixed</label>
            </div>
          </div>
        </section>
        <section className="component-section">
          <h1 id="button">Button</h1>
          <div className="component-grid">
            {(["outlined", "filled", "text", "tonal", "elevated"] as const).map(
              (variant) =>
                (["round", "square"] as const).map((type) =>
                  [false, true].map((disabled) =>
                    (
                      [
                        "x-small",
                        "small",
                        "medium",
                        "large",
                        "x-large",
                      ] as const
                    ).map((size) => (
                      <div
                        className="component-cell"
                        key={`${variant}-${type}-${disabled}-${size}`}
                      >
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
                        <label className="component-label">
                          {`${variant} ${type}${disabled ? " disabled" : ""}`}
                        </label>
                      </div>
                    )),
                  ),
                ),
            )}
          </div>
        </section>
        <section className="component-section">
          <h1 id="toggle-button">Toggle Button</h1>
          <div className="component-grid">
            {(["outlined", "filled", "tonal", "elevated"] as const).map(
              (variant) =>
                (["round", "square"] as const).map((type) =>
                  [false, true].map((disabled) =>
                    (
                      [
                        "x-small",
                        "small",
                        "medium",
                        "large",
                        "x-large",
                      ] as const
                    ).map((size) =>
                      [false, true].map((selected) => (
                        <div
                          className="component-cell"
                          key={`${variant}-${type}-${disabled}-${size}-${selected}`}
                        >
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
                          <label className="component-label">
                            {`${variant} ${type}${
                              selected ? " selected" : ""
                            }${disabled ? " disabled" : ""}`}
                          </label>
                        </div>
                      )),
                    ),
                  ),
                ),
            )}
          </div>
        </section>
        <section className="component-section">
          <h1 id="fab">FAB</h1>
          <div className="component-grid">
            {(
              [
                "primary",
                "secondary",
                "tertiary",
                "primary-tonal",
                "secondary-tonal",
                "tertiary-tonal",
              ] as const
            ).map((variant) =>
              (["baseline", "medium", "large"] as const).map((size) => (
                <div className="component-cell" key={`${size}-${variant}`}>
                  <Fab
                    icon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                    size={size}
                    variant={variant}
                  />
                  <label className="component-label">{`${size} ${variant}`}</label>
                </div>
              )),
            )}
          </div>
        </section>
        <section className="component-section">
          <h1 id="xfab">Extended FAB</h1>
          <div className="component-grid">
            {(
              [
                "primary",
                "secondary",
                "tertiary",
                "primary-tonal",
                "secondary-tonal",
                "tertiary-tonal",
              ] as const
            ).map((variant) =>
              (["baseline", "medium", "large"] as const).map((size) => (
                <div
                  className="component-cell"
                  key={`${size}-${variant}-extended`}
                >
                  <Fab
                    icon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                    size={size}
                    variant={variant}
                    label={`${size} ${variant}`}
                  />
                  <label className="component-label">{`${size} ${variant}`}</label>
                </div>
              )),
            )}
          </div>
        </section>
        <section className="component-section">
          <h1 id="icon-button">Icon Button</h1>
          <div className="component-grid">
            {(["outlined", "filled", "standard", "tonal"] as const).map(
              (variant) =>
                (["round", "square"] as const).map((type) =>
                  [false, true].map((disabled) =>
                    (
                      [
                        "x-small",
                        "small",
                        "medium",
                        "large",
                        "x-large",
                      ] as const
                    ).map((size) =>
                      (["narrow", "default", "wide"] as const).map((width) => (
                        <div
                          className="component-cell"
                          key={`${variant}-${type}-${disabled}-${size}-${width}`}
                        >
                          <IconButton
                            variant={variant}
                            shape={type}
                            disabled={disabled}
                            size={size}
                            width={width}
                            filledIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"
                          />
                          <label className="component-label">
                            {`${size} ${variant} ${type}${
                              disabled ? " disabled" : ""
                            } ${width}`}
                          </label>
                        </div>
                      )),
                    ),
                  ),
                ),
            )}
          </div>
        </section>
        <section className="component-section">
          <h1 id="toggle-icon-button">Toggle Icon Button</h1>
          <div className="component-grid">
            {(["outlined", "filled", "tonal", "standard"] as const).map(
              (variant) =>
                (["round", "square"] as const).map((type) =>
                  [false, true].map((disabled) =>
                    (
                      [
                        "x-small",
                        "small",
                        "medium",
                        "large",
                        "x-large",
                      ] as const
                    ).map((size) =>
                      [false, true].map((selected) => (
                        <div
                          className="component-cell"
                          key={`${variant}-${type}-${disabled}-${size}-${selected}`}
                        >
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
                          <label className="component-label">
                            {`${size} ${variant} ${type}${
                              selected ? " selected" : ""
                            }${disabled ? " disabled" : ""}`}
                          </label>
                        </div>
                      )),
                    ),
                  ),
                ),
            )}
          </div>
        </section>
      </main>
    </>
  );
}
