export default function ProfileImg() {
  return (
    <div className="group max-w-fit mx-auto md:perspective-[1000px]">
      <div className="relative size-[200px] xl:size-[300px] transition-transform duration-700 md:group-hover:rotate-y-180 preserve-3d">
        {/* 앞면 */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src="/Frame1.svg"
            alt="Profile_Img"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* 뒷면 */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-full flex flex-col justify-center items-center bg-gradient-to-br from-red-500 via-orange-500 to-yellow-300 hidden md:flex">
          <p className="text-white text-3xl font-bold">고태호</p>
          <p className="text-white text-xl font-bold">1998.05.20</p>
          <p className="text-white text-xl font-bold text-center px-4 break-words">
            대한민국, 경기도 성남시 분당구
          </p>
        </div>
      </div>
    </div>
  );
}
