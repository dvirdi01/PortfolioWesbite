
import styles from "./App.module.css"
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/navbar/Hero/Hero";
import { AboutMe } from "./components/navbar/AboutMe/AboutMe"
import { Experience } from "./components/navbar/Experience/Experience";

function App() {
  return <div className= {styles.App}>
    <div className= {styles.overlay}>
      <Navbar/>
      <Hero />
      <AboutMe />
      <Experience />
    </div>
  </div>;
}

export default App
