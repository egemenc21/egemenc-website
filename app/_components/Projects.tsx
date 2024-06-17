import ProjectItem from './ProjectItem'
import getPortfolioData from '../_content/portfolio'
import { StaticImageData } from 'next/image'
import Head from 'next/head'

export interface PortfolioItem {
  id: number
  image: StaticImageData
  title: string
  description: string
  githubUrl: string
  liveUrl: string
  order?: string
}

function Projects() {
  const portfolioData: PortfolioItem[] = getPortfolioData()
  return (
    <>
      <Head>
        <title>Egemen Celik | Projects section</title>
        <meta name="Background about me" content="Egemen Celik Portfilio" />
      </Head>
      <section id="projects" className="pt-[50px] w-[80%]">
        <h2
          className="pl-4 mb-2 text-xl max-md:text-center text-primary dark:text-tertiary font-bold tracking-widest italic overflow-hidden">
          Portfolio
        </h2>
        <p className="pl-4 mb-4 text-xl ">
          Each project is a unique piece of development 🧩
        </p>
        <p className="pl-4 mb-4 text-xl ">Don't forget to look at them by just
          clicking the <strong> Live</strong> icons! :) </p>

        {portfolioData.map((data) => (
          <div key={data.id}>
            <ProjectItem data={data} order={data.order} />
          </div>
        ))}
      </section>
    </>
  )
}

export default Projects
