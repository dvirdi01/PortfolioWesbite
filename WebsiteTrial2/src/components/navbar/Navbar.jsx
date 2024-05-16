import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import { getImageURL } from '../../utils';

export const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 400) {
        setColor(true)
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  const [menuOpen, setMenuOpen] = useState(false);

  return <nav className= {color ? styles.navbarscroll : styles.navbar}>
    <a className = {styles.title} href="/">My Portfolio</a> {/* Will take me to main home page when I click on portfolio */}
    <div className= {styles.menu}> {/* div containing my navbar */}
        {/* <img className = {styles.menuButton} src= {menuOpen ? getImageURL("navbar/closeIcon.png") : getImageURL("navbar/menuIcon.png")} alt="menu-button" 
        onclick = {() => setMenuOpen(!menuOpen)}/>  */}

        <ul className= {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onclick ={() => setMenuOpen(false)}>
            <li> <a href="#about">About Me</a></li>
            <li> <a href="#experience">Experience</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li> <a href="#connect">Connect</a></li>
        </ul>
    </div>
  </nav>;
}
