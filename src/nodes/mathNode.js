import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const MathNode = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState("+");

  const calculate = () => {
    const x = Number(a);
    const y = Number(b);

    switch (op) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return y !== 0 ? x / y : "∞";
      default:
        return 0;
    }
  };

  return (
    <BaseNode
      title="Math"
      inputs={["a", "b"]}
      outputs={["result"]}
      width={280}
      height={250}
    >
      <label>
        A:
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </label>

      <label>
        B:
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </label>

      <label>
        Operation:
        <select value={op} onChange={(e) => setOp(e.target.value)}>
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
      </label>

      <label>
        Result:
        <input type="text" value={calculate()} readOnly />
      </label>
    </BaseNode>
  );
};
