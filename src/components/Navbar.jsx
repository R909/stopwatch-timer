import {
  Music4,
  Timer
} from "lucide-react";
import music from "../assets/relax-music.mp3";
import { useRef,useState } from "react";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef();
   const playMusic = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(!isPlaying);
  };
    return (
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
            <span className="text-[#4f7d7e] font-semibold">Find your rhythm</span>
          </div>
 
          <div className="flex items-center gap-2 rounded-full border border-white/45 bg-white/38 px-4 py-2 text-xs text-[#325d60] backdrop-blur-xl">
            <Music4 size={13} className={!isPlaying ? "text-[#40d8be]" : ""} />
            <audio ref={audioRef} loop>
              <source src={music} type="audio/mp3" />
            </audio>
            <button className="font-medium hover:text-[#40d8be] transition-colors whitespace-nowrap" onClick={playMusic}>
              {!isPlaying ? "Pause Music" : "Play Music"}
            </button>
            {!isPlaying && (
              <span className="flex gap-[2px] items-end" style={{ height: 14 }}>
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="w-[3px] rounded-full bg-[#40d8be]"
                    style={{ animation: `bar ${0.6 + i * 0.15}s ease-in-out infinite alternate`, height: `${40 + i * 15}%` }} />
                ))}
              </span>
            )}
          </div>
        </header>
        )
}

export default Navbar;