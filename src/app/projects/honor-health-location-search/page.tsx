import Image from "next/image";
import RolloverLink from "@/app/components/RolloverLink";

const Project = () => {
  return (
    <div className="container mt-24 md:my-24 mx-auto">
      <h1 className="table mb-24 -rotate-2 mx-auto max-w-xs sm:max-w-none text-center">
        Honor Health Location Search
      </h1>
      <div className="relative max-w-7xl mx-auto mb-16 lg:mb-24 aspect-video">
        <Image
          alt="Stylized screenshot of the Honor Health Location Search UI."
          className="object-cover"
          src={"/images/honor-health-location-search.png"}
          fill
        />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap max-w-7xl mx-auto">
        <div className="basis-full lg:basis-4/6 p-16 bg-black border-2 border-yellow">
          <p>
            This one was incredibly fun to build, and was also for a great
            cause! This location search combines Drupal's powerful Search API,
            hospital location data from Epic, and Vue 3 + Google's Maps API for
            the frontend, giving users a quick and intuitive way to find
            healthcare providers for their specific location and needs.
          </p>
          <p>
            There are definitely some hurdles when it comes to using Drupal in a
            headless manner; however, for smaller single page applications
            things are quite a bit easier. Additionally, contributed modules
            allow the use of things like GraphQL, making querying for data{" "}
            <em>much</em> easier. Drupal's Search API (powered by Apache Solr)
            is extremely powerful, and lets us do cool things like proximity
            search based on latitude/longitude coordinates with minimal effort.
          </p>
          <p>
            This was one of my first end-to-end Vue projects, and admittedly
            performance could be a bit better; however, I think it runs really
            well, the interface is intuitive, and is overall pretty slick 😎
          </p>
        </div>
        <div className="basis-full lg:basis-2/6 p-16 lg:p-12 bg-yellow text-black">
          <ul>
            <li className="mb-8 text-lg">
              <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                Stack
              </h2>
              <p>Drupal 9/10, Apache Solr, Vue 3, GraphQL, Google Maps API</p>
            </li>
            <li className="mb-0 text-lg">
              <h2 className="inline-block -ml-2 mb-4 text-xl text-white -rotate-2">
                Demo
              </h2>
              <br />
              <RolloverLink
                href="https://www.honorhealth.com/find-a-location"
                target="_blank"
              >
                Visit live site
              </RolloverLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
