"use client";
export default function CopyTextButton({ copyText }: { copyText: string }) {
  return (
    <button
      onClick={() => {
        window.navigator.clipboard.writeText(`${copyText}`);
      }}
      className="cursor-pointer ml-3 border rounded-lg w-fit p-3 inline-block group hover:bg-[#EE6533] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all"
    >
      <span className="break-keep">복사하기</span>
    </button>
  );
}
