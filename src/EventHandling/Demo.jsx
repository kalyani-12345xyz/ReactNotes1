function Demo()
{
 let sample=()=>{
    alert('hiii')
 }

    return(
        
        <>
        
        {/* <button onClick={alert('hi')}>Submit</button> */}
        <button onClick={()=>alert('Hi')}>Submit</button>

        <button onClick={sample}>Save</button>
        
        </>
    )
}
export default Demo;