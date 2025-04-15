import Carousel from "@/app/components/Carousel";
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
          className="hidden xl:block xl:aspect-5/8 w-[150px] h-[240px] xl: xl:w-[500px] xl:h-[800px] self-center xl:ml-[60px] mt-5 xl:mt-0"
        />
        <div className="xl:hidden mt-5 bg-[#72BF78] w-full mx-auto rounded-xl border-2 border-green-600">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
