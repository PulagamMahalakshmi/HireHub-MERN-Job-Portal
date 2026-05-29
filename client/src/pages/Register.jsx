import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
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

      const data = await registerUser(
        formData
      );

      toast.success(
        data.message
      );

      navigate("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex items-center justify-center mt-20">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-8">
            Create Account
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <select
              name="role"
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            >

              <option value="candidate">
                Candidate
              </option>

              <option value="employer">
                Employer
              </option>

            </select>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-800"
            >
              Register
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Register;