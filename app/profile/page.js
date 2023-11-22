"use client"

import ProfileCard from '@/components/ProfileCard'
import React from 'react'

function Profile() {
  return (
    <div className='container'>

      <div>
          <ProfileCard />
      </div>
    
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

          <div className='card w-100 bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>Post 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>POST</button>
              </div>
          </div>

          <div className='card w-100 bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>Post 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>POST</button>
              </div>
          </div>

          </div>
          </div>
    </div>

</div>
    </div>
  );
};


export default Profile
