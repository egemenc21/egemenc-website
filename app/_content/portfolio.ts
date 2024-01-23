import triCountImage from '@/public/tricountReplica.png'
import mernChatImage from '@/public/mern-chat.png'
import crwnClothingImage from '@/public/crwn-clothing.png'
import { StaticImageData } from 'next/image'

const data = [
  {
    id:1,
    image: triCountImage,
    title: "Tricount Web App - August 2023",
    description: "A web app inspired by the mobile expense tracker app called Tricount. It allows users to authenticate, create groups with participants, add, delete, modify expenses, and easily manage transactions.",
    githubUrl:"https://github.com/egemenc21/tricount-replica-app",
    liveUrl: "https://main--aquamarine-empanada-f3b8ca.netlify.app/" 
  },
  {
    id:2,
    image: mernChatImage,
    title: "MernChat - November 2023",
    description: "A Chat app with authentication and simultaneously texting, web server sockets are used",
    githubUrl:"https://github.com/egemenc21/mern-chat",
    liveUrl: "https://github.com/egemenc21/mern-chat",
    order:"last"
  },
  {
    id:3,
    image: crwnClothingImage,
    title: "Crwn Clothing - July 2023",
    description: "E-commerce website with advanced features and payment options ",
    githubUrl:"https://github.com/egemenc21/crwn-clothing-e-commerce",
    liveUrl: "https://fanciful-syrniki-5664a9.netlify.app/",    
  },

]

interface PortfolioItem {
  id: number
  image: StaticImageData
  title: string
  description: string
  githubUrl: string
  liveUrl: string
}


export default function Portfolio():PortfolioItem[] {
  return data
}