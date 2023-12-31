import Image from "next/image";

const Project = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-md flex">
        <Image
          alt="boss the cat"
          src={"/images/boss.jpg"}
          width={3024}
          height={3024}
        />
        <h1>HELLO</h1>
      </div>
    </div>
  );
};

export default Project;
