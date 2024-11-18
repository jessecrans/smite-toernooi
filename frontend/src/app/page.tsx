import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center text-smite-text-white">
      <h1 className="text-6xl text-center border-smite-gold border-4 p-4 m-4 text-smite-gold font-bold bg-smite-gray">
        SMITE NITE
      </h1>
      <h2 className="text-3xl">De Boys</h2>
      <h2 className="text-3xl">2024</h2>
      <Image
        src="/pip.jpg"
        alt="Pip"
        width={300}
        height={300}
        className="m-4"
      />
      <p className="text-l m-4 text-center border-2 border-smite-text-blue p-2 bg-gradient-to-t from-smite-accent-blue-2 to-smite-accent-blue-1">
        <q cite="DrVanox">
          Als ik in de top 3 kom en ik sta boven stoets, dan tatoeëer ik de smite lijst.
        </q>
        <span> ~ DrVanox</span>
      </p>
    </main>
  );
}
