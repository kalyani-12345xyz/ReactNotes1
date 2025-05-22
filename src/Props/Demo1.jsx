// function Demo1(props)
function Demo1({student})
{
    return(
        <>
        <h2>Demo component1</h2>
        {/* {props.name} */}
        {student.name}
        <br />
        {student.age}
        <br />
        {student.city}
        <br />

        
        </>
    )
}
export default Demo1;