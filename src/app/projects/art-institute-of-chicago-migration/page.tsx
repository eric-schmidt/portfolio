import Image from "next/image";
import RolloverLink from "@/app/components/RolloverLink";

const Project = () => {
  return (
    <div className="container mt-24 md:my-24 mx-auto">
      <h1 className="table mb-24 -rotate-2 mx-auto max-w-xs sm:max-w-none text-center">
        Art Institute of Chicago Migration
      </h1>
      <div className="relative max-w-7xl mx-auto mb-16 lg:mb-24 aspect-video">
        <Image
          alt="Stylized screenshot of the Contentful Required Tags App."
          className="object-cover"
          src={"/images/art-institute-of-chicago-migration.png"}
          fill
        />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap max-w-7xl mx-auto">
        <div className="basis-full lg:basis-4/6 p-16 bg-black border-2 border-yellow">
          <p>
            Many of my customers at Contentful were migrating from an existing
            CMS, and as such often needed to migrate <em>tons</em> of content
            over. Although Contentful's Management API makes it relatively
            straightforward to programmatically create content, the way in which
            you should scaffold your project is not immediately clear.
          </p>
          <p>
            This proof of concept uses the{" "}
            <RolloverLink
              href="https://api.artic.edu/docs/#introduction"
              target="_blank"
            >
              Art Institute of Chicago's artwork API
            </RolloverLink>{" "}
            to bridge the gap by showing how you could theoretically scaffold a
            project, while also providing examples for how to deal with some
            hidden Contentful gotchas (i.e. API rate limits). Overall, this was
            a super fun project to work on, as it let me flex some of my backend
            chops while also providing some real value for my customers 💪
          </p>
        </div>
        <div className="basis-full lg:basis-2/6 p-16 lg:p-12 bg-yellow text-black">
          <ul>
            <li className="mb-8 text-lg">
              <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                Stack
              </h2>
              <p>Node.js, Contentful Management API</p>
            </li>
            <li className="mb-8 text-lg">
              <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                Codebase
              </h2>
              <br />
              <RolloverLink
                href="https://github.com/eric-schmidt/art-institute-of-chicago-migration"
                target="_blank"
              >
                View the repo
              </RolloverLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
