import React from 'react'

function BgProfile({urlbg}) {
  return (
    <div className='w-full h-40' style={{backgroundImage:`url(${urlbg})`}}></div>
  )
}

export default BgProfile