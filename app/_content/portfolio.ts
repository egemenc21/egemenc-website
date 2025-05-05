import triCountImage from '@/public/tricountReplica.png'
import mernChatImage from '@/public/mern-chat.png'
import crwnClothingImage from '@/public/crwn-clothing.png'
import campTravelImage from '@/public/campTraveller.png'
import mcpImage from '@/public/mcp-irail-image.png'
import { StaticImageData } from 'next/image'

const data = [
  {
    id: 1,
    image: mcpImage,
    title: 'MCP Server - Belgium Train Assistant - April 2025',
    description: 'An Intelligent Rail Travel Assistant for Belgium using Model Context Protocol (MCP) server to connect LLMs with live Belgian train data. Users can query train schedules, platforms, delays, and train composition in natural language.',
    githubUrl: 'https://github.com/egemenc21/i-rail-mcp',
    liveUrl: ''
  }, 
  {
    id: 2,
    image: campTravelImage,
    title: 'Camp Travel - June 2024',
    description: 'Fully Responsive Next.js feature rich Travel-Camping App',
    githubUrl: 'https://github.com/egemenc21/camptraveler',
    liveUrl: 'https://camptraveler-sand.vercel.app/',
    order: 'last'
  },
  {
    id: 3,
    image: triCountImage,
    title: 'Tricount Web App - August 2023',
    description: 'A web app inspired by the mobile expense tracker app called Tricount. It allows users to authenticate, create groups with participants, add, delete, modify expenses, and easily manage transactions.',
    githubUrl: 'https://github.com/egemenc21/tricount-replica-app',
    liveUrl: 'https://main--aquamarine-empanada-f3b8ca.netlify.app/',
  },
  {
    id: 4,
    image: crwnClothingImage,
    title: 'Crwn Clothing - July 2023',
    description: 'E-commerce website with advanced features and payment options ',
    githubUrl: 'https://github.com/egemenc21/crwn-clothing-e-commerce',
    liveUrl: 'https://fanciful-syrniki-5664a9.netlify.app/',
    order: 'last'
  },
  {
    id: 5,
    image: mernChatImage,
    title: 'MernChat - November 2023',
    description: 'A Chat app with authentication and simultaneously texting, web server sockets are used',
    githubUrl: 'https://github.com/egemenc21/mern-chat',
    liveUrl: '',
    order: ''
  }
]

interface PortfolioItem {
  id: number
  image: StaticImageData
  title: string
  description: string
  githubUrl: string
  liveUrl: string
}


export default function Portfolio(): PortfolioItem[] {
  return data
}