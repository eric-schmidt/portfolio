import { getEntriesByType } from "@/lib/client";
import Teaser from "@/app/components/Teaser";

const TeaserGrid = async () => {
  const projects = await getEntriesByType({
    contentType: "project",
    includeDepth: 1,
  });

  return (
    <div className="container mx-auto px-12 py-24 text-center">
      <h2 className="mb-12 text-white rotate-2">Selected works</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:gap-16 text-left">
        {/* TODO: Fix ANY type. */}
        {projects &&
          projects.map((project: any) => {
            const { fields } = project;

            return (
              <Teaser
                key={project.sys.id}
                title={fields.title}
                description={fields.shortDescription}
                href={`/projects/${fields.slug}`}
                src={`https:${fields.image.fields.image.fields.file.url}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TeaserGrid;
