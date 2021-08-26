import { useState } from "react";

function Item2 (props) {

    const [inputData , setData] = useState(55);

    const changeInputData = (e) => {
        setData(e);
    }

    return ( 
        <div>
        <h1>Item N° 2</h1>
        <input type="text" 
        value={inputData}
        onInput={e => changeInputData(e.target.value)} 
        ></input>

        <p>Inputed data : {inputData}</p>

        </div>
        )

}
export default Item2;