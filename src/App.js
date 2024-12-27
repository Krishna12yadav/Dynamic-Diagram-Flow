 
import { addEdge, useNodesState, useEdgesState } from 'reactflow';  
import 'reactflow/dist/style.css';  // Import default styles  
import Diagram from './components/Diagram';  
import Sidebar from './components/Sidebar';  
import './App.css';  

const initialData = {  
  nodes: [  
    { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },  
    { id: '2', data: { label: 'Node 2' }, position: { x: 20, y: 200 } } ,
    { id: '3', data: { label: 'Node 3' }, position: { x: 180, y: 200 } } ,
  ],  
  edges: [{ id: 'e1-1', source: '1', target: '2' },
    { id: 'e1-2', source: '1', target: '3' }
  ]  
};  

const App = () => {  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialData.nodes);  
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.edges);  
  
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));  

  return (  
    <div className="app">  
      <Sidebar setNodes={setNodes} setEdges={setEdges} nodes={nodes} edges={edges} />  
      <div className="flow-container">  
        <Diagram
          nodes={nodes}  
          edges={edges}  
          onNodesChange={onNodesChange}  
          onEdgesChange={onEdgesChange}  
          onConnect={onConnect}  
        />  
      </div>  
    </div>  
  );  
};  

export default App;
