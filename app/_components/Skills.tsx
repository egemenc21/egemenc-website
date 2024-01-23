'use client'
import SkillItem from './SkillItem'
import skills from '@/app/_content/skills.json'
import { motion } from 'framer-motion'
import Head from 'next/head'

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1, 
    transition: {
      ease: 'easeIn',
      delay: 0.2,
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
}

function Skills() {
  return (
    <>
      <Head>
        <title>Egemen Celik | Skills section</title>
        <meta name="My skills" content="any description" />
      </Head>
      <section id='skills' className="flex flex-col pt-[50px] w-[80%] mx-auto">
        <h2 className="p-4 mb-2 text-xl max-md:text-center text-primary dark:text-tertiary font-bold tracking-widest italic overflow-hidden">
          Skills
        </h2>
        <motion.div
          variants={quote}
          initial="initial"
          animate="animate"
          className="flex flex-wrap justify-center gap-12 "
        >
          {skills.map(({ title, skill }) => (
            <SkillItem key={title} skill={skill} title={title} />
          ))}
        </motion.div>
      </section>
    </>
  )
}

export default Skills
