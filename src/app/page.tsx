import Card from "@/components/cards/card.component";

export default function Home() {
  return (
    <main className="sm:px-5 h-full flex items-center justify-center gap-2">
      <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-start">
        <span className="text-amber-400">L</span>earn more
        <span className="block">
          <span className="text-amber-400">K</span>eep it forever
        </span>
      </p>
      <Card
        className="fixed bottom-5 sm:bottom-6 md:bottom-8 lg:bottom-10 right-5 sm:right-6 md:right-8 lg:right-10 w-fit h-fit bg-blue-400 border-blue-600 shadow-blue-600"
        clickable
        href="/portofolio"
      >
        <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold py-1 px-2">
          Explore
        </p>
      </Card>
    </main>
  );
}
