"use client";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import PianoButton from "./PianoButton";
import * as Tone from "tone";

export default function Piano() {
  const [isLoaded, setIsLoaded] = useState(false);
  const pianoRef = useRef<Tone.Sampler | null>(null);
  const [isShow, setIsShow] = useState(false);
  const [buttonText, setButtonText] = useState("Piano");

  const pianoKeys = [
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
  ];

  useEffect(() => {
    if (isShow) {
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
    }
  }, [isShow]);

  if (!isLoaded && isShow) {
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
    <div className="flex gap-20 justify-center text-start">
      <button
        onClick={() => {
          setIsShow(!isShow);
          setButtonText(isShow ? "Piano" : "닫기");
        }}
        className="cursor-pointer ml-3 border rounded-lg h-fit w-fit p-3 inline-block group hover:bg-[#EE6533] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all"
      >
        {buttonText}
      </button>
      <div>
        {isShow && <h3 className="font-semibold text-3xl">Piano</h3>}
        {isShow &&
          pianoKeys.map(([scale, note]) => (
            <PianoButton
              key={note}
              scale={scale}
              note={note}
              pianoRef={pianoRef}
            />
          ))}
      </div>
    </div>
  );
}
