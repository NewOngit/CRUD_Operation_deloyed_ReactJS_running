import { Link } from "react-router-dom";
const Links =({item})=>{


    return (
        <div style={{border:'.5px solid rgba(0,0,0,.5)'}}>
            <Link to={`/update/${item.id}`} style={{color:'black',textDecoration:'none'}}><h1 style={{margin:'0',padding:'0'}}>{item.name}</h1>
            <p style={{margin:'0',padding:'0'}}>{item.role}</p>
            <span>{item.branch}</span>
            </Link>
        </div>
    )
}
export default Links;