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
      className="group relative overflow-hidden rounded-sm pointer-cursor border-2 border-black transition-all hover:shadow-[0_0_40px_10px_rgba(255,228,0,0.25)] hover:border-yellow focus:shadow-[0_0_40px_10px_rgba(255,228,0,0.25)] focus:border-yellow duration-500 ease-in-out cursor-pointer"
      href={href}
    >
      <div className="relative aspect-video md:aspect-[14/9]">
        {/* TODO: Add blueDataURL to alleviate pop-in? */}
        {/* TODO: Add sizes attribute. */}
        <Image
          alt="boss the cat"
          className="object-cover"
          placeholder="blur"
          blurDataURL={`https:${src}?w=10&h=10`}
          src={src}
          fill
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 p-6 md:p-12 bg-black bg-opacity-75 transition-all group-hover:bg-yellow group-hover:bg-opacity-100 group-hover:text-black group-focus:bg-yellow group-focus:bg-opacity-100 group-focus:text-black duration-500 ease-in-out">
          <h3 className="mb-4 text-2xl md:text-3xl leading-tight">{title}</h3>
          <p className="leading-tight text-sm md:text-lg">{description}</p>
          <Image
            alt="Right arrow indicating a user should click to proceed to a new page."
            className="absolute bottom-4 right-4"
            sizes="(min-width: 1540px) 433px, (min-width: 1280px) 556px, (min-width: 1040px) 428px, (min-width: 780px) 668px, (min-width: 680px) 540px, calc(94.44vw - 83px)"
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
