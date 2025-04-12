"use client";
import { RefObject, useEffect, useRef } from "react";
import * as Tone from "tone";

export default function PianoButton({
  scale,
  note,
  pianoRef,
}: {
  scale: string;
  note: string;
  pianoRef: RefObject<Tone.Sampler | null>;
}) {
  const isKeyPressed = useRef(false);

  useEffect(() => {
    Tone.start();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === note && isKeyPressed.current === false) {
        const piano = pianoRef.current;
        if (!piano) return;

        document
          .getElementById(`${e.key.toLowerCase()}`)
          ?.classList.add("bg-gray-700");
        document
          .getElementById(`${e.key.toLowerCase()}`)
          ?.classList.remove("hover:bg-gray-300");
        piano.triggerAttack(scale);
        isKeyPressed.current = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === note && isKeyPressed.current === true) {
        const piano = pianoRef.current;
        if (!piano) return;

        document
          .getElementById(`${e.key.toLowerCase()}`)
          ?.classList.add("hover:bg-gray-300");
        document
          .getElementById(`${e.key.toLowerCase()}`)
          ?.classList.remove("bg-gray-700");
        piano.triggerRelease(scale);
        isKeyPressed.current = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [note, scale, pianoRef]);

  const handleclick = () => {
    if (pianoRef.current) {
      pianoRef.current.triggerAttackRelease(scale, "8n");
    }
  };

  return (
    <button
      id={`${note}`}
      className={`w-10 ${
        scale.includes("#")
          ? "bg-black text-white -mx-5 absolute h-40"
          : "h-80 pt-40 border border-r-transparent last:border-r-black"
      } cursor-pointer hover:bg-gray-300`}
      onClick={handleclick}
    >
      {note}
    </button>
  );
}
