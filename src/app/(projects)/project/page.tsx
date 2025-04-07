import Navigate from "@/app/components/Navigate";
import ProjDescription from "@/app/components/ProjectDescript";

export default function projectPage() {
  return (
    <div>
      <Navigate />
      <div className="flex w-full">
        <ProjDescription />
        <img
          src="/ProjectImg.svg"
          alt="baroFarm Introduce Img"
          className="w-[500px] h-[800px] aspect-auto ml-[60px]"
        />
      </div>
    </div>
  );
}
