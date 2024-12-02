const Item=({item})=>{
    return(
        <div style={{border:'.5px solid rgba(0,0,0,0.4)'}}>
            <h1 style={{margin:'0',padding:'0'}}>{item.name}</h1>
            <p style={{margin:'0',padding:'0'}}>{item.role}</p>
            <span>{item.branch}</span>
            

        </div>
    )
}
export default Item;