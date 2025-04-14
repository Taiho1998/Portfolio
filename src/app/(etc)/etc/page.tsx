import Bass from "@/app/components/Bass";
import MusicSelection, { musicSelections } from "@/app/components/MusicSelect";
import Navigate from "@/app/components/Navigate";
import Piano from "@/app/components/Piano";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "기타",
};

export default function extraPage() {
  return (
    <>
      <Navigate />
      <div className="mt-[60px] min-w-[586px] overflow-hidden">
        {/* <h3 className="font-semibold text-3xl">저에 대해 더 알고 싶다면?</h3> */}
        <Piano />
        <MusicSelection />
      </div>
      <br />
      <br />
    </>
  );
}
