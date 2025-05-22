import { useState } from "react";
import Demo2 from "./Demo2";

function Demo()
{
    let[count,setCount]=useState(0)
    let incre=()=>{
        setCount(count+1)
        
    }
    let decre=()=>{
        setCount(count-1)
    }
    return(
        <>
        <h2>{count}</h2>
        <br />
        <button onClick={incre}>Incre</button>
        <br />
        <br />
        <button onClick={decre}>Decre</button>
        <br /><br />
        <Demo2 count={count} incre={incre} decre={decre}/>


        
        </>
    )
}
export default Demo;