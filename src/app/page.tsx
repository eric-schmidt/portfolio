import Image from "next/image";
import RolloverLink from "./components/RolloverLink";
import Teaser from "./components/Teaser";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-screen fade-in-delayed -mt-20">
        <Image
          alt="Logo graphic for Eric Schmidt (a stylized 'E' and 'S')."
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/images/logo.png"
          width={1565}
          height={889}
        />

        <Image
          alt="Down arrow indicating a user should scroll."
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce"
          src="/images/down-arrow.svg"
          width={50}
          height={50}
        />
      </div>

      <div className="bg-yellow text-black">
        <div className="container mx-auto px-12 flex flex-col xl:flex-row justify-between">
          <div className="xl:basis-1/2 pt-24 xl:pb-24">
            <h1 className="text-white -rotate-3">Hi there 👋</h1>
            <p>
              My name is Eric Schmidt, and I'm a Web Engineer based out of
              Denver, Colorado. I've been working with the web for well over 15
              years, but have had a love of technology for far longer. When I
              was a kid I stumbled upon a book teaching the <em>basics</em> of
              BASIC programming, and it was then that I realized how engaging
              working with computers could be.
            </p>
            <p>
              I went from using BASIC to build cheesy, text-based games for
              friends to exploring more fully-featured programming languages,
              but it wasn't until 2005 or so that I realized how exciting
              building for the web and sharing my work with the world could be (
              <em>I'm looking at you, Myspace custom templates</em> 🙈). I
              eventually took what started as a fun little diversion and turned
              it into a marketable skillset, and have been building websites and
              web-based applications ever since.
            </p>
            <p>
              From using Wordpress to build small marketing sites with 10 pages
              or less to using Drupal to develop large B2B SaaS marketing sites
              featuring 1000s of pages and tons of integrations &#8212; I excel
              not only in building websites, but also the architecture and
              content management systems that drive them. Although I am
              comfortable moving up and down the stack, I have a profound love
              for modern frontend frameworks like React and Vue, as they are
              incredibly fun to work with and make it effortless to build highly
              sophisticated web apps.
            </p>
            <p>
              As web technology is constantly evolving, I am always on the
              lookout for new things to build. Below you will find a small
              selection of works that I think best showcase my skills, but this
              is by no means exhaustive. Take a peek, and don't hesitate to{" "}
              <RolloverLink
                href="https://www.linkedin.com/in/eric-schmidt/"
                target="_blank"
              >
                drop me a line
              </RolloverLink>{" "}
              if you would like to learn more. Thanks for stopping by!
            </p>
            <p>
              Cheers,
              <br />
              <Image
                alt="Stylized signature for Eric Schmidt."
                src="/images/signature.png"
                width={100}
                height={47}
              />
            </p>
          </div>
          {/* TODO: Thought bubble or something to fill the space above my head?!?!?! */}
          <Image
            alt="Black and white headshot of Eric Schmidt."
            className="xl:basis-2/5 h-fit self-center xl:self-end mt-12"
            src="/images/bw-profile-bg-removed.png"
            width={526}
            height={473}
          />
        </div>
      </div>
      <div className="container mx-auto px-12 py-24 text-center">
        <h2 className="mb-12 text-white rotate-2">Selected works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:gap-16 text-left">
          <Teaser
            title="Honor Health Location Search"
            description="A Vue-based map for finding specific health providers."
            href="/projects/honor-health-location-search"
            src="/images/honor-health-location-search.png"
          />
          <Teaser
            title="Art Institute of Chicago Migration"
            description="A proof of concept for migrating data into Contentful."
            href="/projects/art-institute-of-chicago-migration"
            src="/images/art-institute-of-chicago-migration.png"
          />
          <Teaser
            title="Contentful Required Tags App"
            description="A custom app built using React and Contentful's App Framework."
            href="/projects/contentful-required-tags-app"
            src="/images/contentful-required-tags-app.png"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
