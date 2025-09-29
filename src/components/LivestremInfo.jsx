import { FaLaptop } from "react-icons/fa";

function LivestreamInfo() {
  return (
    <section
      id="livestream"
      className="px-6 py-12 sm:pl-16 md:pl-24 sm:py-12
                 min-h-screen
                 bg-gradient-to-r from-purple-50 to-purple-100
                 flex flex-col justify-center"
      style={{ color: "#a178d0" }}
    >
      <div className="w-full max-w-3xl space-y-6 sm:space-y-10 text-left">
        <FaLaptop className="text-[60px] sm:text-[100px] md:text-[120px]" />

        <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold leading-tight">
          Streaming Details
        </h1>

        <div className="space-y-2 sm:space-y-4">
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            October 2, 2025
          </h2>

          <h3 className="text-xl sm:text-4xl md:text-5xl font-medium leading-tight">
            2:00 PM (BST)
          </h3>
        </div>

        <p className="text-xl sm:text-3xl md:text-4xl leading-snug">
          Watch live or catch up on demand.
        </p>

        <div className="text-lg sm:text-2xl md:text-3xl leading-snug">
          <p className="font-semibold">
            Click{" "}
            <a
              href="https://watch.obitus.com/login/vb5ffp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-600 transition-colors"
            >
              here
            </a>{" "}
            to join
          </p>

          <p className="text-base sm:text-lg md:text-xl mt-2">
            Username: zepi8937
            <br />
            Password: 693917
          </p>
        </div>
      </div>
    </section>
  );
}

export default LivestreamInfo;
