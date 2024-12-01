import { Outlet } from "react-router-dom";

function JobsLayout(){
    return(
        <>
            <h1>Job Openings</h1>
            <p>All job opening in city.</p>
            <Outlet/>
        </>
    )
}

export default JobsLayout;