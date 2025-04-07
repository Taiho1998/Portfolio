"use client";
export default function Github() {
  return (
    <img
      className="transition-transform duration-300 hover:scale-110 cursor-pointer"
      src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white"
      onClick={() => {
        window.open("https://github.com/Taiho1998");
      }}
    />
  );
}
