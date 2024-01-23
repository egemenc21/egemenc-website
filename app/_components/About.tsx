// interface AboutProps {}

import Head from 'next/head'
import AnimatedText from './AnimatedText'

function About() {
  return (
    <>
      <Head>
        <title>Egemen Celik | About Page</title>
        <meta name="Background about me" content="School, university, skills information" />
      </Head>
      <section className="flex flex-col pt-[50px] w-[80%] text-xl">
        <h2 className="pl-4 mb-2 max-md:text-center text-primary dark:text-tertiary font-bold tracking-widest italic overflow-hidden">
          About
        </h2>
        <p className="pl-4 pt-2 mb-4 ">
          My name is Egemen Çelik, and I am a 6th-semester Computer Engineering
          student at Eskisehir Technical University in Türkiye. In 2022-2023
          winter semester, I studied as an Erasmus+ Computer Science student at
          Politechnika Krakowska in Poland.
        </p>
        <p className="pl-4 mb-4 ">
          As a passionate Software Developer, I have a strong foundation in
          HTML5, CSS, SASS, TailwindCSS, JavaScript, React, Redux, Gatsby,
          Strapi, Firebase, GraphQL and TypeScript .
        </p>
      </section>
    </>
  )
}

export default About
