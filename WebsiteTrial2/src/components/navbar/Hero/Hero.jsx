import React from 'react'
import { getImageURL } from '../../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>HELLO, I'M <br></br><span className={styles.name}>DIVJOT</span></h1>
        <hr className={styles.hr}/>
        <p className={styles.description}>I’m a software developer. I have two years of experience in data analysis and recently I have gotten into back-end development. Reach out if you would like to know more!</p>
        <div className={styles.buttonContainer}>
          <a href="./assets/divjotResumeCoop2.pdf" target="_blank" className={styles.knowMoreButton}>Resume</a>
          <a href="https://www.github.com/dvirdi01" target = "_blank" className={styles.knowMoreButton}>GitHub</a>
          {/* <a href="#about" className={styles.knowMoreButton}>Read More...</a> */}
        </div>
    </div>
    <img src={getImageURL("hero/portfolioprofilepic.png")} alt = "Hero image of me" className={styles.heroimg}/>
  </section>;
}
