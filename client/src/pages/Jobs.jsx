import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import { getJobs } from "../services/jobService";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs = async () => {

    try {

      const data = await getJobs();

      console.log(data);

      setJobs(data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  const applyJob = async (job) => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {

      alert("Please login first");

      return;
    }

    if (user.role === "employer") {

      alert(
        "Employers cannot apply for jobs"
      );

      return;
    }

    try {

      await fetch(
        "http://localhost:5000/api/applications",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            jobId: job._id,
            applicantName: user.name,
            applicantEmail: user.email,
          }),
        }
      );

      alert("Applied Successfully");

    } catch (error) {

      console.log(error);
    }
  };

  if (loading) {

    return (
      <h1 className="text-4xl text-center mt-20">
        Loading Jobs...
      </h1>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-5">

        <h1 className="text-5xl font-bold mb-10">
          Latest Jobs
        </h1>

        {jobs.length === 0 ? (

          <h2 className="text-2xl text-gray-500">
            No Jobs Available
          </h2>

        ) : (

          <div className="grid md:grid-cols-2 gap-8">

            {jobs.map((job) => (

              <motion.div
                key={job._id}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >

                <h2 className="text-2xl font-bold mb-2">
                  {job.title}
                </h2>

                <p className="text-blue-700 font-semibold mb-2">
                  {job.company}
                </p>

                <p className="text-gray-600 mb-2">
                  📍 {job.location}
                </p>

                <p className="text-green-600 font-semibold mb-4">
                  💰 {job.salary}
                </p>

                <p className="text-gray-700">
                  {job.description}
                </p>

                <button
                  onClick={() => applyJob(job)}
                  className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
                >
                  Apply Now
                </button>

              </motion.div>
            ))}

          </div>
        )}

      </div>

    </div>
  )
}

export default Jobs;