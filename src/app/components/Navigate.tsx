"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const path = usePathname();
  return (
    <div className="flex gap-7">
      <Link
        href="/"
        className={`relative text-[${
          path === "/" ? "#000000" : "#B8B8B8"
        }] font-semibold text-4xl hover:underline underline-offset-4 after:content-[''] after:absolute after:right-[-16px] after:h-full after:w-[3px] after:bg-black`}
      >
        About Me
      </Link>
      <Link
        href="/project"
        className={`relative text-[${
          path === "/project" ? "#000000" : "#B8B8B8"
        }] font-semibold text-4xl hover:underline underline-offset-4 after:content-[''] after:absolute after:right-[-16px] after:h-full after:w-[3px] after:bg-black`}
      >
        Projects
      </Link>
      <Link
        href="/etc"
        className={`text-[${
          path === "/etc" ? "#000000" : "#B8B8B8"
        }]  font-semibold text-4xl hover:underline underline-offset-4`}
      >
        기타
      </Link>
    </div>
  );
}
