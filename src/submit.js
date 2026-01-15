import { useStore } from "./store";
import "./styles/ui.css";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes.map((n) => ({ id: n.id })),
          edges: edges.map((e) => ({
            source: e.source,
            target: e.target,
          })),
        }),
      });

      const result = await response.json();

      alert(
        `Pipeline Summary:\n\n` +
          `Nodes: ${result.num_nodes}\n` +
          `Edges: ${result.num_edges}\n` +
          `Is DAG: ${result.is_dag ? "Yes" : "No"}`
      );
    } catch (err) {
      alert("Failed to validate pipeline");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
