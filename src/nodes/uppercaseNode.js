import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const UppercaseNode = ({ id, data }) => {
  const [input, setInput] = useState("");

  const output = input.toUpperCase();

  return (
    <BaseNode
      title="Uppercase"
      inputs={["input"]}
      outputs={["output"]}
      width={280}
    >
      <label>
        Input:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text"
        />
      </label>

      <label>
        Output:
        <input type="text" value={output} readOnly />
      </label>
    </BaseNode>
  );
};
