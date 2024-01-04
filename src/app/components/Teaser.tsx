"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Teaser = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  const router = useRouter();

  const [focused, setFocused] = useState(false);

  const handleClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Early return if this click was done via keyboard,
      // as no additional logic is required (it's hacky 🤷‍♂️).
      if (e.clientX === 0 && e.clientY === 0) {
        e.currentTarget.blur();
        return;
      }

      // Prevent default behavior of click.
      e.preventDefault();

      // If the element is already focused and the overlay is visible,
      // navigate to the link destination, otherwise display the overlay.
      if (focused) {
        e.currentTarget.blur();
        setFocused(false);
        router.push(href);
      } else {
        setFocused(true);
      }
    };

  // Remove the focused state when an element is no longer focused,
  // otherwise it will navigate immediately when re-clicking on an
  // element that has already been focused once.
  const handleBlur = (e: React.FocusEvent) => {
    setFocused(false);
  };

  return (
    <Link
      className="group relative overflow-hidden rounded-sm pointer-cursor border-2 border-black transition-all hover:shadow-[0_0_40px_10px_rgba(255,228,0,0.25)] hover:border-yellow duration-500 ease-in-out cursor-pointer"
      href={href}
      onClick={handleClick(href)}
      onBlur={handleBlur}
    >
      <div className="relative aspect-video">
        {/* TODO: blueDataURL doesn't alleviate the pop in on fresh load... */}
        <Image
          alt="boss the cat"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
          className="object-cover group-focus:grayscale duration-500 ease-in-out"
          src={src}
          fill
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 p-12 bg-black bg-opacity-90 transition-transform -translate-x-full group-focus:translate-x-0 duration-500 ease-in-out">
          <h3 className="mb-4 text-3xl leading-tight">{title}</h3>
          <p className="leading-tight">{description}</p>
          <Image
            alt="Right arrow indicating a user should click to proceed to a new page."
            className="absolute bottom-4 right-4"
            src="/images/right-arrow.svg"
            width={25}
            height={25}
          />
        </div>
      </div>
    </Link>
  );
};

export default Teaser;
