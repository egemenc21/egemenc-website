// interface AboutProps {}

import Head from 'next/head'
import AnimatedText from './AnimatedText'

function About() {
  return (
    <>
      <Head>
        <title>Egemen Celik | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <section>
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="text-5xl p-4 "
        />
      </section>
    </>
  )
}

export default About
