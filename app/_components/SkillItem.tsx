interface SkillItemProps {
  skill: { id: number; name: string; progress: number }[]
  title: string
}

function SkillItem({ skill, title }: SkillItemProps) {
  return (
    <div className="w-[400px] h-[300px] capitalize flex flex-col text-center items-center rounded-lg cursor-pointer duration-75">
      <h3 className="font-semibold p-4 text-lg bg-quaternary w-full rounded-lg">
        {title}
      </h3>
      <ul className="flex flex-col items-center justify-center gap-2 py-4 text-[#fff] w-full">
        {skill?.map(({ id, name, progress }) => (
          <li key={id} className="flex w-full gap-2 justify-start">
            <span className="basis-1/3 text-primary dark:text-secondary">{name}</span>
            <div className="bg-quaternary dark:bg-secondary basis-2/3 relative rounded-lg p-2">
              <div
                className={`bg-tertiary rounded-lg absolute inset-0 top-0 flex justify-end items-center`}
                style={{ right: `${100 - progress}%` }}
              >
                <span className="text-lg font-semibold text-secondary dark:text-primary mr-2">
                  {progress/10}
                </span>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillItem
