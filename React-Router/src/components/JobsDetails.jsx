import { useLoaderData, useParams } from "react-router-dom"

export const JobsDetailsLoader=async({params})=>{
    let {id}=params;
    let res=await fetch(`http://localhost:3000/jobs/${id}`);
    if(!res.ok)
        throw Error("Job not found with specified id");
    return res.json();
}

export default function JobsDetails(){
    let Data=useLoaderData();
    console.log(Data);
    return(
        <>
            <div className="m-2 bg-cyan-100 p-2 inline-block cursor-pointer hover:bg-cyan-400"> {/* Always include a unique key for list items */}
                <h1 className="text-lg">{Data.id}</h1>
                <h1 className="text-sm">{Data.title}</h1>
                <h1 className="text-lg">{Data.location}</h1>
                <h1 className="text-sm">{Data.salary}</h1>

            </div>
        </>
    )
}