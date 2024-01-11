import React, { useState } from 'react';
import './Header.css'

const Header = () => {
  const [openToggle, setOpenToggle] = useState(false)
  const [openKeys, setKeys] = useState(false)

  const toggle=()=>{
    setOpenToggle(!openToggle)
    // setKeys(!openKeys)
  }
  const keys=()=>{
    setKeys(!openKeys)

  }
  return (
    <div className='bg-none text-white absolute w-full'>
      <header >
  <nav class="flex  w-[100%] border-b-2 items-center justify-between lg:justify-around p-6 lg:px-8" aria-label="Global">
    <div class="flex ">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-10 w-auto" src="http://ezitech.org/wp-content/uploads/2023/02/EZITECH-LOGO-1.png" alt=""/>
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button"
      onClick={toggle}
      class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <div class="relative">
        <button type="button" class="flex items-center gap-x-1 xl:text-lg font-semibold leading-6 text-white" aria-expanded="false">
          HOME
         
        </button>

       
       
      </div>

      <a href="#" class="text-lg font-semibold leading-6 text-white">ABOUT US</a>
      <a href="#" className='nav-hover  text-lg font-semibold leading-6 text-white'>CERTIFICATIONS
      <div className='show-hover p-4 border-blue-500 border-t-4'>
        <h1>Free Courses</h1>
        <h1>Onsite Courses</h1>
      </div>
      </a>
      
      <a href="#" class="text-lg font-semibold leading-6 text-white">INTERNSHIPS</a>
      <a href="#" class="text-lg font-semibold leading-6 text-white">SEMINARS</a>
      <a href="#" className='nav-hover  text-lg font-semibold leading-6 text-white'>BONUS
      <div className='show-hover p-4 border-blue-500 border-t-4'>
        <h1>Skills Assignments</h1>
       
      </div>
      </a>
      <a href="#" className='nav-hover  text-lg font-semibold leading-6 text-white'>LOGIN
      <div className='show-hover p-4 border-blue-500 border-t-4'>
        <h1>Intern Portal</h1>
        <h1>Course Portal</h1>
      </div>
      </a>
    </div>
    <div class=" hidden lg:flex lg:w-[10%] lg:justify-between    ">
    <div class="inline-block align-middle  h-[30px] min-h-[1em]  w-0.5 self-stretch  bg-neutral-400 opacity-100 dark:opacity-50"></div>
    <div className='  '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
    class=" h-6 inline-block align-middle">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
    </div>

<div className='border-2 p-1  hover:bg-blue-700 hover:border-cyan-700 cursor-pointer  '>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

</div>

    </div>
  </nav>

  {openToggle ? <div class="lg:hidden" role="dialog" aria-modal="true">
 
 <div class="fixed inset-0 z-10"></div>
 <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
   <div class="flex items-center justify-between">
     <a href="#" class="-m-1.5 p-1.5">
       <span class="sr-only">Your Company</span>
       <img class="h-10 w-auto" src="http://ezitech.org/wp-content/uploads/2023/02/EZITECH-LOGO-1.png" alt=""/>
     </a>
     <button type="button"
     onClick={toggle}
     class="-m-2.5 rounded-md p-2.5 text-gray-700">
       <span class="sr-only">Close menu</span>
       <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
       </svg>
     </button>
   </div>
   <div class="mt-6 flow-root">
     <div class="-my-6 divide-y divide-gray-500/10">
       <div class="space-y-2 py-6">
       <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50">HOME</a>

       <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50">ABOUT US</a>

         <div class="-mx-3">
           <button
           onClick={keys}
           type="button" class="flex w-full items-center text-black justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
             CERTIFICATIONS
             
             <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
             </svg>
           </button>
           
           {openKeys?
           <div class="mt-2 space-y-2" id="disclosure-1">
           
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50">Free Courses</a>
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50">Onsite Courses</a>
         </div>
           :''}
         </div>
         {/* <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50">CERTIFICATIONS</a> */}
         <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50">INTERNSHIPS</a>
         <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50">SEMINARS</a>
         <div class="-mx-3">
           <button
           onClick={keys}
           type="button" class="flex w-full items-center text-black justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
             BONUS
             
             <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
             </svg>
           </button>
           
           {openKeys?
           <div class="mt-2 space-y-2" id="disclosure-1">
           
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50">Skills Assignments</a>
           {/* <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50">Onsite Courses</a> */}
         </div>
           :''}
         </div>
         <div class="-mx-3">
           <button
           onClick={keys}
           type="button" class="flex w-full items-center text-black justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
             LOGIN
             
             <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
             </svg>
           </button>
           
           {openKeys?
           <div class="mt-2 space-y-2" id="disclosure-1">
           
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50">Intern Portal</a>
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50">Course Portal</a>
         </div>
           :''}
         </div>


       </div>
       <div>
<div class="mb-3 w-full m-auto ">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch border rounded bg-white ">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block  flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search Courses..."
      aria-label="Search"
      aria-describedby="button-addon1" />

   
    <button
      class="relative z-[2] flex  items-center hidden sm:block rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
     </div>
   </div>
 </div>
</div>:''}
</header>
    </div>
  )
}

export default Header