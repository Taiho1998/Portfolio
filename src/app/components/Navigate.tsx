"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const path = usePathname();
  return (
    <div className="flex gap-7 justify-center xl:justify-start overflow-x-clip min-w-[246px]">
      <Link
        href="/"
        className={`relative ${
          path === "/" ? "text-black" : "text-[#B8B8B8]"
        } font-semibold md:text-4xl hover:underline underline-offset-4 after:content-[''] after:absolute after:right-[-16px] after:h-full xl:after:w-[3px] after:w-[1px] after:bg-black`}
      >
        About Me
      </Link>
      <Link
        href="/project"
        // className={`relative ${
        //   path === "/project" ? "text-black" : "text-[#B8B8B8]"
        // } font-semibold md:text-4xl hover:underline underline-offset-4 after:content-[''] after:absolute after:right-[-16px] after:h-full xl:after:w-[3px] after:w-[1px] after:bg-black`}
        className={`relative ${
          path === "/project" ? "text-black" : "text-[#B8B8B8]"
        } font-semibold md:text-4xl hover:underline underline-offset-4`}
      >
        Projects
      </Link>
      {/* <Link
        href="/etc"
        className={`${
          path === "/etc" ? "text-black" : "text-[#B8B8B8]"
        }  font-semibold md:text-4xl hover:underline underline-offset-4`}
      >
        기타
      </Link> */}
    </div>
  );
}
