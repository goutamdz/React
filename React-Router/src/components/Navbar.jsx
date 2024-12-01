import logo from '../assets/logo.png';
import {Link, useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function List({name}){
    return(
        <>
            <li className='p-2 bg-slate-400 rounded-lg cursor-pointer hover:bg-slate-300'>{name}</li>
        </>
    )
}

function Navbar(){
    let navigate=useNavigate();
    return(
        <>
            <div className="flex justify-between items-center p-2 mx-5 border-bo">
                <div><img src={logo} alt="Logo" style={{height:'75px'}}></img></div>
                
                <ul className='w-2/5 flex justify-evenly bg-slate-100 p-1 rounded-xl'>
                    <NavLink to={'/'}><List name="Home"/></NavLink>
                    <NavLink to={'/about'}><List name="About"/></NavLink>
                    <NavLink to={'/contact'}><List name="Contact"/></NavLink>
                    <NavLink to={'/product'}><List name="Products"/></NavLink>
                    <NavLink to={'/jobs'}><List name="Jobs"/></NavLink>
                </ul>
                <button className='bg-blue-950 rounded-md p-2 text-white hover:bg-blue-800 ' onClick={()=>{navigate('/about')}}>Get Started</button>

            </div>
        </>
    )
}

export default Navbar;