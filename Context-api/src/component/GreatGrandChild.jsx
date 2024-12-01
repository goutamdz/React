import { useContext } from "react";
import MyContext from "../MyContext";

function GreatGrandChild(){
    let count=useContext(MyContext);
    return(
        <>
            <p>I am Great Grand Child</p>
            <p>Count is {count}</p>
        </>
    )
}

export default GreatGrandChild;