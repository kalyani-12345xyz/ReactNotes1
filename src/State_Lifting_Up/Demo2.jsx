function Demo2({count,incre,decre})
{
    return(
        <>
        <h2>{count}</h2>
        <button onClick={incre}>Incre</button>
        <br />
        <button onClick={decre}>Decre</button>

        
        </>
    )
}
export default Demo2;