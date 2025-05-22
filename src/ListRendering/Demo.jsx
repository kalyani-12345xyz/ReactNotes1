function Demo()
{
    let stud=[
        {name:"kalyani",age:7,city:"vaijapur"},
        {name:"kanchan",age:7,city:"pune"},
        {name:"tejal",age:7,city:"Nagar"},
        {name:"sakshi",age:7,city:"Pune"}
    ]
    return(
        
        <table border="1" cellPadding={10} cellSpacing={10}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    stud.map((s,index)=>{
                        return(
                            <tr key={index}>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.city}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    
    )
}
export default Demo;