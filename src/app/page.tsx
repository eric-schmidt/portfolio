import Image from "next/image";

const Home = () => {
  return (
    <main>
      <div className="relative h-screen w-screen overflow-hidden fade-in">
        <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 p-4 bg-black text-yellow text-center text-xl md:text-3xl">
          full portfolio coming soon!
        </h1>
        <Image
          alt="Black and white image of Denver, Colorado skyline."
          className="object-cover"
          fill
          src="/images/denver-skyline.png"
        />
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-screen fade-in-delayed">
          <Image
            alt="Logo graphic for Eric Schmidt (a stylized 'E' and 'S')"
            className="absolute object-contain"
            fill
            src="/images/logo.png"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
