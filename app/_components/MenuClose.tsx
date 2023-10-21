'use client'
import { useContext } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavigationContext } from '../_context/navigation'

function MenuClose() {
  const { navState, changeNavState } = useContext(NavigationContext)
  return (
    <div
      className="md:hidden block hover:cursor-pointer my-4"
      onClick={changeNavState}
    >
      {navState ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
    </div>
  )
}

export default MenuClose
