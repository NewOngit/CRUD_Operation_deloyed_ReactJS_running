import Get from './Get';
import Post from './Post'
import Delete from './Delete'
import Update from './Update';
import Patch from './Patch';
import Home from './Home';
import Welcome_File from './Welcome_File';
import Header from './Header';
import {useEffect,useState} from 'react'
import { Route, Routes } from 'react-router-dom';
function App() {

  const[items,setItems]=useState([
    {
        "id": 1,
        "name": "hridyesh sharma",
        "branch": "computer science engineering",
        "role": "assistant professor"
      }
]);
  const[name,setName]=useState('');
  const[branch,setBranch]=useState('');
  const[role,setRole]=useState('');
  const[editName,setEditName]=useState('')
  const[editRole,setEditRole]=useState('')
  const[editBranch,setEditBranch]=useState('')
  useEffect(()=>{
let API_URL="http://localhost:3500/items"
    let fetchMethod={
method:"GET",
headers:{
  'content-type':'application/json'
}
}

const fetchData=async()=>{
 try {
  let response=await fetch(API_URL,fetchData);
  if(!response.ok) throw Error("Not found");
  let res=await response.json();
  setItems(res);
  console.log(res);
 } catch (error) {
  console.log(error.message);
 }
  
}
(async()=>await fetchData())();
  },[])



  return (

    <div className="App">
     <Header/>
     
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/CRUD_Operation_ReactJS' element={<Welcome_File/>}/>
     <Route path='/get' element={<Get items={items}/>}/>
     <Route path='/delete' element={<Delete items={items} setItems={setItems}/>}/>
     <Route path='/post' element={<Post items={items} setItems={setItems} name={name} setName={setName} branch={branch} setBranch={setBranch} role={role} setRole={setRole}/>}/> 
     

    <Route path='/patch' element={<Patch items={items}/>}/>

     <Route path='/update/:id' element={<Update items={items} setItems={setItems} editName={editName} setEditName={setEditName} editBranch={editBranch} setEditBranch={setEditBranch} editRole={editRole} setEditRole={setEditRole}/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
