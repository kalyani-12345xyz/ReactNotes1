import { useEffect, useState } from "react";

function Demo2({display})
{
    let [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('Component create/Mount')
    },[display])
    useEffect(()=>{
        return()=>{
            console.log('Component unMount/Remove')
        }
    },[display])
    useEffect(()=>{
        console.log('changes in component')
    },[count])
    return(
        <>
        <h2>Component 2</h2>
        <br />
        <h2>{count}</h2>
        <br />
        <button onClick={()=>setCount(count+1)}>Incre</button>
        
        </>
    )
}
export default Demo2;