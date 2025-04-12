"use client";
import * as Tone from "tone";

export default function Bass() {
  const bassSynth = new Tone.MonoSynth({
    oscillator: {
      type: "square", // 톱니파나 정사각파가 베이스에 적합
    },
    filter: {
      Q: 1,
      type: "lowpass",
      rolloff: -24,
    },
    envelope: {
      attack: 0.05,
      decay: 0.3,
      sustain: 0.9,
      release: 1,
    },
  }).toDestination();

  const bassFunc = (note = "E1") => {
    bassSynth.triggerAttackRelease(note, "8n");
  };
  return (
    <button
      className="w-fit h-fit border cursor-pointer"
      onClick={() => bassFunc()}
    >
      베이스 테스트
    </button>
  );
}
