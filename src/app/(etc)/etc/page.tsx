import Bass from "@/app/components/Bass";
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
      <div className="mt-[60px] w-fit">
        {/* <h3 className="font-semibold text-3xl">저에 대해 더 알고 싶다면?</h3> */}
        <Piano />
        {/* <Bass /> */}
      </div>
      <br />
      <br />
    </>
  );
}
