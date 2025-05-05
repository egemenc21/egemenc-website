// interface AboutProps {}

import Head from "next/head";
import AnimatedText from "./AnimatedText";

function About() {
  return (
    <>
      <Head>
        <title>Egemen Celik | About Page</title>
        <meta
          name="Background about me"
          content="School, university, skills information"
        />
      </Head>
      <section className="flex flex-col pt-[50px] w-[80%] text-xl">
        <h2 className="pl-4 mb-2 max-md:text-center text-primary dark:text-tertiary font-bold tracking-widest italic overflow-hidden">
          About
        </h2>
        <p className="pl-4 pt-2 mb-4 ">
          My name is Egemen Çelik, and I am a Software Developer/Engineer living
          in
          <b>Istanbul, Turkey.</b>
        </p>
        <p className="pl-4 mb-2 ">
          Skilled in modern frontend and backend technologies, specializing in
          JavaScript frameworks. Works closely with cross-functional teams to
          deliver seamless solutions. Always learning, improving, and sharing
          knowledge.
        </p>
      </section>
    </>
  );
}

export default About;
