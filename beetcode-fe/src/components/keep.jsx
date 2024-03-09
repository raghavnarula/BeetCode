import React, { useEffect } from "react";
import { DataSet, Network } from 'vis-network/standalone';

function Graph() {
  useEffect(() => {
    function draw() {
      // create some nodes with initial positions
      const nodes = new DataSet([
        { id: 0, label: "", group: 1, x: 100, y: 100 },
        { id: 1, label: "", group: 1, x: 200, y: 200 },
        { id: 2, label: "", group: 1, x: 300, y: 300 },
        { id: 4, label: "", group: 1 },
        { id: 5, label: "", group: 1 },
        { id: 6, label: "", group: 1 },
        { id: 7, label: "", group: 1 },
        { id: 8, label: "", group: 1 },
        { id: 9, label: "", group: 1 },
        { id: 10, label: "", group: 2 },
        { id: 11, label: "", group: 2 },
        { id: 12, label: "", group: 3 },
        { id: 13, label: "", group: 2 },
        { id: 14, label: "", group: 2 },
        { id: 15, label: "", group: 2 },
        { id: 16, label: "", group: 3 },
        { id: 17, label: "", group: 3 },
        { id: 18, label: "", group: 3 },
        { id: 19, label: "", group: 3 },
        { id: 20, label: "", group: 3 },
      ]); 

      // create some edges
      const edges = new DataSet([
        { from: 1, to: 0 },
        { from: 2, to: 0 },
        { from: 3, to: 0 },
        { from: 3, to: 2 },
        { from: 4, to: 0 },
        { from: 5, to: 0 },
        { from: 6, to: 0 },
        { from: 7, to: 0 },
        { from: 8, to: 0 },
        { from: 9, to: 0 },
        { from: 11, to: 10 },
        { from: 11, to: 3 },
        { from: 11, to: 2 },
        { from: 11, to: 0 },
        { from: 12, to: 11 },
        { from: 13, to: 11 },
        { from: 14, to: 11 },
        { from: 15, to: 11 },
        { from: 17, to: 16 },
        { from: 18, to: 16 },
        { from: 18, to: 17 },
        { from: 19, to: 16 },
        { from: 19, to: 17 },
        { from: 19, to: 18 },
        { from: 20, to: 16 },
        { from: 20, to: 0 },
        { from: 20, to: 18 },
        { from: 21, to: 16 },
      ]); 

      // create a network
      const container = document.getElementById("mynetwork");
      const data = {
        nodes: nodes,
        edges: edges,
      };
      const options = {
        nodes: {
          shape: "dot",
          size: 16,
        },
        physics: {
          forceAtlas2Based: {
            gravitationalConstant: -26,
            centralGravity: 0.005,
            springLength: 230,
            springConstant: 0.18,
          },
          maxVelocity: 146,
          solver: "forceAtlas2Based",
          timestep: 0.35,
          stabilization: { iterations: 150 },
        },
      };
      const network = new Network(container, data, options);
      
      // Start the animation
      network.startSimulation();
    }

    draw();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div id="mynetwork" className=""></div>
  );
}

export default Graph;
