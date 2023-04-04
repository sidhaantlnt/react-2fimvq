import React, { useState, useEffect } from "react";
import "./style.css";
import ReactFlow, { getIncomers } from "react-flow-renderer";

export default function App() {
  const elements = [
    {
      id: "1",
      type: "input", // input node
      data: { label: "Input Node" },
      position: { x: 250, y: 25 }
    },

    // default node
    {
      id: "2",
      // you can also pass a React component as a label
      data: { label: "Default Node" },
      position: { x: 100, y: 125 }
    },
    {
      id: "3",
      type: "output", // output node
      data: { label: "Output Node" },
      position: { x: 250, y: 250 }
    },
    {
      id: "4",
      type: "input",
      data: { label: "4 sample" },
      position: { x: 250, y: 350 }
    },
    // animated edge
    { id: "e1-2", source: "1", target: "2", animated: true },

    {
      id: "e2-3",
      source: "2",
      target: "3",
      label: "Default-Output",
      arrowHeadType: "arrow"
    }
  ];
  const [els, setElement] = useState(elements);
  const openMenuContext = (event, node) => {
    console.log(node);
  };
  return (
    <div style={{ height: 700 }}>
      <ReactFlow
        elements={els}
        onElementClick={(event, nodes) => {
          console.log(getIncomers(nodes, elements));
        }}
      />
    </div>
  );
}
