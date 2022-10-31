import React,{useState} from 'react'
import {IoMdBookmark, IoMdMenu,IoMdClose} from 'react-icons/io'
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

const Header = () => {

    const [active,setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    } 

  return (
    <div className={active ? 'header' : 'header-mobile'}>

               <div className='menu-icon' onClick={activateNav}>

                    {!active ? <IoMdMenu className='menu-c'/> : <IoMdClose className='menu-c'/>}

               </div>

        <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>

                <li>
                    <IoMdBookmark className='icon'/>
                    <Link to='/'>All To-DOs</Link>
                </li>


                <li>
                    <BsFillPencilFill className='icon'/>
                    <Link to='/'>Create To Do</Link>
                </li>



            </ul>
        </nav>

    </div>
  )
}

export default Header