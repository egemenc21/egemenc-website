import Image from 'next/image'
import portfolioPic from '@/public/egemen-celik-portf.jpeg'
import TypedTitle from './TypedTitle'

function Introduction() {
  const typedStrings = ['Hello, I am', 'Bonjour, Je suis', 'Merhaba, Ben']
  return (
    <section
      className="flex max-md:flex-col justify-center gap-10 items-center w-[80%] md:w-[70%] mx-auto my-[50px] pt-[100px] "
      id="about"
    >
      <div className="flex flex-col justify-center items-center p-8">
        
        <TypedTitle typedStrings={typedStrings} />
        <h1 className="text-3xl max-md:text-center mb-4">Egemen Celik</h1>

        <h2 className="text-2xl max-md:text-center text-tertiary font-bold tracking-widest italic overflow-hidden">
          Software Developer
        </h2>
        <p className="mt-4 text-xl tracking-wide text-start text-clip">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects, showcasing my expertise in React.js and web development.
        </p>
      </div>
      <Image
        className="max-w-[250px] rounded-lg max-md:-order-1 m-4"
        src={portfolioPic}
        alt="Personal Image"
        priority
      />
    </section>
  )
}

export default Introduction
