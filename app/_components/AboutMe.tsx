'use client'
import Image from 'next/image'
import about from '@/app/_content/about.json'
import ReactTyped from 'react-typed'
import TypedTitle from './TypedTitle'
// interface AboutMeProps {}

function AboutMe() {
  return (
    <section
      className="flex max-md:flex-col justify-center gap-10 items-center w-[80%] mx-auto my-[50px] text-[#F6F1EE] "
      id="about"
    >
      <div className="p-8">
        <h1 className="text-3xl mb-4">
        <TypedTitle typedStrings={about.typedStrings}/>
          <br />
          {about.title}
        </h1>
        <h2 className="text-2xl  text-[#ED7D31] font-bold tracking-wide italic inline rounded-lg overflow-hidden">
          {about.job}
        </h2>
        <p className="text-gray-500 mt-4 text-lg tracking-wide ">
          {about.description}
        </p>
        {/* <div className="max-md:grid max-md:grid-cols-3 justify-items-center flex mt-8 gap-5"></div> */}
      </div>
      <Image
        className="max-w-[250px] rounded-lg max-md:-order-1 m-4"
        src="/egemen-celik-portf.jpeg"
        width={250}
        height={400}
        alt="Personal Image"
      />
    </section>
  )
}

export default AboutMe
