
import { motion } from "framer-motion";

import Navbar from "./navbar";
import Home from "./home";
import About from "./aboutme";
import Tools from "./tools";
import Services from "./services";
import Projects from "./projects";
import ContactSection from "./contact";




const App: React.FC = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* {!isLoaded ? (
        <Preloader onComplete={() => setIsLoaded(true)} />
      ) : ( */}
        <motion.div
         
        >
          <Navbar/>
        </motion.div>
      

      <Home></Home>
      <About></About>
      <Tools></Tools>
      <Services></Services>
      <Projects></Projects>
      <ContactSection></ContactSection>
      
      
    </>
  );
};

export default App;
