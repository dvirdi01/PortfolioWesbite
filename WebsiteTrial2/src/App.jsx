
import styles from "./App.module.css"
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/navbar/Hero/Hero";

function App() {
  return <div className= {styles.App}>
    <div className= {styles.overlay}>
      <Navbar/>
    </div>
    {/* <Hero /> */}
  </div>;
}

export default App
