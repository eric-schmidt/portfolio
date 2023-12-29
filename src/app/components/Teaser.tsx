"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Teaser = ({
  title,
  href,
  src,
}: {
  title: string;
  href: string;
  src: string;
}) => {
  const router = useRouter();

  const [focused, setFocused] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Early return if this click was done via keyboard (hacky 🙃).
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
      router.push("/");
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
      className="group block relative overflow-hidden min-h-80 rounded-sm z-0"
      href={href}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      <Image
        alt="boss the cat"
        className="object-cover group-focus:grayscale duration-500 ease-in-out z-10"
        src={src}
        fill
      />
      <div className="relative w-full h-full bg-black bg-opacity-85 transition-transform translate-x-full group-focus:translate-x-0 duration-500 ease-in-out z-20">
        <h3 className="p-12 text-4xl">{title}</h3>
        {/* TODO: Add arrow here!!! */}
      </div>
    </Link>
  );
};

export default Teaser;
