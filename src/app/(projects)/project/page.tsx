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
      </div>
    </div>
  );
}
