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
        <header className="absolute top-0 left-1/2 -translate-x-1/2 flex z-10 p-6 fade-in-delayed">
          <a href="https://github.com/eric-schmidt" target="_blank">
            <Image
              alt="GitHub logo"
              className="mr-4"
              src="/images/github.svg"
              height={25}
              width={25}
            />
          </a>
          <a href="https://www.linkedin.com/in/eric-schmidt/" target="_blank">
            <Image
              alt="LinkedIn logo"
              src="/images/linkedin.svg"
              height={25}
              width={25}
            />
          </a>
        </header>
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
