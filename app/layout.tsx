import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Delivery App",
  description: "Food Delivery App Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-gray-200 flex items-start justify-center md:py-8">
        {/* Phone wrapper — full screen on mobile, phone frame on desktop */}
        <div className="w-full max-w-[430px] min-h-screen md:min-h-0 md:h-[900px] bg-white relative overflow-hidden shadow-2xl flex flex-col font-sans md:rounded-[40px]">
          <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
