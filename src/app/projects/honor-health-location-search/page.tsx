import Image from "next/image";
import RolloverLink from "@/app/components/RolloverLink";

const Project = () => {
  return (
    <div className="container my-24 mx-auto">
      <h1 className="table mb-24 -rotate-2 mx-auto text-center">
        Honor Health Location Search
      </h1>
      <div className="relative max-w-5xl mx-auto mb-24 aspect-video">
        <Image
          alt="boss the cat"
          className="object-cover"
          src={"/images/boss.jpg"}
          fill
        />
      </div>
      <div className="flex">
        <div className="basis-4/6 mr-16 p-16 bg-black">
          <p>
            At ut commodi eos cupiditate illum qui sit voluptatem. Ab officia
            ducimus velit ad a sit quis maxime veritatis dolor fuga. At ut
            commodi eos cupiditate illum qui sit voluptatem. Ab officia ducimus
            velit ad a sit quis maxime veritatis dolor fuga. At ut commodi eos
            cupiditate illum qui sit voluptatem. Ab officia ducimus velit ad a
            sit quis maxime veritatis dolor fuga.
          </p>
          <p>
            At ut commodi eos cupiditate illum qui sit voluptatem. Ab officia
            ducimus velit ad a sit quis maxime veritatis dolor fuga. At ut
            commodi eos cupiditate illum qui sit voluptatem. Ab officia ducimus
            velit ad a sit quis maxime veritatis dolor fuga. At ut commodi eos
            cupiditate illum qui sit voluptatem. Ab officia ducimus velit ad a
            sit quis maxime veritatis dolor fuga.
          </p>
        </div>
        <div className="basis-2/6 p-16 self-start bg-yellow text-black">
          <ul>
            <li>Stack: Drupal, Apache Solr, Vue, GraphQL, Google Maps API</li>
            <li>Codebase: private repo ⛔️</li>
            <li>
              <RolloverLink
                text="View live site"
                href="https://www.honorhealth.com/find-a-location"
                target="_blank"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
