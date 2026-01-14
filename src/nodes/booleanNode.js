import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const BooleanNode = () => {
  const [value, setValue] = useState(false);

  return (
    <BaseNode
      title="Boolean"
      inputs={["input"]}
      outputs={["output"]}
      width={260}
    >
      <label className="boolean-row">
        <span>Value:</span>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
        />
      </label>

      <label>
        Output:
        <input type="text" value={value ? "TRUE" : "FALSE"} readOnly />
      </label>
    </BaseNode>
  );
};
