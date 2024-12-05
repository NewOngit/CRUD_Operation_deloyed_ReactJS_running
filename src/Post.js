import API_URL from "./API_URL";
const Post=({items,setItems,name,setName,branch,setBranch,role,setRole})=>{

    const onsubmission=async (e)=>{
e.preventDefault();
        let id=items.length?items[items.length-1].id+1:1;
        let data={
            id:id.toString(),
            name,
            branch,
            role
            }
           // let url='https://my-json-server.typicode.com/newongit/my_JSON_server/items'

    //let url='http://localhost:3500/items';
//     let obj={
//         method:"POST",
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify(data)
//     }
// const post= await API_URL(url,obj);
//      if(post){
//          console.log(data);
//         alert(post)
//     }
//     else{
//         alert('sumitted Successfully');
//         let newData=[...items,data];
//         setItems(newData);
//     }

    alert('sumitted Successfully');
        let newData=[...items,data];
        setItems(newData);
}
    

    return (
        <div>
            <h1 style={{color:'blue',textAlign:'center',border:'0.5px solid rgba(0,0,0,0.5)',margin:'0'}}>POST OPERATION</h1>
   
            <form className="post" onSubmit={onsubmission}>
<input autoFocus
id="name"
type="text"
placeholder="Enter name"
value={name}
onChange={(e)=>setName(e.target.value)}
required/>

<input autoFocus
id="branch"
type="text"
placeholder="Enter your branch eg. computer science"
value={branch}
onChange={(e)=>setBranch(e.target.value)}
required/>

<input autoFocus
id="role"
type="text"
placeholder="Enter role"
value={role}
onChange={(e)=>setRole(e.target.value)}
required/>


<button style={{backgroundColor:'blue',color:"white"}} onClick={()=>onsubmission}>SUBMIT</button>

            </form>
        </div>

    )
}
export default Post;