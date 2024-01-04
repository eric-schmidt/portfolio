import Image from "next/image";
import Link from "next/link";

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
  return (
    <Link
      className="group relative overflow-hidden rounded-sm pointer-cursor border-2 border-black transition-all hover:shadow-[0_0_40px_10px_rgba(255,228,0,0.25)] hover:border-yellow duration-500 ease-in-out cursor-pointer"
      href={href}
    >
      <div className="relative aspect-video">
        {/* TODO: blueDataURL doesn't alleviate the pop in on fresh load... */}
        <Image
          alt="boss the cat"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
          className="object-cover duration-500 ease-in-out"
          src={src}
          fill
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 p-12 bg-black bg-opacity-90 transition-all group-hover:bg-yellow group-hover:bg-opacity-100 group-hover:text-black group-focus:bg-yellow group-focus:bg-opacity-100 group-focus:text-black duration-500 ease-in-out">
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
