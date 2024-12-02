import API_URL from "./API_URL"

const Delete =({items,setItems})=>{
const deleteData=async(id)=>{
let url='http://localhost:3500/items'
let obj={
    method:'DELETE'
}
const del=await API_URL(`${url}/${parseInt(id,10)}`,obj);
if(del){
    alert("something went wrong");
    console.log(id);
}
    
else{
    alert('Deleted Successfully');
    const item_=items.filter((item)=>item.id!==id)
    setItems(item_)
} 
}

    return (
         <div>
            <h1 style={{color:'blue',textAlign:'center',border:'0.5px solid rgba(0,0,0,0.5)',margin:'0'}}>DELETE OPERATION</h1>
   
{
    items.map((item)=>{
        return(
            <div class="patch" key={item.id}>
                <h1 style={{margin:'0',padding:'0'}}>{item.name}</h1>
            <p style={{margin:'0',padding:'0'}}>{item.role}</p>
            <span>{item.branch}</span><br/>
            <button style={{color:"red"}} onClick={()=>deleteData(item.id)}>Delete This Data</button>
                </div>
        )
    })
}
        </div>
    )
}
export default Delete;