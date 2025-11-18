import { useState, useCallback } from "react";
import ReactFlow, {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  MiniMap,
  Controls,
} from "reactflow";
import type { NodeChange, EdgeChange, Connection, Node, Edge } from "reactflow";
import "reactflow/dist/style.css";
import TopEvent from "./Components/TopEvent";

const initialNodes: Node<any>[] = [
  {
    id: "toph",
    type: "topEvent",
    position: { x: 0, y: 0 },
    data: { label: "Driving a commercial vehicle" },
    style: {
      background: "pink",
      color: "#002766",
      width: 80,
      height: 80,
      borderRadius: 12,
      border: "2px solid pink",
      padding: 8,
    },
  },
  {
    id: "harzard",
    position: { x: 100, y: 100 },
    data: { label: "Loss of control over the vehicle at 71 mph" },
    // per-node inline style (quick way to style individual nodes)
    style: {
      background: "pink",
      color: "#002766",
      width: 220,
      height: 70,
      borderRadius: 12,
      border: "2px solid #91d5ff",
      padding: 8,
    },
    className: "node-n1",
  },
  {
    id: "n2",
    position: { x: 0, y: 100 },
    data: { label: "Loss of control over the vehicle at 71 mph" },
    style: {
      background: "#fff7e6",
      color: "#663c00",
      width: 220,
      height: 70,
      borderRadius: 12,
      border: "2px dashed #ffd591",
      padding: 8,
    },
    className: "node-n2",
  },
  {
    id: "n3",
    position: { x: 0, y: 200 },
    data: { label: "Node 3" },
    style: {
      background: "#f6ffed",
      color: "#1b5e20",
      width: 160,
      height: 48,
      borderRadius: 8,
      border: "1px solid #b7eb8f",
    },
    className: "node-n3",
  },
  {
    id: "n4",
    position: { x: 0, y: 300 },
    data: { label: "Node 4" },
    style: {
      background: "#fff0f6",
      color: "#7a0030",
      width: 160,
      height: 48,
      borderRadius: 8,
      border: "1px solid #ffadd2",
    },
    className: "node-n4",
  },
];
const initialEdges: Edge<any>[] = [
  { id: "top-harzard", source: "top", target: "harzard" },
  { id: "n2-n3", source: "n2", target: "n3" },
  { id: "n3-n4", source: "n3", target: "n4" },
];

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // register custom node types here
  const nodeTypes = { topEvent: TopEvent };

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}
