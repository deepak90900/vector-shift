import { useState, useEffect, useRef } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [inputs, setInputs] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  // Dynamic handles
  useEffect(() => {
    const regex = /{{\s*([\w]+)\s*}}/g;
    const matches = [...text.matchAll(regex)];
    const variables = [...new Set(matches.map((m) => m[1]))];
    setInputs(variables);
  }, [text]);

  return (
    <BaseNode title="Text" inputs={inputs} outputs={["output"]} width={280}>
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text with {{variables}}"
          className="text-node-textarea"
        />
      </label>
    </BaseNode>
  );
};
