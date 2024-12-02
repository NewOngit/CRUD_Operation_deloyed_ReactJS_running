import API_URL from "./API_URL";
import Links  from './Links'
import {Link} from 'react-router'
const Patch=({items})=>{


const deleteData=(id)=>{
//let url='https://my-json-server.typicode.com/newongit/my_JSON_server/items'
let url='http://localhost:3500/items'
let data={
// id,
// name,
// branch,
// role
}

let obj={
    method:'PATCH',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(data)
}

return API_URL(url,obj);

}


    return (
       <div>
        <h1 style={{color:'blue',textAlign:'center',border:'0.5px solid rgba(0,0,0,0.5)',margin:'0'}}>PATCH OPERATION </h1>
   
        {items.length?
items.map((item)=>{
    return(<Links item={item}/>)
}):<p style={{color:'red',textAlign:'center'}}>No data found for update!</p>
    
        }

       </div>
    )
}
export default Patch;