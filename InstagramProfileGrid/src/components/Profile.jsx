import React from 'react'
import paris from '../assets/paris.jpg'
import { useState } from 'react'

function Profile({url}) {
  let [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show);
  }

  
  return (
    <>
      <img src={url} alt='' className='rounded-full w-48 bottom-0 absolute top-24 left-1/2 transform -translate-x-1/2' onClick={handleShow}></img>
      {show && <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center' onClick={handleShow}>
        <img src={url} alt='' className= 'w-96'></img>
      </div>
      }
    </>
  )
}

export default Profile;