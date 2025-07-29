import { Badge } from "@repo/ui/components/badge/Badge";

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
    </main>
  );
}
