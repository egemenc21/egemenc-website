'use client'
import { motion } from 'framer-motion'

interface SkillItemProps {
  skill: { id: number; name: string; progress: number }[]
  title: string
}

const singleSkill = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
}

function SkillItem({ skill, title }: SkillItemProps) {
  return (
    <div className="w-[400px] capitalize flex flex-col text-center items-center tracking-wider rounded-lg cursor-pointer duration-75">
      <h3 className="font-semibold p-4 text-lg bg-tertiary dark:bg-quaternary  w-full rounded-lg ">
        {title}
      </h3>
      <ul className="flex flex-col items-center justify-center gap-2 py-4 text-[#fff] w-full">
        {skill?.map(({ id, name, progress }) => (
          <li key={id} className="flex w-full gap-2 justify-start">
            <span className="basis-1/3 text-primary dark:text-secondary text-lg">
              {name}
            </span>
            <div className="bg-quaternary dark:bg-secondary basis-2/3 relative rounded-lg p-2 z-10">
              <motion.div
                variants={singleSkill}
                className={`bg-tertiary rounded-lg absolute inset-0 top-0 flex justify-end items-center `}
                style={{ right: `${100 - progress}%` }}
              >
                <span className="text-lg font-semibold text-secondary dark:text-primary mr-2">
                  {progress / 10}
                </span>
              </motion.div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillItem
