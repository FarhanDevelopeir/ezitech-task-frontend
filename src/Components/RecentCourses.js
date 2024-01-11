import React, { useEffect, useState } from "react";
import axios from "axios";
import './RecentCourses.css'

const RecentCourses = () => {
    const [btn, setBtn] = useState(false)
  const [getCourses, setGetCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 5;

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3001/Courses");
    setGetCourses(res.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = getCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  const totalPages = Math.ceil(getCourses.length / coursesPerPage);

  const Courses = currentCourses.map((item) => {
    return (
      <div className="R-Course m-auto w-full text-sm p-1">
        <img className="m-auto w-full" src={item.image} />
        <h1 className="mt-2 mb-2">{item.name}</h1>
        <h1 className="mb-2 ">{item.title}</h1>
        <div className="flex bg-gray-200 p-2 justify-between ">
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
            <h1 className="m-auto">{item.duration}</h1>
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h1 className="m-auto">{item.views}</h1>
          </div>
        </div>
        <hr class="my-2 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />
        <div className="flex justify-between">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <h1 className="m-auto">0.0</h1>
          </div>
          <div>
            <h1>
              <del>{item["o-price"]}</del>
            </h1>
            <h1>{item["d-price"]}</h1>
          </div>
        </div>
        
        <button className="btn px-2 py-2 w-full bg-blue-500 text-white rounded mt-3 ">Preview Course</button>
        
      </div>
    );
  });
  return (
    <div>
      <h1 className="text-center text-3xl md:text-5xl text-gray-700 mt-20 mb-20">
        Recommended Course's
      </h1>
      <div className="grid xl:grid-cols-5 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-11/12 m-auto">
        {Courses}
      </div>
      <div className="pagination m-auto  mb-20 mt-10 text-center ">
        {currentPage !== 1 && (
          <button
            className=" px-3 py-1 hover:text-white hover:bg-blue-500 border rounded"
            onClick={prevPage}
          >
            Previous
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 mx-1 text-sm focus:outline-none ${
              currentPage === i + 1
                ? "bg-blue-500  text-white border rounded "
                : "bg-white text-gray-700 border rounded hover:text-white hover:bg-blue-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage !== totalPages && (
          <button
            className="px-3 py-1 hover:text-white hover:bg-blue-500 border rounded"
            onClick={nextPage}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default RecentCourses;
