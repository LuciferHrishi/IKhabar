import React from 'react'
import Loading from '../loader.gif';
export default function loader() {
  return (
    <div className='text-center'>
      <img src={Loading} alt="spinner"/>
    </div>
  )
}
