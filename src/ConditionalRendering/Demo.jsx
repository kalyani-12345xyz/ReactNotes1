function Demo()
{
    let fees="unpaid"
    

    //out side jsx
    if(fees==="paid")
    {
        return(
            <div>
            <h2>Admissing bhetal</h2>
            </div>
        )
    }
    else{
        return(
            <div>
            
            <h2>Admission ny bhetnar</h2>
            </div>
        )
    }
    
}
export default Demo;