import React from 'react'

function box({number,label}) {
  return (
    <div className='inline-block'>
        <h1>{number}</h1>
        <p className='opacity-50'>{label}</p>
    </div>
  )
}

export default box