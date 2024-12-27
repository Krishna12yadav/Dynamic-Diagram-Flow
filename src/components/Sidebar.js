
import React, { useState } from 'react';  
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

// Sidebar component to add nodes and connect edges  
const Sidebar = ({ setNodes, setEdges, nodes,edges }) => {  
  const [nodeLabel, setNodeLabel] = useState('');  
  const [sourceNodeId, setSourceNodeId] = useState('');  
  const [targetNodeId, setTargetNodeId] = useState('');  
  const [deleteSourseEdge,setDeleteSourseEdge]=useState('');
  const [deleteTargetEdge,setDeleteTargetEdge]=useState('')


  // Function to add a new node  
  const addNode = () => {  
    const newNode = {  
      id:uuidv4(), // Unique ID for each node  
      data: { label: nodeLabel }, // Node data  
      position: { x:Math.floor( Math.random() * 400), y:Math.floor( Math.random() * 400)}, // Random position  
    };  
    setNodes((nds) => nds.concat(newNode)); // Update nodes state  
    setNodeLabel(''); // Reset label input  
  }; 
  
  const DeleteNode=(id)=>{
    const Nodes=nodes.filter((item)=>item.id!==id);
    setNodes(Nodes)

  }



  const deleteEdges=()=>{
const Id=edges.find((item)=>item.source===deleteSourseEdge && item.target===deleteTargetEdge)
if (!Id){
  alert('Not existing Edge')
  setDeleteSourseEdge('');
  setDeleteTargetEdge('');
  return 
}
const Edges=edges.filter((item)=>item.id!==Id.id)
setEdges(Edges)

    setDeleteSourseEdge('');
      setDeleteTargetEdge('');
    //setEdges(Edges)
  }



  // Function to connect two nodes  
  const connectNodes = () => {  
    if (!sourceNodeId || !targetNodeId) {  
      alert("Please select both source and target nodes.");  
      return;  
    }  
    
    const newEdge = {  
      id: `e${sourceNodeId}-${targetNodeId}`, // Unique ID for the edge  
      source: sourceNodeId, // ID of the source node  
      target: targetNodeId, // ID of the target node  
    };  
    
    setEdges((eds) => eds.concat(newEdge)); // Update edges state  
    setSourceNodeId(''); // Reset source selection  
    setTargetNodeId(''); // Reset target selection  
  };  

  return (  
    <div className="sidebar">  
      <h3>Add Node</h3>  
      <input   style={{padding:'4px',width:'70%'}}
        type="text"  
        value={nodeLabel}  
        onChange={(e) => setNodeLabel(e.target.value)}  
        placeholder="Node Label"  
      />  
      <button onClick={addNode} style={{backgroundColor:'#345995',border:'1px solid black',borderRadius:'4px',marginTop:'12px',color:'white'}}>Add Node</button> 

      <div  style={{marginBottom:'12px'}}>
      <label >  
        <h3>Delete Node</h3> 
        <select  style={{padding:'5px'}}  value='' onChange={(e) => DeleteNode(e.target.value)}>  
          <option value="">Select Node</option>  
          {nodes.map(node => (  
            <option key={node.id} value={node.id}>{node.data.label}</option>  
          ))}  
        </select>  
      </label> 
      </div> 






      <h3>Add Edges</h3> 
      <div  style={{marginBottom:'12px'}}>
      <label >  
        Source Node :  
        <select  style={{padding:'5px'}}  value={sourceNodeId} onChange={(e) => setSourceNodeId(e.target.value)}>  
          <option value="">Select Node</option>  
          {nodes.map(node => (  
            <option key={node.id} value={node.id}>{node.data.label}</option>  
          ))}  
        </select>  
      </label> 
      </div> 
      
      <div  style={{marginBottom:'12px'}}>
      <label>  
        Target Node :  
        <select style={{padding:'5px'}} value={targetNodeId} onChange={(e) => setTargetNodeId(e.target.value)}>  
          <option value="">Select Node</option>  
          {nodes.map(node => (  
            <option key={node.id} value={node.id}>{node.data.label}</option>  
          ))}  
        </select>  
      </label>  </div>

      <button onClick={connectNodes} style={{backgroundColor:'#345995',border:'1px solid black',borderRadius:'4px',marginTop:'12px',color:'white'}}
      >Connect Nodes</button>  


<h3>Delete Edges</h3> 
      <div  style={{marginBottom:'12px'}}>
      <label >  
        Source Node :  
        <select  style={{padding:'5px'}}  value={deleteSourseEdge} onChange={(e) => setDeleteSourseEdge(e.target.value)}>  
          <option value="">Select Node</option>  
          {nodes.map(node => (  
            <option key={node.id} value={node.id}>{node.data.label}</option>  
          ))}  
        </select>  
      </label> 
      </div> 
      
      <div  style={{marginBottom:'12px'}}>
      <label>  
        Target Node :  
        <select style={{padding:'5px'}} value={deleteTargetEdge} onChange={(e) => setDeleteTargetEdge(e.target.value)}>  
          <option value="">Select Node</option>  
          {nodes.map(node => (  
            <option key={node.id} value={node.id}>{node.data.label}</option>  
          ))}  
        </select>  
      </label>  </div>

      <button onClick={deleteEdges} style={{backgroundColor:'#345995',border:'1px solid black',borderRadius:'4px',marginTop:'12px',color:'white'}}
      >Delete Edges</button> 






    </div>  
  );  
};  

export default Sidebar;