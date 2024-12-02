import API_URL from './API_URL';
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
const Update =({items,setItems,editName,setEditName,editBranch,setEditBranch,editRole,setEditRole})=>{
const {id}=useParams();
const item=items.find((item)=>item.id.toString()===id);
useEffect(()=>{
    if(item){
        setEditBranch(item.branch)
        setEditName(item.name)
        setEditRole(item.role)
    }
},[item,setEditName,setEditBranch,setEditRole]);

const onSubmission=async(e)=>{
e.preventDefault()
let url ='http://localhost:3500/items'
let data={
    id,
    name:editName,
    branch:editBranch,
    role:editRole
}
let obj={
    method:'PATCH',
    headers:{
        'content-type':'application-json'
    },
    body:JSON.stringify(data)
};
const patch=await API_URL(`${url}/${id}`,obj);
if(patch)
    alert('Something went wrong');
else {
    const oldData=items.filter((item)=>{
        return item.id!==id
    })
    let newData=[...oldData,data]
    setItems(newData)
    alert('Successfully Updated');
}
}
    return(
        <form className="update" onSubmit={onSubmission}>
        <input autoFocus
        id="name"
        type="text"
        placeholder="Enter name"
        value={editName}
        onChange={(e)=>setEditName(e.target.value)}
        required/>
        
        <input autoFocus
        id="branch"
        type="text"
        placeholder="Enter your branch eg. computer science"
        value={editBranch}
        onChange={(e)=>setEditBranch(e.target.value)}
        required/>
        
        <input autoFocus
        id="role"
        type="text"
        placeholder="Enter role"
        value={editRole}
        onChange={(e)=>setEditRole(e.target.value)}
        required/>
        
        
        <button style={{backgroundColor:'blue',color:"white"}} onClick={()=>onSubmission}>SUBMIT</button>
        
                    </form>
    )


    
}
export default Update;