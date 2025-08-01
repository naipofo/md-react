import { Badge } from "@repo/ui/components/badge/Badge";
import { Button } from "@repo/ui/components/button/Button";

export default function Home() {
  return (
    <main style={{ padding: "100px", display: "flex", gap: "20px" }}>
      <Badge badge={"999+"}>
        <div
          style={{ width: "50px", height: "50px", background: "orange" }}
        ></div>
      </Badge>
      <Badge>
        <div
          style={{ width: "50px", height: "50px", background: "orange" }}
        ></div>
      </Badge>
      {(["outlined", "filled", "text", "tonal", "elevated"] as const).map(
        (variant) =>
          (["round", "square"] as const).map((type) =>
            [true, false].map((disabled) =>
              (["x-small", "small", "medium", "large", "x-large"] as const).map(
                (size) => (
                  <Button
                    variant={variant}
                    shape={type}
                    disabled={disabled}
                    size={size}
                    key={`${variant}-${type}-${disabled}-${size}`}
                    startIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"
                    endIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                  >
                    {`${variant}-${type}-${disabled}-${size}`}
                  </Button>
                ),
              ),
            ),
          ),
      )}
      <h1>Toggle</h1>
      {(["outlined", "filled", "tonal", "elevated"] as const).map((variant) =>
        (["round", "square"] as const).map((type) =>
          [true, false].map((disabled) =>
            (["x-small", "small", "medium", "large", "x-large"] as const).map(
              (size) =>
                [true, false].map((selected) => (
                  <Button
                    variant={variant}
                    selected={selected}
                    shape={type}
                    disabled={disabled}
                    size={size}
                    key={`${variant}-${type}-${disabled}-${size}`}
                    startIcon="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"
                    endIcon="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                    toggle={true}
                  >
                    {`${variant}-${type}-${disabled}-${size}`}
                  </Button>
                )),
            ),
          ),
        ),
      )}
    </main>
  );
}
