import { useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import { createJob } from "../services/jobService";

function AddJob() {

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

     console.log(formData);

const data = await createJob(formData);

console.log(data);

      toast.success("Job Posted Successfully");

      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
      });

    } catch (error) {

      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center mt-10">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Post a Job
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              name="description"
              placeholder="Job Description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            ></textarea>

           <button
  type="submit"
  className="w-full bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-800"
>
  Post Job
</button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default AddJob