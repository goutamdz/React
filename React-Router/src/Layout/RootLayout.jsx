import Navbar from '../components/Navbar'
import {Outlet, useNavigate} from 'react-router-dom'
function RootLayout(){
    return(
        <>
            <Navbar/>
            <div className="text-center">
                <Outlet/>
            </div>
        </>
    )
}

export default RootLayout;