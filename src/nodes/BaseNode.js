// BaseNode.js
import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 200,
}) => {
  const height = Math.max(
    80,
    40 + Math.max(inputs.length, outputs.length) * 20
  );

  return (
    <div
      style={{
        width,
        height,
        border: "1px solid black",
        borderRadius: "6px",
        background: "#fff",
        padding: "8px",
        position: "relative",
      }}
    >
      {/* INPUT HANDLES (LEFT) */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      {/* TITLE */}
      <div style={{ fontWeight: "bold", marginBottom: "6px" }}>{title}</div>

      {/* NODE CONTENT */}
      <div>{children}</div>

      {/* OUTPUT HANDLES (RIGHT) */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
