import React from "react";
import Head from "next/head";
import Image from "next/image";
import Stars from "~/components/Stars/Stars";
import GitHubIcon from "~/icons/Github";
import SpotifyIcon from "~/icons/Spotify";
import LinkedinIcon from "~/icons/Linkedin";
import BMOIcon from "~/icons/BMO";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import ResumeCard from "~/components/ResumeCard/ResumeCard";

export default function Home() {
  const [inView, setInView] = React.useState<string>();

  const tileRef1 = React.useRef<HTMLDivElement>(null);
  const tileRef2 = React.useRef<HTMLDivElement>(null);
  const tileRef3 = React.useRef<HTMLDivElement>(null);
  const tileRef4 = React.useRef<HTMLDivElement>(null);
  const tileRef5 = React.useRef<HTMLDivElement>(null);
  const tileRef6 = React.useRef<HTMLDivElement>(null);

  const elementsToObserve = [
    "tile-1",
    "tile-2",
    "tile-3",
    "tile-4",
    "tile-5",
    "tile-6",
  ];

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current?.offsetTop) {
      window.scrollTo(0, ref.current.offsetTop);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const elementId: string = entry.target.id;
      const isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        setInView(elementId);
      }
    });
  };

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    elementsToObserve.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsToObserve.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [elementsToObserve]);

  return (
    <>
      <Head>
        <title>Anthony Arellano</title>
        <meta name="description" content="Anthony Arellano's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen w-[100vw] flex-col items-center justify-center scroll-smooth bg-white text-white transition-all delay-150`}
      >
        <Stars number={20} />
        <div
          id="tile-1"
          ref={tileRef1}
          className="z-50 flex min-h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="text-center text-[5rem] font-extrabold tracking-tight text-white sm:text-[5rem]">
            Anthony Arellano
          </h1>
          <h2 className="text-cut background-animation text-center text-4xl font-extrabold text-white">
            Software Engineer
          </h2>
          <div className={`flex gap-2`}>
            <GitHubIcon color="white" />
            <LinkedinIcon color="white" />
            <SpotifyIcon />
          </div>
        </div>
        <div
          id="tile-2"
          ref={tileRef2}
          className="container z-50 flex  min-h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="z-50 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            About
          </h1>
          <div className="overflow-hidden rounded-lg">
            <Image src="/me.jpg" alt="Profile Image" width={300} height={300} />
          </div>
          <p className="z-50 text-xl font-extrabold">
            My name is Anthony Arellano and I am currently a Full Stack Software
            Engineer leading a web development team at Peloton Interactive. Our
            main focus is on providing robust content tooling for internal
            employees via rich and intuitive user interfaces. In my free time I
            enjoy exploring bleeding edge web technologies, writing music, and
            working towards my long term goal of running a marathon. Always open
            to connect, so please feel free to reach out!
          </p>
        </div>
        <div
          id="tile-3"
          ref={tileRef3}
          className="container flex  min-h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="z-50 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Projects
          </h1>
          <div className="z-50 flex flex-wrap items-center justify-center gap-4">
            <ProjectCard
              construction
              title={"runlite 🏃"}
              img={"https://tonesbucket.s3.amazonaws.com/runlite_screensho.png"}
              description={
                "A minimal run tracking web application geared towards users who desire a fuss free way of tracking their workouts."
              }
              url={"https://runlite.vercel.app"}
              technologies={["Next.js", "StyleX", "Material UI", "Vercel"]}
            />
            <ProjectCard
              title={"Wanderer 🏠"}
              img={"https://tonesbucket.s3.amazonaws.com/Capture.PNG"}
              description={"An AirBnb web application clone."}
              url={"https://wanderer-py.herokuapp.com"}
              technologies={[
                "React",
                "Redux",
                "Flask",
                "Google Maps API",
                "AWS S3",
                "postgreSQL",
              ]}
            />
            <ProjectCard
              title={"Soundgarden 🎸"}
              img={"https://tonesbucket.s3.amazonaws.com/Capture2.PNG"}
              description={
                "Gathering inspiration from Spotify and Soundcloud, Soundgarden is a music playing application aimed at promoting aspiring local artists."
              }
              url={"https://sound-garden.herokuapp.com"}
              technologies={[
                "React",
                "Redux",
                "Node.js",
                "Express",
                "Sequelize",
                "AWS S3",
                "postgreSQL",
              ]}
            />
          </div>
        </div>
        <div
          id="tile-4"
          ref={tileRef4}
          className="container flex min-h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="z-50 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Music
          </h1>
          <div className="z-50 flex flex-row flex-wrap gap-2 sm:flex-nowrap">
            <iframe
              src="https://open.spotify.com/embed/artist/1Y3tB2Bs3lxbAA6HD2j6BW?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/artist/76yRWpn2Qg8JHhVdhJbecC?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          id="tile-5"
          ref={tileRef5}
          className="container flex  min-h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="z-50 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Resume
          </h1>
          <ResumeCard />
        </div>
        <div
          id="tile-6"
          ref={tileRef6}
          className="container z-50 flex  h-[100vh] flex-col items-center justify-center gap-12 px-4 py-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Contact
          </h1>
          <p
            onClick={() => window.open("mailto:theanthonyarellano@gmail.com")}
            className="text-cut background-animation cursor-pointer break-all text-center text-4xl font-extrabold"
          >
            theanthonyarellano@gmail.com
          </p>
          <h2 className="text-cut background-animation text-4xl font-extrabold text-yellow-200">
            {"(201) 686 4015"}
          </h2>
          <div className="animate-bounce">
            <BMOIcon />
          </div>
        </div>
        <div className="fixed bottom-5 z-50 flex gap-2 rounded-lg bg-gray-200/100 px-4 py-2 text-black sm:gap-5">
          <div
            onClick={() => handleScroll(tileRef1)}
            className={`cursor-pointer text-sm ${
              inView === "tile-1" ? "font-bold underline decoration-wavy" : ""
            }`}
          >
            Home
          </div>
          <div
            onClick={() => handleScroll(tileRef2)}
            className={`cursor-pointer text-sm ${
              inView === "tile-2" ? "font-bold underline decoration-wavy" : ""
            }`}
          >
            About
          </div>
          <div
            onClick={() => handleScroll(tileRef3)}
            className={`cursor-pointer text-sm ${
              inView === "tile-3" ? "font-bold underline decoration-wavy" : ""
            }`}
          >
            Projects
          </div>
          <div
            onClick={() => handleScroll(tileRef4)}
            className={`cursor-pointer text-sm ${
              inView === "tile-4" ? "font-bold underline decoration-wavy" : ""
            }`}
          >
            Music
          </div>
          <div
            onClick={() => handleScroll(tileRef5)}
            className={`cursor-pointer text-sm ${
              inView === "tile-5" ? "font-bold underline decoration-wavy" : ""
            }`}
          >
            Resume
          </div>
          <div
            onClick={() => handleScroll(tileRef6)}
            className={`cursor-pointer text-sm ${
              inView === "tile-6" ? "font-bold underline decoration-wavy" : ""
            }`}
          >
            Contact
          </div>
        </div>
      </main>
    </>
  );
}
