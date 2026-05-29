function JobCard() {
  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
      
      <h2 className="text-2xl font-bold">
        Frontend Developer
      </h2>

      <p className="text-gray-600 mt-2">
        Google • Hyderabad • Remote
      </p>

      <div className="flex gap-2 mt-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          JavaScript
        </span>
      </div>

      <button className="mt-6 bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800">
        Apply Now
      </button>
    </div>
  )
}

export default JobCard