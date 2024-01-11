import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CoursesPagination.css";

const CoursesPagination = () => {
  const [courseData, setCourseData] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3001/RecentCourses");
    setCourseData(res.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  const courses = courseData.map((item) => {
    return (
      <div className="Course rounded-lg bg-white shadow-2xl">
        <img className="rounded-t-lg w-full" src={item.image} />
        <div className="p-3">
          <h1>{item.name}</h1>
          <h1>{item.title}</h1>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />
          <h1 className="text-right">{item.price}</h1>
        </div>
        <div className="C-details bg-white xl:w-[19%] lg:w-[24%] md:w-[32%] hidden md:block rounded-lg p-5 xl:-mt-[22%] lg:-mt-[28%] md:-mt-[38%]   shadow-2xl">
          <div className="flex w-[40%]  justify-between">
            <img
              style={{ height: "40px", width: "40px" }}
              className="rounded-full"
              src="//www.gravatar.com/avatar/c840cdf10bc99142474075a685110703?s=215&r=g"
            />
            <h1 className="m-auto font-semibold text-gray-500">Ezitech</h1>
          </div>
          <h1 className="my-2 text-lg font-semibold">{item.title}</h1>
          <p>{item.description}</p>
          <div className="flex justify-between py-5">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>

              <h1>{item.level}</h1>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <h1>{item.lectures}</h1>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <h1>{item.duration}</h1>
            </div>
          </div>
          <button className="bg-blue-500 text-white  w-full py-2 rounded  mb-5 ">
            Preview Course
          </button>
          <div className="flex justify-between">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-red-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <h1>Add to Wishlist</h1>
            </div>
            <h1>{item.price}</h1>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-gray-200 pb-20">
      <h1 className="text-3xl md:text-5xl text-gray-700 text-center pt-10 mb-14">
        Recent Courses
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 m-auto w-11/12">
        {courses}
      </div>
    </div>
  );
};

export default CoursesPagination;
