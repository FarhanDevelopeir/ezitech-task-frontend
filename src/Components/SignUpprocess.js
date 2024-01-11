import React from 'react'
import signup from  '../Images/6333204.jpg'
import select from  '../Images/3503986.jpg'
import start from  '../Images/10586.jpg'


const SignUpprocess = () => {
  return (
    <div>
        <h1 className='text-gray-700 mt-20 mb-16 text-center md:text-5xl text-3xl'>How it works?</h1>
        <div className='md:flex md:justify-between text-center lg:w-4/5  m-auto'>
            <div className='text-gray-700 md:w-1/3'>
                <img  className='w-[60%] m-auto  h-2/4' src={signup} />
                <h1 className='text-2xl mt-3 mb-4'>Sign up</h1>
                <p className=' w-[87%] m-auto'>Enter your name, email, and contact details to get started. It truly is that simple!</p>
            </div>
            <div className='text-gray-700 md:w-1/3'>
                <img className='w-[60%] m-auto  h-2/4' src={select} />
                <h1 className='text-2xl mt-3 mb-4'>Select Course</h1>
                <p className=' w-[87%] m-auto'>Browse our extensive and ever-expanding variety of courses for professional development.</p>
            </div>
            <div className='text-gray-700 md:w-1/3'>
                <img  className='w-[60%] m-auto  h-2/4' src={start} />
                <h1 className='text-2xl mt-3 mb-4'>Start Learning</h1>
                <p className=' w-[87%] m-auto'>Do the tasks, and your teacher will evaluate them before providing you with thorough</p>
            </div>
        </div>
    </div>
  )
}

export default SignUpprocess