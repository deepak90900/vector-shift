import { Handle, Position } from "reactflow";
import "../styles/nodes.css";

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 220,
  height = "auto",
}) => {
  return (
    <div className="base-node" style={{ width, height, position: "relative" }}>
      {/* INPUT HANDLES */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{
            background: "var(--handle-bg)",
            border: "2px solid var(--handle-border)",
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      <div className="base-node-title">{title}</div>

      <div className="base-node-content">{children}</div>

      {/* OUTPUT HANDLES */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{
            background: "var(--handle-bg)",
            border: "2px solid var(--handle-border)",
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};
