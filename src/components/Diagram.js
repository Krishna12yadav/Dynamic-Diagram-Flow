import React from 'react';  
import { ReactFlow } from 'reactflow';  

const Diagram = ({ nodes, edges, onNodesChange, onEdgesChange, onConnect }) => {  
  return (  
    <ReactFlow  
      nodes={nodes}  
      edges={edges}  
      onNodesChange={onNodesChange}  
      onEdgesChange={onEdgesChange}  
      onConnect={onConnect}  
      style={{ width: '45%'}}  
    />  
  );  
};  

export default Diagram;