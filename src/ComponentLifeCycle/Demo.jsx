import { useState } from "react";
import Demo2 from "./Demo2";

function Demo()
{
    let [display,setDisplay]=useState(false);
    return(
        <>
        <h2>Demo component</h2>
        {

       display? <Demo2 display={display}/>:null

}
<button onClick={()=>setDisplay(!display)}>Toggle</button>
        
        </>
    )
}
export default Demo;