import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      <h2 className="text-4xl">De Boys</h2>
      <h1 className="text-8xl uppercase">Smite Toernooi</h1>
      <h2 className="text-4xl">2024</h2>
      <Image
        src="/pip.jpg"
        alt="Pip"
        width={500}
        height={500}
        className="m-4"
      />
      {/* <button className="bg-blue-500 hover:bg-blue-700 font-bold p-4 m-4 rounded text-white">
        Coming soon...
      </button> */}
    </main>
  );
}
