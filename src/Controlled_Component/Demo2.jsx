function Demo2()
{

     function handleInput(e)
     {
        // console.log(e.target.name )
        console.log(e.target.name +' '+ e.target.value)
    }
    return(
        <>

        <div>
            <input type="text" name="txt_name" placeholder="Enter name" onChange={handleInput}/>
            <br /><br />
            <input type="text" name="txt_age" placeholder="Enter age"  onChange={handleInput}/>
            <br />
            <br />
            {/* <input type="text" name="txt_name" placeholder="Enter name" onChange={(e)=>{
                console.log(e.target.name) }}/> */}

                <select  name="sel_city" onChange={handleInput}>
                    <option value="vaijapur">vaijapur</option>
                    <option value="pune">pune</option>
                    <option value="Nagar">Nagar</option>
                </select>
        </div>
        
        </>
    )
}
export default Demo2;