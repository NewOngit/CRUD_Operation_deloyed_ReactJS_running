import { Link } from "react-router-dom";
const Home=()=>{

    return(
        
        <div style={{display:'flex',width:'100%',margin:'0'}}>
            <Link to={'/get'} style={{color:'white',textDecoration:'none',flexGrow:'1',border:'0.5px solid rgba(0,0,0,.5)',textAlign:'center',backgroundColor:'#454566'}}>Get</Link>
            <Link to={'/post'} style={{color:'white',textDecoration:'none',flexGrow:'1',border:'0.5px solid rgba(0,0,0,.5)',textAlign:'center',backgroundColor:'#454566'}}>Post</Link>
            <Link to={'/patch'} style={{color:'white',textDecoration:'none',flexGrow:'1',border:'0.5px solid rgba(0,0,0,.5)',textAlign:'center',backgroundColor:'#454566'}}>Update</Link>
            <Link to={'/delete'} style={{color:'white',textDecoration:'none',flexGrow:'1',border:'0.5px solid rgba(0,0,0,.5)',textAlign:'center',backgroundColor:'#454566'}}>Delele</Link>

        </div>
    )
}
export default Home;