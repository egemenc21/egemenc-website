import Image from 'next/image'
import introduction from '@/app/_content/introduction.json'
import TypedTitle from './TypedTitle'

function Introduction() {
  return (
    <section
      className="flex max-md:flex-col justify-center gap-10 items-center w-[80%] md:w-[70%] mx-auto my-[50px] "
      id="about"
    >
      <div className="p-8">
        <h1 className="text-3xl max-md:text-center mb-4">
          <TypedTitle typedStrings={introduction.typedStrings} />
          <br />
          {introduction.title}
        </h1>
        <h2 className="text-2xl max-md:text-center text-tertiary font-bold tracking-widest italic overflow-hidden">
          {introduction.job}
        </h2>
        <p className="text-gray-500 mt-4 text-lg tracking-wide ">
          {introduction.description}
        </p>
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

export default Introduction
