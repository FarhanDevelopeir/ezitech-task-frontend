import React, { useEffect, useState } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const wordsArray = ['Web Design', 'Programming', 'Marketing', 'Social Skills'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
    }, 2000); // Adjust the interval duration as needed

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);
  
  return (
    <div className='w-full'>
        <div className='w-full'>
            <img className='img w-full' src='https://img.freepik.com/premium-photo/black-wireless-keyboard-green-plant-black-background_406607-6069.jpg?size=626&ext=jpg&uid=R85735284&ga=GA1.1.380215191.1684328641&semt=ais' />
            <div className='box text-white text-center absolute 
            xl:top-[35%] xl:left-[30%]
             lg:top-[30%] lg:left-[20%]
             md:top-[30%] md:left-[10%]
             sm:top-[30%] sm:left-[18%]
             top-[35%] left-[15%]
             m-autonb b
             '>
                <h1 className='color font-semibold  md:text-5xl text-3xl'>Learn the fundamentals with  <br/>Our Experts in{' '}
            <span className='animated-word text-blue-500'>{wordsArray[currentWordIndex]}</span>
                </h1>
                <h1 className='md:text-2xl text-xl mt-5 mb-5 hidden sm:block'>Utilize Effective Training to Reach Your Potential!</h1>
                <div>
<div class="mb-3 w-[70%] m-auto hidden sm:block">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch border rounded bg-white ">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search Courses..."
      aria-label="Search"
      aria-describedby="button-addon1" />

   
    <button
      class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5 text-black">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
                </div>
                <h1 className='mt-5 mb-5 hidden sm:block'>Explore Our more Useful products</h1>
                <div className='sm:flex sm:justify-between mt-10 sm:mt-0 md:text-5xl text-2xl font-bold'>
                    <h1>EZILBL<span className='text-blue-500'>O</span>GS</h1>
                    <h1>EZIP<span className='text-blue-500'>O</span>S</h1>
                    <h1>EZIC<span className='text-blue-500'>O</span>DING</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection