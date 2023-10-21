interface SkillItemProps {
  skill: { id: number; name: string }[]
  title: string
}

function SkillItem({ skill, title }: SkillItemProps) {
  return (
    <div className="w-[400px] h-[300px] capitalize flex flex-col text-center items-center rounded-lg bg-tertiary hover:scale-105 cursor-pointer duration-75">
      <h3 className="font-semibold p-4 text-lg bg-quaternary w-full rounded-lg">
        {title}
      </h3>
      <ul className="flex flex-col items-center justify-center gap-1 py-4 text-[#fff]">
        {skill?.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillItem
