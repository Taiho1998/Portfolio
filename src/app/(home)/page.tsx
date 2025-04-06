import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-400 w-full py-[50px]">
      <div className="text-center mx-auto mb-10">
        <Link href="" className="text-white mr-5">
          자기소개
        </Link>
        <Link href="" className="text-white mr-5">
          프로젝트 소개
        </Link>
        <Link href="" className="text-white">
          기타
        </Link>
      </div>
    </div>
  );
}
