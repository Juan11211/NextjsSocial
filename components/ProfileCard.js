import React from 'react';
import Link from 'next/link';

function ProfileCard() {
  return (
    <div className='container mx-5 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-16 '>
      <div className='flex'>
        <div className='w-32 h-32 m-6'>
          <div className='relative rounded-full overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src='https://i.pinimg.com/474x/94/05/5f/94055f0a5b69b2443c75b6f961019a8e.jpg'
              alt='Profile'
            />
          </div>
        </div>

        <div className='text-center mx-9 mt-10'>
          <h3 className='text-xl font-semibold text-gray-800'>Juan Aviles</h3>
          <p className='text-sm text-gray-600'>Brooklyn, NY</p>
          
        <div className='flex'>
            <div className='mt-2'>
                        <Link
                        href='#'
                        className='text-gray-600 hover:text-purple-900 font-medium text-sm p-1'
                    >
                    Followers
                    </Link>
                    </div>

                    <div className='mt-2'>
                        <Link
                        href='#'
                        className='text-gray-600 hover:text-purple-900 font-medium text-sm p-1'
                    >
                    Following
                    </Link>
                    </div>

        </div>
       

   
        
        </div>
      </div>

      
    </div>
  );
}

export default ProfileCard;
