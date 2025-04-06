import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-[500px] mx-[60px] my-[120px] py-10 px-[55px]">
      <div className="flex gap-7">
        <Link
          href=""
          className="relative font-semibold text-4xl hover:underline underline-offset-4 after:content-[''] after:absolute after:right-[-16px] after:h-full after:w-[3px] after:bg-black"
        >
          About Me
        </Link>
        <Link
          href=""
          className="relative text-[#B8B8B8] font-semibold text-4xl hover:underline underline-offset-4 after:content-[''] after:absolute after:right-[-16px] after:h-full after:w-[3px] after:bg-black"
        >
          Projects
        </Link>
        <Link
          href=""
          className="text-[#B8B8B8] font-semibold text-4xl hover:underline underline-offset-4"
        >
          기타
        </Link>
      </div>
      <div className="bg-green-200 text-center">
        <img
          src="/Frame1.svg"
          alt="Profile_Img"
          className="size-[300px] mx-auto rounded-full hover:shadow-2xl hover:-translate-1"
        />
        {/* 이미지 작업 목록 : 마우스 올릴 시 뜨는 스타일 애니메이션 효과 */}
        <p className="text-4xl font-bold mt-[15px]">
          안녕하십니까,<span className="text-[#EE6533]">고태호</span>입니다!
          <br />
          Hello, my name is <span className="text-[#EE6533]">Taiho Koh</span>!
        </p>
      </div>
    </div>
  );
}
