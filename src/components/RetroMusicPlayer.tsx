import { useState, useRef, useEffect } from "react";

interface RetroMusicPlayerProps {
  title: string;
  src: string;
}

const RetroMusicPlayer = ({ title, src }: RetroMusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); } else { audio.play(); }
    setPlaying(!playing);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * duration;
  };

  const changeVolume = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const v = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.volume = v;
    setVolume(v);
  };

  const fmt = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const pct = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="mt-3 bg-background border-2 border-primary p-3" style={{ boxShadow: "0 0 8px hsl(180 100% 50% / 0.4), inset 0 0 8px hsl(180 100% 50% / 0.1)" }}>
      <audio ref={audioRef} src={encodeURI(src)} preload="metadata" />

      {/* Title */}
      <p className="font-pixel text-[8px] text-primary glow-cyan truncate mb-2">♪ {title}</p>

      {/* Controls row */}
      <div className="flex items-center gap-2">
        {/* Play/Pause */}
        <button
          onClick={toggle}
          className="font-pixel text-[10px] w-7 h-7 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center shrink-0"
        >
          {playing ? "▐▐" : "▶"}
        </button>

        {/* Seek bar */}
        <div className="flex-1 flex items-center gap-2">
          <span className="font-retro text-xs text-primary w-8 text-right shrink-0">{fmt(currentTime)}</span>
          <div
            className="flex-1 h-2 border border-primary/50 bg-muted cursor-pointer relative"
            onClick={seek}
          >
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${pct}%`, boxShadow: "0 0 4px hsl(180 100% 50% / 0.6)" }}
            />
          </div>
          <span className="font-retro text-xs text-primary/60 w-8 shrink-0">{fmt(duration)}</span>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="font-pixel text-[8px] text-primary/60">♫</span>
          <div
            className="w-12 h-2 border border-primary/50 bg-muted cursor-pointer relative"
            onClick={changeVolume}
          >
            <div
              className="h-full bg-secondary transition-all"
              style={{ width: `${volume * 100}%`, boxShadow: "0 0 4px hsl(320 100% 60% / 0.6)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroMusicPlayer;
