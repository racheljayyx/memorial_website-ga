import { GiEternalLove } from "react-icons/gi";

function Support() {
  return (
    <section
      id="support"
      className="px-6 py-12 sm:pl-16 sm:pr-16 md:pl-24 md:pr-24 flex flex-col items-center justify-center"
      style={{ color: "#a178d0" }}
    >
      <GiEternalLove className="text-[60px] sm:text-[100px] md:text-[120px] mb-4" />
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Support Funeral Costs
      </h2>
      <p className="text-lg sm:text-xl mb-4 text-center">
        If you would like to support you can donate below.
      </p>
      <a
        href="https://www.paypal.com/pools/c/9ivY1SZgbI"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors"
      >
        Donate via PayPal
      </a>
    </section>
  );
}

export default Support;
