import Item from './Item';
const Get=({items})=>{
return(
<div >
    <h1 style={{color:'blue',textAlign:'center',border:'0.5px solid rgba(0,0,0,0.5)',margin:'0'}}>GET OPERATION</h1>
    {items.length?
        items.map((item)=>{
            return (<Item item={item}/>) 
        }):
        <p style={{color:"red",textAlign:'center'}}>No Data Found</p>
    }
</div>

)
}
export default Get;