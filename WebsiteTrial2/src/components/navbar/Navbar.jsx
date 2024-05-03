import React from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return <nav className= {styles.navbar}>
    <a className = {styles.title} href="/">My Portfolio</a> {/* Will take me to main home page when I click on portfolio */}
    <div className= {styles.menu}> {/* div containing my navbar */}
        <ul className= {styles.menuItems}>
            <li> <a href="#about">About Me</a></li>
            <li> <a href="#experience">Experience</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li> <a href="#connect">Connect</a></li>
        </ul>
    </div>
  </nav>;
}
