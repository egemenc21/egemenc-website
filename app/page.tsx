import About from './_components/About'
import Contact from './_components/Contact'
import Introduction from './_components/Introduction'
import Projects from './_components/Projects'
import Skills from './_components/Skills'

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center">
      <Introduction />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}
