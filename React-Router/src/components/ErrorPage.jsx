import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    let error=useRouteError();
    return(
        <>
          <p>Error Occured!</p>
          <p>{error.message}</p>
        </>
    )
}