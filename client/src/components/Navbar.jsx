import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(
  localStorage.getItem("user")
);

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.reload();
};
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-md">

      <Link to="/">
        <h1 className="text-3xl font-bold text-blue-700">
          HireHub
        </h1>
      </Link>

     <div className="space-x-6 text-lg font-medium text-gray-700">

  <Link
    to="/"
    className="hover:text-blue-700 transition"
  >
    Home
  </Link>

  <Link
    to="/jobs"
    className="hover:text-blue-700 transition"
  >
    Jobs
  </Link>

  {!user ? (
    <>
      <Link
        to="/login"
        className="hover:text-blue-700 transition"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition"
      >
        Register
      </Link>


<button
  onClick={() => {
    localStorage.clear();
    window.location.href = "/login";
  }}
  className="bg-red-500 text-white px-4 py-2 rounded-xl"
>
  Logout
</button>

      <Link
  to="/add-job"
  className="hover:text-blue-700 transition"
>
  Post Job
</Link>
    </>
  ) : (
    <button
      onClick={logout}
      className="bg-red-500 text-white px-5 py-2 rounded-xl"
    >
      Logout
    </button>
  )}

      </div>
    </nav>
  )
}

export default Navbar