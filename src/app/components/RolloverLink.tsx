import Link from "next/link";

const RolloverLink = ({
  children,
  href,
  target,
}: {
  children: string;
  href: string;
  target: string;
}) => {
  return (
    <Link
      className="relative underline underline-offset-4 decoration-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default RolloverLink;
