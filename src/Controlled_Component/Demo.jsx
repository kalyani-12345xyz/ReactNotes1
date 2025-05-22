import { useState } from "react"

function Demo()
{

    let incre=()=>{
        setCount(count+1)
    }
    
    let decre=()=>{
        setCount(count-1)
    }
    let[count,setCount]=useState(0)
    return(
        <>
        <h2>{count}</h2>
        <button onClick={incre}>Incre</button>
        <button onClick={decre}>Decre</button>

        
        </>
    )
}
export default Demo


