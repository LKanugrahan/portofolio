import Card from "@/components/cards/card.component";

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-10 w-full px-1 sm:px-20 py-5">
      <div className="flex flex-col-reverse md:flex-row w-full gap-2 md:gap-20 justify-between xl:justify-center items-center relative">
        <div className="mt-5 md:mt-0 md:hidden xl:block xl:absolute xl:left-2/3 xl:bottom-0">
          <Card
            className={{
              w: "max-w-96",
              h: "h-fit",
              bgC: "bg-white",
              borderC: "border-amber-400",
              shadowC: "shadow-amber-400",
            }}
            clickable
            href="/docs"
          >
            <div className="p-3">
              <p className="text-lg text-neutral-900">
                A Frontend Developer who is consistent in building web admin
                with plain HTML and Tailwind.
              </p>
              <p className="text-lg text-neutral-900">
                Always working with useForm, Yup validation, Redux Toolkit and
                RTK Query. Wanna learn about these?{" "}
                <span className="underline font-bold">Click the box!</span>
              </p>
            </div>
          </Card>
        </div>
        <div className="xl:absolute xl:right-1/2 xl:-translate-x-1/4 xl:top-1/2 xl:-translate-y-1/2 flex flex-col md:gap-4 z-10">
          <div className="flex md:flex-col gap-2">
            <p className=" text-xl sm:text-2xl md:text-4xl md:leading-10">{`I'm`}</p>
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl md:font-bold w-fit">
              Langgeng Kanugrahan
            </p>
          </div>

          <div className="bg-amber-400 w-60 sm:w-72 md:w-40 lg:w-56 h-0.5 md:h-1 rounded-full" />
        </div>
        <div className="relative w-32 h-32 bg-neutral-900 md:w-[200px] md:h-[200px] lg:w-[300px] xl:w-[400px] lg:h-[300px] xl:h-[400px] bg-no-repeat bg-contain bg-avatar rounded-full after:absolute after:w-32 after:h-32 md:after:w-[200px] md:after:h-[200px] lg:after:w-[300px] xl:after:w-[400px] lg:after:h-[300px] xl:after:h-[400px] after:rounded-full after:-z-10 after:box-content after:p-1 after:animate-border-spin tail"/>
      </div>
      <div className="hidden md:block xl:hidden w-full">
        <Card
          className={{
            w: "w-full",
            h: "h-fit",
            bgC: "bg-white",
            borderC: "border-amber-400",
            shadowC: "shadow-amber-400",
          }}
          clickable
          href="/docs"
        >
          <div className="p-3">
            <p className="text-lg text-neutral-900">
              A Frontend Developer who is consistent in building web admin with
              plain HTML and Tailwind.
            </p>
            <p className="text-lg text-neutral-900">
              Always working with useForm, Yup validation, Redux Toolkit and RTK
              Query. Wanna learn about these?{" "}
              <span className="underline font-bold">Click the box!</span>
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}
