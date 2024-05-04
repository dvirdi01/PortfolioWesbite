import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import { getImageURL } from '../../utils';

export const Navbar = () => {
  return <nav className= {styles.navbar}>
    <a className = {styles.title} href="/">My Portfolio</a> {/* Will take me to main home page when I click on portfolio */}
    <div className= {styles.menu}> {/* div containing my navbar */}
        <img className = {styles.menuButton} src= {getImageURL("navbar/menuIcon.png")} alt="menu-button" />
        <ul className= {styles.menuItems}>
            <li> <a href="#about">About Me</a></li>
            <li> <a href="#experience">Experience</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li> <a href="#connect">Connect</a></li>
        </ul>
    </div>
  </nav>;
}
