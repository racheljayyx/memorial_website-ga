import { GiPeaceDove } from "react-icons/gi";

function ServiceInfo() {
  return (
    <section
      className="px-6 py-12 sm:pl-16 md:pl-24 sm:py-12
                 sm:flex-none sm:min-h-0
                 flex sm:block items-center justify-center min-h-screen"
      style={{ color: "#a178d0" }}
    >
      <div className="space-y-6 sm:space-y-10 flex flex-col items-start text-left max-w-3xl">
        <GiPeaceDove className="text-[60px] sm:text-[100px] md:text-[120px]" />

        <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold leading-tight">
          CELEBRATION OF LIFE
        </h1>

        <h2 className="text-2xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          OCTOBER 2, 2025
        </h2>

        <h3 className="text-xl sm:text-4xl md:text-5xl font-medium leading-tight">
          5PM - 7PM
        </h3>

        <p className="text-lg sm:text-2xl md:text-3xl leading-snug">
          New Wine Church Gateway House, London, SE18 6QQ
        </p>

        <p className="text-xl sm:text-3xl md:text-4xl leading-snug">
          <strong>DRESS CODE:</strong> PURPLE | WHITE | BLACK
        </p>
      </div>
    </section>
  );
}

export default ServiceInfo;
