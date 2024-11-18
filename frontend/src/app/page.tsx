import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen pt-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-smite-yellow p-4 text-8xl font-bold">SMITE</h1>
        <p className="text-smite-text-white text-xl">De Boys - 2024</p>
        <h1 className="text-smite-yellow p-4 text-8xl font-bold">NITE</h1>
      </div>
      {/* <Image
        src="/pip.jpg"
        alt="Pip"
        width={300}
        height={300}
        className="m-4"
      /> */}
      <p className="text-l text-smite-text-white m-4 text-center border-2 border-smite-text-blue p-2 bg-gradient-to-t from-smite-accent-blue-2 to-smite-accent-blue-1">
        <q cite="DrVanox">
          Als ik in de top 3 kom en ik sta boven stoets, dan tatoeëer ik de smite lijst.
        </q>
        <span> ~ DrVanox</span>
      </p>
    </main>
  );
}
