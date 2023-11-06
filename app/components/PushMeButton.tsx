"use client"
import React from 'react'

const PushMeButton = () => {
  return (
    <div className='p-4 bg-blue-700 text-neutral-100 hover:bg-blue-800 cursor-pointer rounded-lg mt-2 transition-all'>
      <button className='btn btn-neutral' onClick={() => console.log("Click")}>Push me!</button><br />
      <button className='btn btn-secondary mt-3'>Push me baby</button>
    </div> 
  )
}

export default PushMeButton