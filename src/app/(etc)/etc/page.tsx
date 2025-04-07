import Navigate from "@/app/components/Navigate";
import Piano from "@/app/components/Piano";

export default function extraPage() {
  return (
    <>
      <Navigate />
      <div className="mt-[60px]">
        <h3 className="font-semibold text-3xl">Piano</h3>
        <Piano />
      </div>
    </>
  );
}
