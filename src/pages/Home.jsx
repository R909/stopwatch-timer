"use client";
import {
  Leaf,
  Music4,
  Coffee,
  BedDouble,
  Wind,
  Timer
} from "lucide-react";
import bgImg from "../assets/bg-img.png";
import music from "../assets/relax-music.mp3";
import { useRef,useState } from "react";
import Stopwatch from "../components/Stopwatch";
import TimerComponent from "../components/Timer";

export default function Home() {
 const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
   const playMusic = () => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(!isPlaying);
  };

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
        <header className="mb-4 flex items-center justify-between gap-3">
          <div className="rounded-2xl border border-white/45 bg-white/38 px-4 py-2 backdrop-blur-xl">
            <p className="text-[12px] font-semibold text-[#8feef0] md:text-[13px]">
              Good morning, Ritu 🌤️
            </p>
            <p className="text-[11px] text-[#8feef0]">
              Let's focus and make today amazing!
            </p>
          </div>
 
          <div className="hidden items-center gap-2 rounded-full border border-white/45 bg-white/38 px-4 py-2 text-xs text-[#325d60] backdrop-blur-xl sm:flex">
            <Timer size={13} />
            <span className="font-semibold">Focus Mode</span>
            <span className="text-white/35 mx-1">·</span>
            <span className="text-[#4f7d7e]">Session 3 of 4</span>
          </div>
 
          <div className="flex items-center gap-2 rounded-full border border-white/45 bg-white/38 px-4 py-2 text-xs text-[#325d60] backdrop-blur-xl">
            <Music4 size={13} className={isPlaying ? "text-[#40d8be]" : ""} />
            <audio ref={audioRef} loop>
              <source src={music} type="audio/mp3" />
            </audio>
            <button className="font-medium hover:text-[#40d8be] transition-colors whitespace-nowrap" onClick={playMusic}>
              {isPlaying ? "Pause Music" : "Play Music"}
            </button>
            {isPlaying && (
              <span className="flex gap-[2px] items-end" style={{ height: 14 }}>
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="w-[3px] rounded-full bg-[#40d8be]"
                    style={{ animation: `bar ${0.6 + i * 0.15}s ease-in-out infinite alternate`, height: `${40 + i * 15}%` }} />
                ))}
              </span>
            )}
          </div>
        </header>

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
