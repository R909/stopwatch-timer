"use client";
import { useState } from "react";
import {
  Pause,
  Play,
  RotateCcw,
  Leaf,
  Sparkles,
  Coffee,
  BedDouble,
  Wind
} from "lucide-react";

 const Stopwatch = () => {
  const [activeBtn, setActiveBtn] = useState("");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  const reset = () => {
    setHours("00");
    setMinutes("00");
  };

  const pulseBtn = (name) => {
    setActiveBtn(name);
    setTimeout(() => setActiveBtn(""), 180);
  };
    return (
       <>
       <div>

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
                {hours}:{minutes}
              </div>
              <p className="mt-2 text-sm text-[#3e696c] md:text-base">
                Stay focused
              </p>
              <Sparkles size={15} className="mt-2 text-[#2d6f67]" />
            </div>
          </div>

          <div className="mt-2 flex items-center gap-4 rounded-[28px] border border-white/45 bg-white/40 px-4 py-3 shadow-[0_8px_26px_rgba(30,95,87,0.14)] backdrop-blur-xl md:mt-4 md:gap-6 md:px-7 md:py-4">
            <button
              className={`group flex w-[64px] flex-col items-center gap-1 text-[#356064] transition-transform duration-150 md:w-[70px] ${activeBtn === "reset" ? "scale-110" : "scale-100"}`}
              aria-label="Reset"
              onClick={() => {
                pulseBtn("reset");
                reset();
              }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/55 transition group-hover:bg-white/85 md:h-11 md:w-11">
                <RotateCcw size={18} />
              </span>
              <span className="text-[10px] md:text-xs">Reset</span>
            </button>

            <button
              className={`group flex w-[64px] flex-col items-center gap-1 text-[#2d5b5f] transition-transform duration-150 md:w-[82px] ${activeBtn === "pause" ? "scale-110" : "scale-100"}`}
              aria-label="Pause"
              onClick={() => pulseBtn("pause")}
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#41dcc2] to-[#6ce7d2] text-white shadow-[0_10px_28px_rgba(65,220,194,0.45)] transition group-hover:scale-[1.03] md:h-[62px] md:w-[62px]">
                <Pause size={24} />
              </span>
              <span className="text-[10px] md:text-xs">Pause</span>
            </button>

            <button
              className={`group flex w-[64px] flex-col items-center gap-1 text-[#356064] transition-transform duration-150 md:w-[70px] ${activeBtn === "start" ? "scale-110" : "scale-100"}`}
              aria-label="Start"
              onClick={() => pulseBtn("start")}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/55 transition group-hover:bg-white/85 md:h-11 md:w-11">
                <Play size={16} />
              </span>
              <span className="text-[10px] md:text-xs">Start</span>
            </button>
          </div>
       </div>

       </>
    )
}

export default Stopwatch;
