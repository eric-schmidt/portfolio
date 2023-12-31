import type { Metadata } from "next";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric Schmidt | Web Engineer",
  description: "The online portfolio of Eric Schmidt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-0 fade-in">
          <Image
            alt="Black and white image of Denver, Colorado skyline."
            className="object-cover"
            fill
            src="/images/denver-skyline.png"
          />
        </div>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
