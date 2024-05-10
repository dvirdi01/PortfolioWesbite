import React from 'react'
import { AvatarCanvas } from './AvataCanvas';
import { getImageURL } from '../../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Divjot</h1>
        <p className={styles.description}>I'm a software developer with three years of experience. Reach out if you'd like to know more</p>
        <a href="./assets/divjotResumeCoop2.pdf" target="_blank" className={styles.knowMoreButton}>Download Resume</a>
        <a href="mailto:virdidivjot@gmail.com" className={styles.knowMoreButton}>Get in Touch!</a>
        {/* <AvatarCanvas /> */}

    </div>
    <img src={getImageURL("hero/LinkedInHeadshot-modified.png")} alt = "Hero image of me" className={styles.heroimg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>;
}
