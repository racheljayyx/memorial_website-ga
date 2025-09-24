import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <header className="relative flex justify-center py-6">
      <div
        className="flex flex-wrap items-center justify-center space-x-8 sm:space-x-12 border rounded-xl px-6 sm:px-12 py-4 text-lg sm:text-xl font-semibold"
        style={{ color: "#a178d0", borderColor: "#a178d0" }}
      >
        <Link
          smooth
          to="/#service"
          className="hover:underline hover:underline-offset-4"
        >
          Service
        </Link>
        <Link
          smooth
          to="/#travel"
          className="hover:underline hover:underline-offset-4"
        >
          Travel
        </Link>
        <Link
          smooth
          to="/#support"
          className="hover:underline hover:underline-offset-4"
        >
          Support
        </Link>
        <Link to="/give" className="hover:underline hover:underline-offset-4">
          Give
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
