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
    id: "top",
    type: "topEvent",
    position: { x: 60, y: 100 },
    data: { label: "Driving a commercial vehicle" },
    style: {
      background: "pink",
      color: "#002766",
      width: 100,
      height: 100,
      borderRadius: 12,
      border: "2px solid pink",
      padding: 8,
    },
  },
  {
  id: "harzard",
  position: { x: 40, y: 240 },
  data: { label: "Loss of control over the vehicle at 71 mph" },
  style: {
    background: "yellow",
    color: "#002766",
    width: 140,              // equal width & height
    height: 140,
    borderRadius: "50%",     // makes it a circle
    border: "2px solid #91d5ff",
    padding: 8,
    display: "flex",         // centers label
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  className: "node-n1",
  }, 
  {
    id: "n2",
    position: { x: -250, y: 150 },
    data: { label: "Speed management & safe following distance)" },
    style: {
      background: "#d9f7be",
      color: "#black",
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
    position: { x: -500, y: 150 },
    data: { label: "Speed Adaptation Policy: Reduce speed by 1/3 on wet roads" },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px dashed #ffd591",
    },
    className: "node-n3",
  },
  {
    id: "n4",
    position: { x: -750, y: 150 },
    data: { label: "Feel for the Road: Testing traction in safe zone" },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px dashed #ffd591",
    },
    className: "node-n4",
  },
  {
    id: "t1",
    position: { x: -1000, y: 150 },
    data: { label: "Poor road conditions (wet roads, black ice, loose gravel)" },
    style: {
      background: "#cce7ff",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px solid #black",
    },
    className: "node-t1",
  },
  {
    id: "p2",
    position: { x: -250, y: 300 },
    data: { label: "Fatigue Monitoring System: (If equipped) Lane departure/camera warnings.)" },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 12,
      border: "2px dashed #ffd591",
      padding: 8,
    },
    className: "node-p2",
  },
  {
    id: "p3",
    position: { x: -500, y: 300 },
    data: { label: "Sterile Cockpit Rule: No phone use while the vehicle is in motion." },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px dashed #ffd591",
    },
    className: "node-p3",
  },
  {
    id: "p4",
    position: { x: -750, y: 300 },
    data: { label: "The 30-Minute Break: Mandatory stop to reset alertness." },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px dashed #ffd591",
    },
    className: "node-p4",
  },
  {
    id: "t2",
    position: { x: -1000, y: 300 },
    data: { label: "Driver fatigue or distraction (eyes off road, phone use, drowsiness)" },
    style: {
      background: "#cce7ff",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px solid #black",
    },
    className: "node-t2",
  },

];
const initialEdges: Edge<any>[] = [
  { id: "top-harzard", source: "top", target: "harzard" },
  { id: "harzard-n2", source: "harzard", target: "n2" },
  { id: "n2-n3", source: "n2", target: "n3" },
  { id: "n3-n4", source: "n3", target: "n4" },
  { id: "n4-t1", source: "n4", target: "t1" },
  { id: "harzard-p2", source: "harzard", target: "p2" },
  { id: "p2-p3", source: "p2", target: "p3" },
  { id: "p3-p4", source: "p3", target: "p4" },
  { id: "p4-t2", source: "p4", target: "t2" }
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
