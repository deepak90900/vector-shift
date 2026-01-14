// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div>
      <div className="toolbar">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="uppercase" label="Uppercase" />
        <DraggableNode type="boolean" label="Boolean" />
        <DraggableNode type="debug" label="Debug" />
      </div>
    </div>
  );
};
