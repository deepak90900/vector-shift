// mathNode.js
import { BaseNode } from "./BaseNode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      inputs={[`${id}-a`, `${id}-b`]}
      outputs={[`${id}-result`]}
    >
      <span>Adds two numbers</span>
    </BaseNode>
  );
};
