import { Outlet,useNavigate } from "react-router-dom";

function ContactLayout(){
    
    let navigate=useNavigate()
    return(
        <>
            <h1>contact</h1>
            <Outlet/>
            <button onClick={()=>{navigate('form')}} className='mx-2  bg-green-400 p-2 rounded-md hover:outline-double'>Form</button>
            <button onClick={()=>{navigate('info')}} className='mx-2  bg-green-600 p-2 rounded-md hover:outline-double'>Info</button>
        </>
    )
}

export default ContactLayout;