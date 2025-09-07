import Image from "next/image";
export default function Home() {
  return (
    <div>
      <h1>I am home</h1>
      <div className="container my-5">
        {/* there is size in tailwind class and fill attribute as well */}
        <Image
          className="mx-auto"
          width={100}
          height={100}
          src="https://www.menucool.com/slider/prod/image-slider-3.jpg"
          alt="Demon Slayer"
        />
        {/*
          there is priority attribute and for those with this lazy loading is disabled and there is quality attrubte from 1-100
        */}
      </div>
    </div>
  );
}
