import React from "react";
import { useState } from "react";

const App = () => {

    const [data, setData] = useState('white')
    const [show, setShow] = useState(true)

    return(
        <div>
            {
           show ? <p style={{color:'black',backgroundColor:data}}>{data}</p> : <p style={{color:'white', backgroundColor:data}}>{data}</p>
            }
           <input type="text" onChange={(e)=>{setData(e.target.value)}}/><br/><br/>
           <button onClick={()=>setShow(!show)}>Toggle to change mode</button> 
        </div>
    )
}

export default App;