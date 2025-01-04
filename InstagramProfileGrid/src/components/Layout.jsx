import React from 'react'
import BgProfile from './BgProfile'
import Profile from './Profile'
import Box from './box'

function Layout({bg,paris,name,age,followers,likes,photos}) {
  return (
    <>
    <div className='relative'>
        <BgProfile urlbg={bg} />
        <Profile url={paris}/>  
    </div>
    <div className="mt-28 text-center">
        <h1 className="text-3xl font-semibold inline-block">{name}</h1>&nbsp;&nbsp;{age}
    </div>
    <br></br>
    <hr></hr>
    <br></br>
    <div className="flex justify-evenly">
        <Box number={followers} label="Followers"/>
        <Box number={likes} label="Likes"/>
        <Box number={photos} label="Photos"/>
      </div>
    </>
    
  )
}

export default Layout;