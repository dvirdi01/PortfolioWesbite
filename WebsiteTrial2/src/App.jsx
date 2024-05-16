
import styles from "./App.module.css"
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/navbar/Hero/Hero";
import { AboutMe } from "./components/navbar/AboutMe/AboutMe"

function App() {
  return <div className= {styles.App}>
    <div className= {styles.overlay}>
      <Navbar/>
      <Hero />
      <AboutMe />
    </div>
  </div>;
}

export default App
