import React, { useEffect } from 'react';

const Downloadapp = () => {
  useEffect(() => {
    const mainDiv = document.querySelector('.main-div');
    const moveCircle = document.querySelector('.move-circle');

    if (!mainDiv || !moveCircle) return;

    mainDiv.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const rect = mainDiv.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      const moveX = ((rect.width - mouseX) / rect.width) * 60 - 15; // Adjust the range as needed
      const moveY = ((rect.height - mouseY) / rect.height) * 60 - 15; // Adjust the range as needed

      moveCircle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    mainDiv.addEventListener('mouseleave', () => {
      moveCircle.style.transform = 'translate(0, 0)';
    });
  }, []);

  return (
    <div className='main-div flex justify-center pt-20 pb-20'>
      <div className='w-[45%] hidden md:block '>
        <div className='move-circle cursor-move h-[400px] float-right w-[400px] rounded-full bg-blue-800'>
          <img src="//ezitech.org/wp-content/uploads/2022/11/phone-copy.webp" alt="phone" />
        </div>
      </div>
      <div className='md:w-[50%] px-14 py-4  '>
        <h1 className='sm:text-5xl text-3xl font-semibold'>
          Learning <span className='text-blue-600 font-semibold'>anytime</span> <br />
          from anywhere
        </h1>
        <p className='my-10 md:w-[80%] hidden sm:block'>
          Increase the mobility level with Eziline Technologies LMS App. Take your courses in your
          pocket and access them whenever you want without any limits. Make your learning more
          engaging and productive using the modern LMS app.
        </p>
        <div className='flex  w-[55%] mt-5 justify-between'>
          <img src="//ezitech.org/wp-content/uploads/2022/11/appstore-copy.webp" alt="appstore" />
          <img
            src="//stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2021/02/Изображение_22.png"
            alt="play-store"
          />
        </div>
      </div>
    </div>
  );
};

export default Downloadapp;
