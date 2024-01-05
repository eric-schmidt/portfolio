import Image from "next/image";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getEntryBySlug, getEntriesByType } from "@/lib/client";
import { imageLoader } from "@/lib/imageLoader";
import RolloverLink from "@/app/components/RolloverLink";

export const generateStaticParams = async () => {
  const projects = await getEntriesByType({
    contentType: "project",
  });

  // TODO: Fix ANY type
  return projects.map((post: any) => ({ slug: post.fields.slug }));
};

const Project = async ({ params }: { params: { slug: string } }) => {
  const projects = await getEntryBySlug({
    contentType: "project",
    slug: params.slug,
    includeDepth: 1,
  });

  if (projects.length === 0) {
    notFound();
  }

  return (
    <>
      {projects &&
        // TODO: Fix ANY type
        projects.map((project: any) => {
          const { fields } = project;

          return (
            <div
              key={project.sys.id}
              className="container mt-24 md:my-24 mx-auto"
            >
              <h1 className="table mb-24 -rotate-2 mx-auto max-w-xs sm:max-w-none text-center">
                {fields.title}
              </h1>
              <div className="relative max-w-7xl mx-auto mb-16 lg:mb-24 aspect-video">
                <Image
                  alt={fields.image.fields.alternativeText}
                  className="object-cover"
                  fill
                  loader={imageLoader}
                  priority={true} // prevent Largest Contentful Paint issues
                  // TODO: Add proper sizes attribute
                  // sizes="(min-width: 1280px) 1024px, (min-width: 780px) calc(90.83vw - 121px), calc(100vw - 96px)"
                  src={`https:${fields.image.fields.image.fields.file.url}`}
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap max-w-7xl mx-auto">
                <div className="basis-full lg:basis-4/6 p-16 bg-black border-2 border-yellow">
                  {/* TODO: How to handle RolloverLink in RichText? */}
                  {documentToReactComponents(fields.longDescription)}
                </div>
                <div className="basis-full lg:basis-2/6 p-16 lg:p-12 bg-yellow text-black">
                  <ul>
                    <li className="mb-8 text-lg">
                      <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                        Stack
                      </h2>
                      <span className="block">{fields.stack}</span>
                    </li>

                    {fields.codebase && (
                      <li className="mb-8 text-lg">
                        <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                          Codebase
                        </h2>
                        <br />
                        <RolloverLink href={fields.codebase} target="_blank">
                          View the repo
                        </RolloverLink>
                      </li>
                    )}

                    {fields.demo && (
                      <li className="mb-8 text-lg">
                        <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                          Demo
                        </h2>
                        <br />
                        <RolloverLink href={fields.demo} target="_blank">
                          View the live demo
                        </RolloverLink>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Project;
