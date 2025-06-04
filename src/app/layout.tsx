import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import MainModal from "./components/mainModal";

export const metadata: Metadata = {
  title: {
    template: "%s | 고태호의 웹 포트폴리오",
    default: "고태호의 웹 포트폴리오",
  },
  description: "고태호의 웹 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script src="http://unpkg.com/tone"></script>
        <MainModal />
        <div className="bg-white min-h-[500px] md:mx-[60px] mt-[60px] mb-[120px] py-10 px-[55px] rounded-4xl xl:rounded-none">
          {children}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          closeButton={false}
          theme="colored"
        />
      </body>
    </html>
  );
}
