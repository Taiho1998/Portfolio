import Navigate from "@/app/components/Navigate";
import ProjDescription from "@/app/components/ProjectDescript";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
};

export default function projectPage() {
  return (
    <div className="min-h-[1490px] ">
      <Navigate />
      <div className="flex w-full flex-col-reverse items-center xl:flex-row">
        <ProjDescription />
        <img
          src="/ProjectImg.svg"
          alt="baroFarm Introduce Img"
          className="aspect-5/8  xl:ml-[60px] mt-5 xl:mt-0"
        />
      </div>
    </div>
  );
}
