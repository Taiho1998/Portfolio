import Navigate from "@/app/components/Navigate";
import ProjDescription from "@/app/components/ProjectDescript";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
};

export default function projectPage() {
  return (
    <div>
      <Navigate />
      <div className="flex w-full">
        <ProjDescription />
        <img
          src="/ProjectImg.svg"
          alt="baroFarm Introduce Img"
          className="w-[500px] h-[800px] aspect-5/8 ml-[60px]"
        />
      </div>
    </div>
  );
}
