import Image from "next/image";
import tailwind from "../../public/tailwind.png";
import react from "../../public/react.png";
import next from "../../public/next.svg";

export default function Home() {
  return (
    <main className="flex w-full justify-center relative">
      <div className="absolute left-10 top-24 flex flex-col gap-4 z-10">
        <p className="text-4xl leading-10">{`I'm`}</p>
        <p className="text-5xl font-bold w-fit">Langgeng Kanugrahan</p>
        <div className="bg-gold w-44 h-1 rounded-full" />
        <div></div>
      </div>
      <div className="hidden sm:flex items-end justify-center w-[400px] h-[400px] bg-no-repeat bg-contain bg-avatar rounded-full shadow-xl shadow-gold">
        <div className="flex items-end gap-4 absolute -bottom-20">
          <Image src={next} alt="Next" width={100} height={100} />
          <Image src={tailwind} alt="Tailwind" width={100} height={100} />
          <Image src={react} alt="React" width={100} height={100} />
        </div>
      </div>
    </main>
  );
}
