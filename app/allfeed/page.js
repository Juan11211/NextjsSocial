"use client"

import React from 'react'

function page() {
  return (
    <div className='container min-h-screen p-24'>
      <div className='container'>
        <h1 className='text-xl'>All Feed</h1>
      </div>
      
      <div className='container'>
  <div className='grid grid-cols-1 gap-4'>
    {/* Post 1 */}
    <div className='card w-100 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Post 1</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>

    {/* Post 2 */}
    <div className='card w-100 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Post 2</h2>
        <p>Why did the chicken join a band? Because it had the drumsticks!</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>

    {/* Post 3 */}
    <div className='card w-100 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Post 3</h2>
        <p>What did one ocean say to the other ocean? Nothing, they just waved.</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default page
