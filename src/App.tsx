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

const initialNodes: Node<any>[] = [
 
  {
    id: "legend",
    position: { x: 900, y: 80 },
    data: {
      label: `
        🔹 Threats – Light Blue
        🟢 Preventive Controls – Light Green
        🔴 Consequences – Light Red
        🟣 Mitigating Controls – Light Purple
        🟡 Hazard  – Yellow Circle
        🩷 Top Event – Pink
      `
    },
    style: {
      background: "white",
      color: "black",
      width: 260,
      height: 160,
      borderRadius: 12,
      border: "2px solid black",
      padding: 10,
      whiteSpace: "pre-line",
      fontSize: "12px",
      lineHeight: "18px"
    }
  },
  {
    id: "title",
    position: { x: -70, y: 0 },
    data: { label: "Bowtie Risk Analysis: Loss of Vehicle Control" },
    style: {
      background: "white",
      color: "black",
      width: 400,
      height: 80,
      borderRadius: 8,
      border: "2px solid black",
      padding: 10,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px"
    }
  },
  {
    id: "top",
    type: "topEvent",
    position: { x: 60, y: 200 },
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
  position: { x: 40, y: 340 },
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
  {
    id: "a2",
    position: { x: -250, y: 450 },
    data: { label: "Pre-Trip Inspection (PTI): 360-degree check of tires, brakes, lights." },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 12,
      border: "2px dashed #ffd591",
      padding: 8,
    },
    className: "node-a2",
  },
  {
    id: "a3",
    position: { x: -500, y: 450 },
    data: { label: "En-Route Inspection: Checking hubs and tires at rest stops." },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px dashed #ffd591",
    },
    className: "node-a3",
  },
  {
    id: "a4",
    position: { x: -750, y: 450 },
    data: { label: "TPMS: Tire Pressure Monitoring System alerts." },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px dashed #ffd591",
    },
    className: "node-a4",
  },
  {
    id: "t3",
    position: { x: -1000, y: 450 },
    data: { label: "Mechanical issues (tire blowout, brake fade)" },
    style: {
      background: "#cce7ff",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px solid #black",
    },
    className: "node-t3",
  },
  {
    id: "b1",
    position: { x: -250, y: 600 },
    data: { label: "Securement Inspection: Verifying tension on straps/chains." },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 12,
      border: "2px dashed #ffd591",
      padding: 8,
    },
    className: "node-b1",
  },
 
  {
    id: "b2",
    position: { x: -500, y: 600 },
    data: { label: "Scale Ticket Verification: Confirming legal axle weight distribution." },
    style: {
      background: "#d9f7be",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px dashed #ffd591",
    },
    className: "node-b2",
  },
  {
    id: "t4",
    position: { x: -750, y: 600 },
    data: { label: "Improper cargo loading (shifting load, overweight trailer)" },
    style: {
      background: "#cce7ff",
      color: "#black",
      width: 220,
      height: 70,
      borderRadius: 8,
      border: "2px solid #black",
    },
    className: "node-t4",
  },
  {
    id: "c1",
    position: { x: 550, y: 200 },
    data: { label: "Rear-end or multi-vehicle collision" },
    style: {
      background: "#ffccc7",
      color: "#black",
      width: 160,
      height: 60,
      borderRadius: 8,
      border: "2px solid #ff4d4f",
    },
    className: "node-c1",
  },
  {
    id: "m1",
    position: { x: 300, y: 200 },
    data: { label: "Defensive maneuver training (Evasive actions, controlled braking)" },
    style: {
      background: "#E6E0FF",
      color: "#black",
      width: 200,
      height: 75,
      borderRadius: 8,
      border: "2px solid #E6E0FF",
    },
    className: "node-m1",
  },
  {
    id: "c2",
    position: { x: 550, y: 350 },
    data: { label: "Vehicle roll-over" },
    style: {
      background: "#ffccc7",
      color: "#black",
      width: 160,
      height: 60,
      borderRadius: 8,
      border: "2px solid #ff4d4f",
    },
    className: "node-c2",
  },
  {
    id: "m2",
    position: { x: 300, y: 350 },
    data: { label: "Automatic braking or stability control systems (ABS/ESC)" },
    style: {
      background: "#E6E0FF",
      color: "#black",
      width: 200,
      height: 75,
      borderRadius: 8,
      border: "2px solid #E6E0FF",
    },
    className: "node-m2",
  },
  {
    id: "c3",
    position: { x: 550, y: 500 },
    data: { label: "Injury to driver" },
    style: {
      background: "#ffccc7",
      color: "#black",
      width: 160,
      height: 60,
      borderRadius: 8,
      border: "2px solid #ff4d4f",
    },
    className: "node-c3",
  },
  {
    id: "m3",
    position: { x: 300, y: 500 },
    data: { label: "Emergency communication systems (Quick alert to emergency responders)" },
    style: {
      background: "#E6E0FF",
      color: "#black",
      width: 200,
      height: 75,
      borderRadius: 8,
      border: "2px solid #E6E0FF",
    },
    className: "node-m3",
  }
  


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
  { id: "p4-t2", source: "p4", target: "t2" },
  { id: "harzard-a2", source: "harzard", target: "a2" },
  { id: "a2-a3", source: "a2", target: "a3" },
  { id: "a3-a4", source: "a3", target: "a4" },
  { id: "a4-a2", source: "a4", target: "t3" },
  { id: "harzard-b1", source: "harzard", target: "b1" },
  { id: "b1-b2", source: "b1", target: "b2" },
  { id: "b2-t4", source: "b2", target: "t4" },
  { id: "harzard-m1", source: "harzard", target: "m1" },
  { id: "m1-c1", source: "m1", target: "c1" },
  { id: "harzard-m2", source: "harzard", target: "m2" },
  { id: "m2-c2", source: "m2", target: "c2" },
  { id: "harzard-m3", source: "harzard", target: "m3" },
  { id: "m3-c3", source: "m3", target: "c3" }
  
];


export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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
