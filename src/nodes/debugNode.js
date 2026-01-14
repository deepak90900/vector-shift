import { BaseNode } from "./BaseNode";

export const DebugNode = () => {
  return (
    <BaseNode title="Debug" inputs={["input"]} outputs={[]} width={280}>
      <label>
        Debug Output:
        <textarea
          value={`{ value: "sample output" }`}
          readOnly
          className="text-node-textarea"
        />
      </label>
    </BaseNode>
  );
};
