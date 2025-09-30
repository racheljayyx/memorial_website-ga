import { FaCross } from "react-icons/fa";

function Salvation() {
  return (
    <section className="px-6 py-12 sm:px-16 md:px-24 bg-purple-50 flex flex-col items-center gap-8 text-[#a178d0]">
      <FaCross className="text-[100px] sm:text-[150px]" />

      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        GET TO KNOW JESUS
      </h2>
      <p className="text-lg sm:text-xl text-center max-w-xl">
        God loves you and sent His Son, Jesus, to give you new life. You can
        accept Him today.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        {[
          { title: "Admit", text: "I am a sinner in need of Jesus." },
          {
            title: "Believe",
            text: "Jesus died for my sins, was buried and rose again on the third day.",
          },
          { title: "Choose", text: "I commit to follow Jesus every day." },
        ].map((step, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white p-6 rounded-xl shadow-md text-center text-[#a178d0]"
          >
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-md max-w-xl text-center text-[#a178d0]">
        <h3 className="text-xl font-semibold mb-2">Sinner's Prayer</h3>
        <p className="text-sm">
          Heavenly Father, I admit I am a sinner and need Your forgiveness. I
          believe Jesus died for my sins and rose again. I choose to follow Him
          as Lord of my life. Amen.
        </p>
      </div>

      <div className="mt-6 max-w-3xl text-center text-[#a178d0]">
        <p className="text-base sm:text-lg mb-6">
          Congratulations on making the best decision of your life! When you
          make the decision to follow Christ, you get a new beginning. You're
          not just a better version of yourself; you're new. For whatever has
          held you back or felt like a cycle of bondage or shame for you,
          there's healing and freedom in Christ. As a follower of Jesus, you're
          no longer walking through life alone. You have God's presence with you
          every step of the way.
        </p>
        <p className="text-base sm:text-lg mb-6 font-semibold">
          “Therefore, if anyone is in Christ, the new creation has come: The old
          has gone, the new is here!” — 2 Corinthians 5:17
        </p>
      </div>
    </section>
  );
}

export default Salvation;
