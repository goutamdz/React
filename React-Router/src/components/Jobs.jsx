import { useLoaderData, useNavigate } from "react-router-dom";

function Jobs() {
    const JobsData = useLoaderData();
    let navigate=useNavigate();

    return (
        <div>
            {
                JobsData.map((job) => (
                    <div key={job.id} className="m-2 bg-cyan-100 p-2 inline-block cursor-pointer hover:bg-cyan-400"  onClick={() => navigate(`${job.id}`)} > {/* Always include a unique key for list items */}
                        <h1 className="text-lg">{job.title}</h1>
                        <h1 className="text-sm">{job.location}</h1>
                    </div>
                ))
            }
        </div>
    );
}

export default Jobs;

export const JobsLoader=async()=>{
    let res=await fetch("http://localhost:3000/jobs");
    return res.json();
}