export default function ProfileImg() {
  return (
    <div className="group max-w-fit mx-auto relative overflow-hidden">
      <div className="size-[300px] scale-95 mx-auto rounded-full flex flex-col bg-linear-135 from-[#ff0000] from-0% via-[#ee6533] via-50% to-[#ffeb00] to-100% justify-center items-center opacity-0 group-hover:scale-100 duration-300 group-hover:translate-x-[150px] group-hover:opacity-100 transition-all">
        <p className="text-white text-3xl font-bold">고태호</p>
        <p className="text-white text-xl font-bold">1998.05.20</p>
        <p className="text-white text-xl font-bold break-words">
          대한민국, 경기도 성남시 분당구
        </p>
      </div>
      <img
        src="/Frame1.svg"
        alt="Profile_Img"
        className="size-[200px] sm:size-[300px] -mt-[300px] mx-auto rounded-full group-hover:-translate-x-[150px] transition-[transform, box-shadow] duration-300 group-hover:shadow-[8px_8px_20px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
