function Demo2() {
    // Inside jsx = ternary, &&  but not directly if else allow 
    // if we want to use if else inside jsx - IIFE (()=>{})()
    let isLogin = false
    return (
        <div>
            <h1>Demo Component</h1>
            { isLogin == true  ?  <h1>Home Page</h1> : <h1>Login Page</h1> }
        
            {/* {isLogin &&  <h1>Home Page</h1> } */}
            
            {
                // (()=>{})()

                    (()=>{
                        if(isLogin)
                        {
                            return <h1>Home Page</h1>
                        }
                        else
                        {
                            return <h1>Login Page</h1>
                        }
                    })()


            }

        </div>
    );
}
export default Demo2;