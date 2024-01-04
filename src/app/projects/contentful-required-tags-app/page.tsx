import Image from "next/image";
import RolloverLink from "@/app/components/RolloverLink";

const Project = () => {
  return (
    <div className="container mt-24 md:my-24 mx-auto">
      <h1 className="table mb-24 -rotate-2 mx-auto max-w-xs sm:max-w-none text-center">
        Contentful Required Tags App
      </h1>
      <div className="relative max-w-7xl mx-auto mb-16 lg:mb-24 aspect-video">
        <Image
          alt="Stylized screenshot of the Contentful Required Tags App."
          className="object-cover"
          src={"/images/contentful-required-tags-app.png"}
          fill
        />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap max-w-7xl mx-auto">
        <div className="basis-full lg:basis-4/6 p-16 bg-black border-2 border-yellow">
          <p>
            While working as a Solution Architect at Contentful, I would often
            be hit with the same feature requests over and over again. A very
            common one being "when using Contentful Tags, is there any way for
            me to make them required so that authors have to add them before
            publishing content?"
          </p>
          <p>
            Unfortunately, I did not work product-side and could not force
            features to receive priority; however, I had the next best thing:
            Contentful's App Framework. The App Framework allows you to use
            React (or any frontend framework of your choice) to customize
            functionality within the Contentful administrative UI. Using this
            framework I was able to customize how Tags function within the UI,
            adding my own UI elements and custom validation.
          </p>
          <p>
            Overall, I am very pleased with how this little proof-of-concept
            turned out! As with all my projects, I strive to respect my and any
            future developers' time by documenting things really well and
            providing excellent code comments, so feel free to check out the
            repo. As Contentful's App Framework adds a lot of boilerplate files
            by default,{" "}
            <RolloverLink
              href="https://github.com/eric-schmidt/contentful-required-tags/blob/main/src/locations/Field.jsx"
              target="_blank"
            >
              this is the primary file containing the majority of the custom
              code
            </RolloverLink>
            .
          </p>
        </div>
        <div className="basis-full lg:basis-2/6 p-16 lg:p-12 bg-yellow text-black">
          <ul>
            <li className="mb-8 text-lg">
              <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                Stack
              </h2>
              <p>React, Contentful App Framework and Forma36 design system</p>
            </li>
            <li className="mb-8 text-lg">
              <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                Codebase
              </h2>
              <br />
              <RolloverLink
                href="https://github.com/eric-schmidt/contentful-required-tags"
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
