// interface ProjectItemProps {}
import tricount from '@/public/tricountReplica.png'
import Image from 'next/image'
import { VscGithub } from 'react-icons/vsc'
import { HiOutlineLink } from 'react-icons/hi'
import cn from 'classnames'
import { PortfolioItem } from './Projects'

interface ProjectItemProps {
  data: PortfolioItem
  order?: string
}

function ProjectItem({ data, order }: ProjectItemProps) {
  const { image, title, description, githubUrl, liveUrl } = data

  return (
    <div className="flex max-lg:flex-col justify-center items-center mx-auto gap-10 p-8 rounded-xl h-full mb-4">
      <div
        className={cn(
          'overflow-hidden h-[20rem] max-sm:w-[25rem] lg:w-[80rem] relative shadow-lg shadow-quaternary rounded-xl',
          { 'lg:order-last': order === 'last' }
        )}
      >
        <Image
          src={image}
          alt="app image"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          loading="eager"
          priority
          className="cover translate-y-0 hover:translate-y-[-62%] duration-[5000ms] "
        />
      </div>

      <div className="flex flex-col space-y-5 items-center  ">
        <h3 className="text-3xl">{title}</h3>
        <p className="">{description}</p>
        <div className="flex gap-4 justify-center">
          <a href={githubUrl} target="_blank">
            <div className="flex items-center gap-2 p-4 text-lg hover:text-tertiary transition-colors">
              Code: <VscGithub size={25} />
            </div>
          </a>
          <a href={liveUrl} target="_blank">
            <div className="flex items-center gap-2 p-4 text-lg hover:text-tertiary transition-colors">
              Live: <HiOutlineLink size={25} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
