import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { getJobs } from "../services/jobService";

function Home() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs = async () => {

    try {

      const data = await getJobs();

      setJobs(data.slice(0, 3));

    } catch (error) {

      console.log(error);
    }
  };

  return (

    
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-32 text-center"></div>

      <Navbar />

      <div className="bg-blue-700 text-white py-24 text-center">

        <h1 className="text-6xl font-bold mb-6">
          Find Your Dream Job
        </h1>

        <p className="text-xl">
          Discover thousands of opportunities
        </p>

      </div>

      <div className="max-w-6xl mx-auto py-16 px-5">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-bold">
            Featured Jobs
          </h2>

          <Link
            to="/jobs"
            className="bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            View All
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {jobs.map((job) => (

            <div
              key={job._id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >

              <h3 className="text-2xl font-bold mb-2">
                {job.title}
              </h3>

              <p className="text-blue-700 font-semibold">
                {job.company}
              </p>

              <p className="mt-2 text-gray-600">
                📍 {job.location}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Home