import memorialPhoto from "../assets/memorial-photo.jpg";
import floralBackground from "../assets/lilac-floral-bg.jpg";

function Hero() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(161,120,208,0.6), rgba(161,120,208,0.6)), url(${floralBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="max-w-4xl w-full flex flex-row items-center justify-center gap-6 sm:gap-12">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-[1px] h-12 sm:h-20 bg-white"></div>
          <span className="text-lg sm:text-4xl font-semibold text-white">
            1970
          </span>
        </div>

        <img
          src={memorialPhoto}
          alt="In Loving Memory"
          className="w-40 h-44 sm:w-64 sm:h-72 object-cover object-top rounded-full border-4 border-white shadow-lg"
        />

        <div className="flex flex-col items-center space-y-2">
          <span className="text-lg sm:text-4xl font-semibold text-white">
            2025
          </span>
          <div className="w-[1px] h-12 sm:h-20 bg-white"></div>
        </div>
      </div>

      <h1 className="mt-6 sm:mt-8 text-lg sm:text-3xl font-bold text-white leading-tight max-w-xl">
        IN LOVING MEMORY OF <br /> GRACE APPIAH
      </h1>
    </section>
  );
}

export default Hero;
