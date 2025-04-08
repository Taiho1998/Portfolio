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
      <div className="mt-[60px] w-fit mx-auto">
        <h3 className="font-semibold text-3xl">Piano</h3>
        <Piano />
      </div>
      <br />
      <br />
    </>
  );
}
