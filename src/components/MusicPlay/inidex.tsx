import React, { useState, useRef } from "react";
import "./styles.css";

const MusicPlay: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex-row">
      <audio ref={audioRef} controls preload="auto" style={{ display: "none" }}>
        <source src="/carol.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div
        className={`sound ${isPlaying ? "stop" : ""}`}
        onClick={toggleAudio}
      ></div>
    </div>
  );
};

export default MusicPlay;
