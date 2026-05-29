import axios from "axios";

const API = "http://localhost:5000/api/jobs";

export const createJob = async (jobData) => {

  const token = localStorage.getItem("token");

  const response = await axios.post(
    API,
    jobData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getJobs = async () => {

  const response = await axios.get(
    "http://localhost:5000/api/jobs"
  );

  return response.data;
};