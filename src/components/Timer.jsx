"use client";
import { useState, useRef, useEffect } from "react";
import { Pause, RotateCcw, Leaf, Sparkles, Play } from "lucide-react";

const TimerComponent = () => {
  const [activeBtn, setActiveBtn] = useState("");

  const [hours, setHours] = useState("24");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [isRunning, setIsRunning] = useState(false);

  // total seconds
  const [time, setTime] = useState(24 * 60 * 60);

  const intervalRef = useRef(null);

  const normalize = (value, max) => {
    const digits = value.replace(/\D/g, "").slice(-2);

    if (!digits) return "00";

    return String(Math.min(Number(digits), max)).padStart(2, "0");
  };

  const updateDisplayTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    setHours(String(hrs).padStart(2, "0"));
    setMinutes(String(mins).padStart(2, "0"));
    setSeconds(String(secs).padStart(2, "0"));
  };

  const start = () => {
    if (isRunning) return;

    // convert current input values into seconds
    const totalSeconds =
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

    // if timer already at 0
    if (time <= 0) {
      setTime(totalSeconds);
    }
    setIsRunning(true);
  };
  const pause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setHours("00");
    setMinutes("00");
    setSeconds("00");
  };

  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        // stop at 0
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // update display time
  useEffect(() => {
    updateDisplayTime(time);
  }, [time]);

  const pulseBtn = (name) => {
    setActiveBtn(name);
    switch (name) {
      case "start":
        start();
        break;

      case "pause":
        pause();
        break;

      case "reset":
        reset();
        break;

      default:
        break;
    }
  };

  const handleHoursChange = (value) => {
    if (isRunning) return;
    const normalized = normalize(value, 99);
    setHours(normalized);
    syncTime(normalized, minutes, seconds);
  };

  const handleMinutesChange = (value) => {
    if (isRunning) return;
    const normalized = normalize(value, 59);
    setMinutes(normalized);
    syncTime(hours, normalized, seconds);
  };

  const handleSecondsChange = (value) => {
    if (isRunning) return;
    const normalized = normalize(value, 59);
    setSeconds(normalized);
    syncTime(hours, minutes, normalized);
  };

  const syncTime = (hrs, mins, secs) => {
    const total = Number(hrs) * 3600 + Number(mins) * 60 + Number(secs);
    setTime(total);
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

            <div className="mt-4 text-[46px] font-semibold leading-none tracking-tight text-[#1b474d] md:mt-6 md:text-[58px]">
              {hours}:{minutes}:{seconds}
            </div>

            <p className="mt-2 text-sm text-[#3e696c] md:text-base">
              Set your custom timer
            </p>

            <Sparkles size={15} className="mt-2 text-[#2d6f67]" />
          </div>
        </div>

        <div className="mt-4 grid w-full max-w-[420px] grid-cols-3 gap-3 rounded-2xl border border-white/45 bg-white/40 p-3 shadow-[0_8px_20px_rgba(30,95,87,0.12)] backdrop-blur-xl">
          <label className="flex flex-col gap-1">
            <span className="text-[11px] font-medium text-[#3e696c]">
              Hours
            </span>

            <input
              type="text"
              inputMode="numeric"
              value={hours}
              onChange={(e) => handleHoursChange(e.target.value)}
              className="rounded-lg border border-white/60 bg-white/70 px-2 py-1.5 text-center text-sm text-[#1b474d] outline-none focus:border-[#40d8be]"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-[11px] font-medium text-[#3e696c]">
              Minutes
            </span>

            <input
              type="text"
              inputMode="numeric"
              value={minutes}
              onChange={(e) => handleMinutesChange(e.target.value)}
              className="rounded-lg border border-white/60 bg-white/70 px-2 py-1.5 text-center text-sm text-[#1b474d] outline-none focus:border-[#40d8be]"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-[11px] font-medium text-[#3e696c]">
              Seconds
            </span>

            <input
              type="text"
              inputMode="numeric"
              value={seconds}
              onChange={(e) => handleSecondsChange(e.target.value)}
              className="rounded-lg border border-white/60 bg-white/70 px-2 py-1.5 text-center text-sm text-[#1b474d] outline-none focus:border-[#40d8be]"
            />
          </label>
        </div>

        <div className="mt-2 flex justify-around items-center gap-4 rounded-[28px] border border-white/45 bg-white/40 px-4 py-3 shadow-[0_8px_26px_rgba(30,95,87,0.14)] backdrop-blur-xl md:mt-4 md:gap-6 md:px-7 md:py-4">
          <button
            className={`group flex w-[64px] flex-col items-center gap-1 text-[#356064] transition-transform duration-150 md:w-[70px] ${
              activeBtn === "reset" ? "scale-110" : "scale-100"
            }`}
            aria-label="Reset"
            onClick={() => pulseBtn("reset")}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition md:h-11 md:w-11 ${
                activeBtn === "reset"
                  ? "bg-gradient-to-br from-[#41dcc2] to-[#6ce7d2] text-white shadow-[0_10px_28px_rgba(65,220,194,0.45)] border-transparent"
                  : "border-white/55 bg-white/55 group-hover:bg-white/85"
              }`}
            >
              <RotateCcw size={18} />
            </span>

            <span className="text-[10px] md:text-xs">Reset</span>
          </button>

          <button
            className={`group flex w-[64px] flex-col items-center gap-1 text-[#2d5b5f] transition-transform duration-150 md:w-[70px] ${
              activeBtn === "pause" ? "scale-110" : "scale-100"
            }`}
            aria-label="Pause"
            onClick={() => pulseBtn("pause")}
          >
            <span
              className={`flex h-[52px] w-[52px] items-center justify-center rounded-full transition md:h-[62px] md:w-[62px] ${
                activeBtn === "pause"
                  ? "bg-gradient-to-br from-[#41dcc2] to-[#6ce7d2] text-white shadow-[0_10px_28px_rgba(65,220,194,0.45)]"
                  : "border border-white/55 bg-white/55 text-[#2d5b5f] group-hover:bg-white/85"
              }`}
            >
              <Pause size={24} />
            </span>

            <span className="text-[10px] md:text-xs">Pause</span>
          </button>

          <button
            className={`group flex w-[64px] flex-col items-center gap-1 text-[#356064] transition-transform duration-150 md:w-[70px] ${
              activeBtn === "start" ? "scale-110" : "scale-100"
            }`}
            aria-label="Start"
            onClick={() => pulseBtn("start")}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full transition md:h-11 md:w-11 ${
                activeBtn === "start"
                  ? "bg-gradient-to-br from-[#41dcc2] to-[#6ce7d2] text-white shadow-[0_10px_28px_rgba(65,220,194,0.45)]"
                  : "border border-white/55 bg-white/55 group-hover:bg-white/85"
              }`}
            >
              <Play size={16} />
            </span>

            <span className="text-[10px] md:text-xs">Start</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TimerComponent;
