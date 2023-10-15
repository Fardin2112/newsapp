import React from 'react'
import loading from './loading.gif'

function spinner() {
  return (
    <div className='text-center'>
        <img src={loading} alt="" />
    </div>
  )
}

export default spinner
