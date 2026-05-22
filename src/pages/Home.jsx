"use client";
import {
  Pause,
  RotateCcw,
  Square,
  Leaf,
  Music4,
  Sparkles,
  Coffee,
  BedDouble,
  Wind,
} from "lucide-react";
import bgImg from "../assets/bg-img.png";
import music from "../assets/relax-music.mp3";
import { useRef,useState } from "react";

export default function Home() {
 const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const modes = [
    { label: "Focus", icon: Leaf, active: true },
    { label: "Short Break", icon: Coffee },
    { label: "Long Break", icon: BedDouble },
    { label: "Breathing", icon: Wind },
  ];
  const reset = () => {
    console.log("reset");
  };

   const playMusic = () => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#dff8f2] text-[#163f44]">
      <img
        src={bgImg}
        alt="Lake and mountains"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-95 md:object-[center_38%]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.38),rgba(255,255,255,0.08)_40%,rgba(8,73,70,0.03)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-[#dff8f2]/10" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1160px] flex-col px-4 py-4 md:px-7 md:py-6">
        <header className="mb-2 flex items-center justify-between md:mb-5">
          <div className="rounded-2xl border border-white/45 bg-white/38 px-4 py-2 backdrop-blur-xl">
            <p className="text-[12px] font-semibold text-[#2f6061] md:text-sm">
              Good morning, Alexandra
            </p>
            <p className="text-[11px] text-[#4f7d7e]">
              Let&apos;s focus more today, energy up
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/45 bg-white/38 px-4 py-2 text-xs text-[#325d60] backdrop-blur-xl sm:flex">
            <Music4 size={14} />
            <audio ref={audioRef} loop>
              <source src={music} type="audio/mp3" />
            </audio>
            <button className="font-medium" onClick={playMusic}>
              Play Music
            </button>
          </div>
        </header>

        <main className="relative flex flex-1 flex-col items-center justify-center pb-5 pt-2 md:pb-9">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[340px] w-[340px] rounded-full bg-white/35 blur-3xl md:h-[450px] md:w-[450px]" />
            <div className="absolute h-[265px] w-[265px] rounded-full border border-white/45 md:h-[352px] md:w-[352px]" />
            <div className="absolute h-[265px] w-[265px] rounded-full border-[6px] border-white/25 md:h-[352px] md:w-[352px] md:border-[8px]" />
            <div className="absolute h-[265px] w-[265px] rotate-[33deg] rounded-full border-[6px] border-transparent border-r-[#40d8be] border-t-[#40d8be] md:h-[352px] md:w-[352px] md:border-[8px]" />

            <div className="relative flex h-[214px] w-[214px] flex-col items-center justify-center rounded-full border border-white/60 bg-white/38 shadow-[0_20px_50px_rgba(15,76,69,0.16)] backdrop-blur-xl md:h-[290px] md:w-[290px]">
              <div className="inline-flex items-center gap-1 rounded-full border border-white/55 bg-white/70 px-3 py-1 text-[11px] font-medium text-[#3d6f70] md:px-4 md:py-1.5 md:text-xs">
                <Leaf size={12} />
                Focus Time
              </div>

              <div className="mt-4 text-[54px] font-semibold leading-none tracking-tight text-[#1b474d] md:mt-6 md:text-[68px]">
                24:38
              </div>
              <p className="mt-2 text-sm text-[#3e696c] md:text-base">
                Stay focused
              </p>
              <Sparkles size={15} className="mt-2 text-[#2d6f67]" />
            </div>
          </div>

          <div className="mt-2 flex items-center gap-4 rounded-[28px] border border-white/45 bg-white/40 px-4 py-3 shadow-[0_8px_26px_rgba(30,95,87,0.14)] backdrop-blur-xl md:mt-4 md:gap-6 md:px-7 md:py-4">
            <button
              className="group flex w-[64px] flex-col items-center gap-1 text-[#356064] md:w-[70px]"
              aria-label="Reset"
              onClick={reset}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/55 transition group-hover:bg-white/85 md:h-11 md:w-11">
                <RotateCcw size={18} />
              </span>
              <span className="text-[10px] md:text-xs">Reset</span>
            </button>

            <button
              className="group flex w-[72px] flex-col items-center gap-1 text-[#2d5b5f] md:w-[82px]"
              aria-label="Pause"
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#41dcc2] to-[#6ce7d2] text-white shadow-[0_10px_28px_rgba(65,220,194,0.45)] transition group-hover:scale-[1.03] md:h-[62px] md:w-[62px]">
                <Pause size={24} />
              </span>
              <span className="text-[10px] md:text-xs">Pause</span>
            </button>

            <button
              className="group flex w-[64px] flex-col items-center gap-1 text-[#356064] md:w-[70px]"
              aria-label="Stop"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/55 transition group-hover:bg-white/85 md:h-11 md:w-11">
                <Square size={16} />
              </span>
              <span className="text-[10px] md:text-xs">Stop</span>
            </button>
          </div>

          <div className="mt-4 flex w-full max-w-[640px] flex-wrap items-center justify-center gap-2 rounded-full border border-white/40 bg-white/36 px-3 py-2 backdrop-blur-xl md:mt-6 md:gap-3 md:px-4">
            {modes.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs transition md:px-4 ${
                  active
                    ? "bg-gradient-to-r from-[#40dcc2] to-[#6fe6d3] font-medium text-white shadow-[0_6px_20px_rgba(64,220,194,0.35)]"
                    : "border border-white/40 bg-white/52 text-[#456e71] hover:bg-white/75"
                }`}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
