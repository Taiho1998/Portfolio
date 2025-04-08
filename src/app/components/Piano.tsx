"use client";
import { useEffect, useRef, useState } from "react";
import PianoButton from "./PianoButton";
import * as Tone from "tone";

export default function Piano() {
  const [isLoaded, setIsLoaded] = useState(false);
  const pianoRef = useRef<Tone.Sampler | null>(null);

  useEffect(() => {
    const vol = new Tone.Volume();
    const piano = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        piano.chain(vol).toDestination();
        pianoRef.current = piano;
        setIsLoaded(true);
      },
    });
  }, []);

  if (!isLoaded) {
    return (
      <>
        <div className="w-fit mx-auto mt-20 text-center">
          <div className="loader"></div>
        </div>
        <p className="text-center mt-10">로딩 중입니다. 잠시만 기다려주세요!</p>
      </>
    );
  }

  return (
    <>
      {[
        ["A3", "a"],
        ["A#3", "w"],
        ["B3", "s"],
        ["C4", "d"],
        ["C#4", "r"],
        ["D4", "f"],
        ["D#4", "t"],
        ["E4", "g"],
        ["F4", "h"],
        ["F#4", "u"],
        ["G4", "j"],
        ["G#4", "i"],
        ["A4", "k"],
        ["A#4", "o"],
        ["B4", "l"],
        ["C5", ";"],
        ["C#5", "["],
        ["D5", "'"],
      ].map(([scale, note]) => (
        <PianoButton key={note} scale={scale} note={note} pianoRef={pianoRef} />
      ))}
    </>
  );
}
