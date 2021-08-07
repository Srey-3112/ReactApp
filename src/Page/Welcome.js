import React from 'react'

export const Welcome = () => {
    return (
        <div>
            <h1>Welcome Page !!</h1>
            <nav>
                <ul>
                    <li> <Link to ="/welcome/a">A</Link> 

                        <Route path="/welcome/a">
                            <h1>Hello This is nested Route...A</h1>
                            <AddEmployee/>
                        </Route>


                    </li>

                    <li> <Link to = "/welcome/b" >B</Link>

                        <Route path="/welcome/b">
                            <h1>Hello This is nested Route...B</h1>
                        </Route>
                        
                    </li>


                    <li><Link to ="/welcome/c">C</Link> 

                        <Route path="/welcome/c">
                            <h1>Hello This is nested Route...C</h1>
                        </Route>
                    </li>
                </ul>
            </nav>


        </div>
    )
}
