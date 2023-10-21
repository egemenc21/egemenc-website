import SkillItem from './SkillItem'
import skills from '@/app/_content/skills.json'

interface SkillsProps {
  skills: { title: string; skill: { id: number; name: string }[] }[]
}

function Skills() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-12">
      {skills.map(({ title, skill }) => (
        <SkillItem key={title} skill={skill} title={title} />
      ))}
    </section>
  )
}

export default Skills
