"use client";
import { useEffect, useRef } from "react";
import * as Tone from "tone";
export default function PianoButton({
  scale,
  note,
}: {
  scale: string;
  note: string;
}) {
  const pianoRef = useRef<Tone.Sampler | null>(null);
  const isKeyPressed = useRef(false);

  useEffect(() => {
    Tone.start();
    const vol = new Tone.Volume(12);
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
        window.addEventListener("keydown", (e) => {
          // 다른 페이지에서 피아노 연주되는 기능 방지
          if (
            e.key === note &&
            isKeyPressed.current === false &&
            window.location.pathname === "/etc"
          ) {
            document.getElementById(`${e.key}`)?.classList.add("bg-gray-700");
            document
              .getElementById(`${e.key}`)
              ?.classList.remove("hover:bg-gray-300");
            piano.chain(vol);
            piano.triggerAttack(scale);
            isKeyPressed.current = true;
          }
        });
        window.addEventListener("keyup", (e) => {
          if (e.key === note && isKeyPressed.current === true) {
            document
              .getElementById(`${e.key}`)
              ?.classList.add("hover:bg-gray-300");
            document
              .getElementById(`${e.key}`)
              ?.classList.remove("bg-gray-700");
            piano.triggerRelease(scale);
            isKeyPressed.current = false;
          }
        });
      },
    }).toDestination();

    pianoRef.current = piano;
  }, [note, scale]);
  const handleclick = () => {
    if (pianoRef.current) {
      pianoRef.current.triggerAttackRelease(scale, "8n");
    }
  };

  return (
    <>
      <button
        id={`${note}`}
        className={`w-10  ${
          scale.includes("#")
            ? "bg-black text-white -mx-5 absolute h-40"
            : "h-80 pt-40 border border-r-transparent last:border-r-black"
        } cursor-pointer hover:bg-gray-300`}
        onClick={handleclick}
      >
        {note}
      </button>
    </>
  );
}
