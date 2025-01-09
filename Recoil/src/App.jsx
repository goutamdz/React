//import { networkAtom, jobsAtom, messagingAtom, noificationAtom, totalNotification } from './atom'
import {notifications,totalNotification} from './atoms/atom'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { useEffect } from 'react';
import todosFamily from './atoms/todoAtom';

function App() {
  return (
    <>
      <RecoilRoot>
        <Myapp />
        <Todo id={1}/>
        <Todo id={2}/>
      </RecoilRoot>
    </>

  )
}

//atomFamily
function Todo({id}){
  let todo=useRecoilValue(todosFamily(id))
  return(
    <>
      <p>{todo.title}</p>
    </>
  )
}

function Myapp() {
  //using recoil atom as  useState
  // let networkCount = useRecoilValue(networkAtom);
  // let jobsCount = useRecoilValue(jobsAtom)
  // let messagingCount = useRecoilValue(messagingAtom);
  // let noificationCount = useRecoilValue(noificationAtom);
  // let totalNotificationCount = useRecoilValue(totalNotification);

  //using recoil selector as useState
    // let data=useRecoilValue(notifications);
    let data=useRecoilValue(notifications);
    let totalNotificationCount = useRecoilValue(totalNotification);
    console.log(data);

    
    //fetching data from server
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let data = await fetch("http://localhost:3000/data");
  //       let response = await data.json();
  //       let randomIndex = Math.floor(Math.random() * response.length);
  //       console.log(response[randomIndex]);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, [])

  return (
    <>
      <button>Home</button>&nbsp;
      <button>My Network({data.network <= 99 ? data.network : "99+"})</button>&nbsp;
      <button> Jobs ({data.jobs})</button>&nbsp;
      <button>Messaging ({data.messaging})</button>&nbsp;
      <button>Notifications ({data.notifications <= 99 ? data.notifications : "99+"})</button>&nbsp;
      <button>Me ({totalNotificationCount})</button>&nbsp;
    </>
  )
}

function MyappWithLoadable() {//useRecoilValueLoadable
    let data=useRecoilValueLoadable(notifications);
    let totalNotificationCount = useRecoilValueLoadable(totalNotification);
    console.log(data);

  if(data.state==="loading"){
    return <div>Loading...</div>
  }
  else if(data.state==="hasValue"){
    return (
      <>
        <button>Home</button>&nbsp;
        <button>My Network({data.contents.network <= 99 ? data.contents.network : "99+"})</button>&nbsp;
        <button> Jobs ({data.contents.jobs})</button>&nbsp;
        <button>Messaging ({data.contents.messaging})</button>&nbsp;
        <button>Notifications ({data.contents.notifications <= 99 ? data.contents.notifications : "99+"})</button>&nbsp;
        <button>Me ({totalNotificationCount.contents})</button>&nbsp;
      </>
    )
  }
  else if(data.state==="hasError"){
    return <div>Error:{data.contents}</div>
  }
}


export default App
