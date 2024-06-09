import React from 'react'
import { getImageURL } from '../../../utils';
import styles from "./Experience.module.css";

export const Experience = () => {
  return  <section id="experience" className={styles.experience}>
    <div className={styles.container}>
      <h2 className= {styles.title}>About Me</h2>
      <div className= {styles.content}>
        <p className={styles.description}>
            As a passionate fourth-year student at the University of British Columbia, I am pursuing a Combined Major in Computer Science and Mathematics. 
            My journey is driven by a love for problem-solving, continually asking, "Is there a better way to do this?" This powerful question has guided 
            me through challenging math contests and inspired my innovative thinking.
            With experience in backend development, frontend development, data analysis, and machine learning, I aspire to be part of an environment 
            where I can apply my knowledge to solve real-world issues and constantly push my skills to new heights. My ultimate vision is to leverage 
            sustainable technology as a software developer while inspiring and motivating women like me to pursue a career in STEM.
        </p>
        <hr className={styles.hr}/>
        {/* <img src={getImageURL("hero/portfolioprofilepic.png")} alt = "Hero image of me" className={styles.heroimg}/> */}
      </div>
    </div>
    </section>;
}