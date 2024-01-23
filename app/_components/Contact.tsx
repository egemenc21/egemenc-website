// interface ContactProps {}
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { RiMailSendLine } from 'react-icons/ri'

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col max-md:items-center gap-4 justify-center py-[50px] w-[80%] mx-auto"
    >
      <h2 className="pl-4 mb-2 text-xl max-md:text-center text-primary dark:text-tertiary font-bold tracking-widest italic overflow-hidden">
        Contact
      </h2>
      <p className="pl-4 pt-2 text-xl">
        Don't be shy! Have a contact with me! 👇
      </p>

      <div className="flex max-md:flex-col max-md:items-start pl-8 mt-4 gap-4">
        <div className="flex">
          <div className='p-4 rounded-full text-secondary  bg-quaternary shadow-md shadow-quaternary '>
            <FaLinkedin size={25} />
          </div>
          <div className='flex flex-col items-start pl-2'>
            <span>Linkedin:</span>
          <a
            href={'https://www.linkedin.com/in/egemenc/'}
            target='_blank'
            className=" hover:text-tertiary transition-colors"
          >
            https://www.linkedin.com/in/egemenc/
          </a>
          </div>
          
        </div>
        <div className="flex">
          <div className='p-4 rounded-full text-secondary bg-quaternary shadow-md shadow-quaternary'>
            <RiMailSendLine size={25} />
          </div>
          <div className="flex flex-col items-start pl-2">
            <span>Mail:</span>
            <a
              href={'mailto:egemenc2101@gmail.com'}
              target='_blank'
              className=" hover:text-tertiary transition-colors "
            >
              egemenc2101@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
