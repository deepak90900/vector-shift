import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DelayNode = () => {
  const [delay, setDelay] = useState(1000);

  return (
    <BaseNode title="Delay" inputs={["input"]} outputs={["output"]} width={260}>
      <label>
        Delay (ms):
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
      </label>

      <div style={{ fontSize: "12px", color: "#6b7280" }}>
        Delays execution by {delay} ms
      </div>
    </BaseNode>
  );
};
