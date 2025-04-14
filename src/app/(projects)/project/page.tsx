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
      <div className="flex w-full flex-col-reverse xl:flex-row xl:min-h-[800px]">
        <ProjDescription />
        <img
          src="/ProjectImg.svg"
          alt="baroFarm Introduce Img"
          className="aspect-5/8 w-[150px] h-[240px] xl:w-[500px] xl:h-[800px] self-center xl:ml-[60px] mt-5 xl:mt-0"
        />
      </div>
    </div>
  );
}
