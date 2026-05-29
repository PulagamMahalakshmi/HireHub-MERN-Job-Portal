import Navbar from "../components/Navbar";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-5xl mx-auto py-10">

        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <h1 className="text-5xl font-bold mb-4">
            Welcome {user?.name}
          </h1>

          <p className="text-xl text-gray-600">
            Role: {user?.role}
          </p>

        </div>

      </div>

    </div>
  )
}

export default Dashboard;