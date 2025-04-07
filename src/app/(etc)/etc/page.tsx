import Navigate from "@/app/components/Navigate";
import * as Tone from "tone";
import PianoButton from "@/app/components/PianoButton";

export default function extraPage() {
  return (
    <>
      <Navigate />
      <div className="mt-[60px]">
        <h3 className="font-semibold text-3xl">Piano</h3>
        <PianoButton scale={"A3"} note={"a"} />
        <PianoButton scale={"A#3"} note={"w"} />
        <PianoButton scale={"B3"} note={"s"} />
        <PianoButton scale={"C4"} note={"d"} />
        <PianoButton scale={"C#4"} note={"r"} />
        <PianoButton scale={"D4"} note={"f"} />
        <PianoButton scale={"D#4"} note={"t"} />
        <PianoButton scale={"E4"} note={"g"} />
        <PianoButton scale={"F4"} note={"h"} />
        <PianoButton scale={"F#4"} note={"u"} />
        <PianoButton scale={"G4"} note={"j"} />
        <PianoButton scale={"G#4"} note={"i"} />
        <PianoButton scale={"A4"} note={"k"} />
        <PianoButton scale={"A#4"} note={"o"} />
        <PianoButton scale={"B4"} note={"l"} />
        <PianoButton scale={"C5"} note={";"} />
        <PianoButton scale={"C#5"} note={"["} />
        <PianoButton scale={"D5"} note={"'"} />
      </div>
    </>
  );
}
