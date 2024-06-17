// interface AboutProps {}

import Head from 'next/head'
import AnimatedText from './AnimatedText'

function About() {
  return (
    <>
      <Head>
        <title>Egemen Celik | About Page</title>
        <meta name="Background about me"
              content="School, university, skills information" />
      </Head>
      <section className="flex flex-col pt-[50px] w-[80%] text-xl">
        <h2
          className="pl-4 mb-2 max-md:text-center text-primary dark:text-tertiary font-bold tracking-widest italic overflow-hidden">
          About
        </h2>
        <p className="pl-4 pt-2 mb-4 ">
          My name is Egemen Çelik, and I am a Computer Engineer living in
          Eskisehir. In 2022-2023
          winter semester, I studied as an Erasmus+ Computer Science student at
          Politechnika Krakowska in Poland.
        </p>
        <p className="pl-4 mb-4 ">
          I am dedicated to continuous learning and growth in the constantly
          changing field of web development. I follow best practices to build
          user-friendly, robust web applications. I enjoy learning the concepts
          behind modern technologies and I enjoy using open-source applications.
        </p>
      </section>
    </>
  )
}

export default About
