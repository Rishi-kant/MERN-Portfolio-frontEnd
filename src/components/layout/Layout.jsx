import React, { useState } from 'react'
import Home from '../../pages/home/Home'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import "./Layout.css"
import Menues from '../menues/Menues'
function Layout() {
  const[arrowSide,SetArrowSide]=useState(true)

  // cgange arrow side // for toggle prpose
  const handleToggle=()=>{
    SetArrowSide(!arrowSide)
  }
  return (
    <div className='sidebar-section'>
        <div className={arrowSide?"sidebar-toggle sidebar" :"sidebar"} >
            <div className="sidebar-toggle-icons">
              
                <p onClick={handleToggle}>
                  {
                    arrowSide? <MdOutlineKeyboardDoubleArrowLeft size={30}/>:<MdOutlineKeyboardDoubleArrowRight size={30}/>
                  }
                 
                  
                </p>
            </div>
            <Menues  arrowSide={arrowSide}/>
        </div>
        <div className="container">
            <Home/>
        </div>
    </div>
  )
}

export default Layout