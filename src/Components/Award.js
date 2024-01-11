import React from "react";

const Award = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl text-center font-semibold mt-10  mb-10">Best IT Services Award 2023</h1>
      <div className=' m-auto xl:w-9/12 w-11/12 md:flex md:justify-between '>
<div className='border md:w-2/5 sm:w-4/6 m-auto'>   
         <img className='h-full w-full' src="https://ezitech.org/wp-content/uploads/2023/03/Screenshot-2023-03-02-at-11.57.27-AM-1-486x562.png" />
</div>
        <div className='md:w-[50%] text-left'>
          <h1>
            <span className='font-bold'>Ezitech Is affiliated With <span className='text-blue-600'>Eziline Software House.</span></span> Eziline has been
            awarded the prestigious Best Software House in IT sector award by
            the President of Pakistan. This is an incredible achievement and a
            testament to the hard work and dedication of the entire team at
            Eziline Software House. The award is a great recognition of the
            company’s achievements in the field of IT and serves as a major
            milestone in its journey towards success.
          </h1>
          <h1 className='mt-4 mb-4'>
            This award is a huge source of motivation and inspiration for the
            entire team at Eziline Software House.<span className='font-bold'> It is a validation of the
            company’s commitment to innovation, excellence, and customer
            satisfaction.</span> The award acknowledges the hard work and dedication of
            every member of the team who has contributed to the success of the
            company.
          </h1>
          <h1 className='mb-6'>
            <span className='font-bold'>Ismail Shah, the CEO of Eziline Software House Pvt Ltd,</span> received the
            Best Services Award in the IT sector from the <span className='font-bold'>President of Pakistan,
            Dr. Arif Alvi,</span> in recognition of his remarkable contributions to the
            country’s technology industry.
          </h1>
          <button className="btn btn-blue bg-blue-600 rounded text-white p-2 pr-3 pl-3 hover:bg-blue-500 ">Eziline Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Award;
