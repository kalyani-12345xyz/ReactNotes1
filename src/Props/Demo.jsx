import Demo1 from "./Demo1";

function Demo()
{
    // let name="kalyani"

    let stud={
        name:"kalyani",
        age:6,
        city:"Vaijapur"
    }
    return(
        <>
        <h2>Demo component</h2>
        {/* <Demo1 name={name}/> */}
        <Demo1 student={stud}/>

        
        
        </>
    )
}
export default Demo;