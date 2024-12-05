import { Link } from "react-router-dom";

const Welcome_File=()=>{

    return(
        <div>
            <h1 style={{color:"#D3B4FF",margin:"0"}}>Uday Paratp Yadav Welcomes You! </h1>
            <h2 style={{color:"#D3B4FF",margin:"0"}}>This is a simple CRUD operation website. </h2>
            
            <Link to={'/'}><h2>Visit HomePage</h2></Link>
        </div>
    )
}
export default Welcome_File;