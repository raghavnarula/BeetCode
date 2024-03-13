import React, { useEffect } from "react";
import { DataSet, Network } from 'vis-network/standalone';

function Graph() {
  useEffect(() => {
    function draw() {
      // create some nodes with initial positions
      const nodes = new DataSet([
        { id: 0, label: "", group: 1},
        { id: 1, label: "", group: 3},
        { id: 2, label: "", group: 1},
        { id: 4, label: "", group: 2 },
        { id: 5, label: "", group: 3 },
        { id: 6, label: "", group: 1 },
        { id: 7, label: "", group: 1 },
        { id: 8, label: "", group: 2 },
        { id: 9, label: "", group: 1 },
        { id: 10, label: "", group: 2 },
        { id: 11, label: "", group: 2 },
        { id: 12, label: "", group: 3 },
        { id: 13, label: "", group: 5 },
        { id: 14, label: "", group: 2 },
        { id: 15, label: "", group: 2 },
        { id: 16, label: "", group: 6 },
        { id: 17, label: "", group: 1 },
        { id: 18, label: "", group: 3 },
        { id: 19, label: "", group: 3 },
        { id: 20, label: "", group: 8 },
      ]); 

      // create some edges
      const edges = new DataSet([
        { from: 1, to: 20 },
        { from: 2, to: 0 },
        { from: 3, to: 15 },
        { from: 3, to: 2 },
        { from: 4, to: 0 },
        { from: 5, to: 0 },
        { from: 6, to: 0 },
        { from: 7, to: 4 },
        { from: 8, to: 0 },
        { from: 9, to: 2 },
        { from: 11, to: 10 },
        { from: 11, to: 3 },
        { from: 11, to: 2 },
        { from: 11, to: 0 },
        { from: 12, to: 11 },
        { from: 13, to: 11 },
        { from: 14, to: 11 },
        { from: 15, to: 11 },
        { from: 17, to: 16 },
        { from: 18, to: 15 },
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
          barnesHut: {
            springLength: 200, // Adjust as needed
            avoidOverlap: 1, // Prevent overlapping nodes
          },
          boundedImprovement: {
            enabled: true, // Enable boundary confinement
            // Adjust as needed to match the container size
            radius: 1,
          },
          wind: { x: 1.1, y: -0.2 }
        },
      };
      var afterzoomlimit = { //here we are setting the zoom limit to move to 
        scale: 0.49,
      }
      var zoominLimit = {
        scale:0.50,
      }

      const network = new Network(container, data, options);
      network.on("zoom",function(){ //while zooming 
        if(network.getScale() <= 0.49 )//the limit you want to stop at
        {
            network.moveTo(afterzoomlimit); //set this limit so it stops zooming out here
        }
        if (network.getScale() >=0.50){
          network.moveTo(zoominLimit)
        }

        });
      
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
