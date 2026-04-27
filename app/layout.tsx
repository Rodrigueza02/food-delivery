import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Delivery Mobile",
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
      <body className="min-h-full bg-gray-100 flex justify-center">
        {/* Mobile Wrapper */}
        <div className="w-full max-w-[430px] min-h-screen bg-white relative overflow-x-hidden shadow-2xl flex flex-col font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
