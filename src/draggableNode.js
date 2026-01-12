import "./styles/toolbar.css";

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType })
    );
  };

  return (
    <div
      className="draggable-node"
      draggable
      onDragStart={(e) => onDragStart(e, type)}
    >
      <div className="draggable-node-icon">{icon || label[0]}</div>
      <span>{label}</span>
    </div>
  );
};
