"use client";
import bgImg from "../assets/bg-img.png";
import Stopwatch from "../components/Stopwatch";
import TimerComponent from "../components/Timer";
import Navbar from "../components/Navbar";

export default function Home() {

  return (
    <div className="relative min-h-screen overflow-hidden text-[#163f44]">
      <img
        src={bgImg}
        alt="Peaceful misty lake"
        className="absolute h-full w-full object-cover object-[center_40%]"
        style={{ opacity: 0.98 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.2),rgba(255,255,255,0.02)_44%,rgba(8,73,70,0.02)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/4 via-transparent to-[#dff8f2]/12" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 py-4 md:px-7 md:py-5">
      <Navbar />

        <main className="relative flex flex-1 items-center justify-between gap-6 pb-5 pt-2 md:pb-9">
         <div className="flex justify-start">
          <Stopwatch />
         </div>
         <div className="flex justify-end">
            <TimerComponent />
         </div>
        </main>
      </div>
    </div>
  );
}
