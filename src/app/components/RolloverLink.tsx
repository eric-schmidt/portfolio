import Link from "next/link";

const RolloverLink = ({
  text,
  href,
  target,
}: {
  text: string;
  href: string;
  target: string;
}) => {
  return (
    <Link
      className="group relative overflow-hidden inline-flex cursor-pointer after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black"
      href={href}
      target={target}
    >
      <span
        className="bg-black absolute top-0 left-0 overflow-hidden transform -translate-x-full transition-transform duration-500 delay-200 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0 before:inline-block before:content-[attr(data-content)] before:text-white before:transform before:translate-x-full before:duration-500 before:delay-200 before:ease-in-out group-hover:before:transform group-focus:before:transform group-hover:before:translate-x-0 group-focus:before:translate-x-0"
        data-content={text}
        aria-hidden="true"
      ></span>
      {text}
    </Link>
  );
};

export default RolloverLink;
