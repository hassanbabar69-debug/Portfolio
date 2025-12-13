import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react"; 
import './index.css';



const Home = () => {
  const { scrollYProgress } = useScroll();
  
 
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      
    
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 z-0"
      >
    
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(162,220,54,0.2)_0%,_rgba(0,0,0,1)_70%)]"></div>
        
      
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

    
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#A2DC36] font-oswald text-lg md:text-2xl tracking-[0.3em] uppercase mb-4 playfair-display font-italic"
        >
          Creative Graphic Designer
        </motion.p>

        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
         
          className="text-7xl md:text-[9rem] font-bold font-oswald text-white leading-none tracking-tighter montserrat drop-shadow-2xl"
        >
          SANNAN
        </motion.h1>
        
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-7xl md:text-[9rem] font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/5 leading-none tracking-tighter montserrat"
        >
          SIDDIQUI
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-gray-400 max-w-lg text-sm md:text-lg font-light tracking-wide playfair-display font-italic"
        >
          Specializing in Photoshop, Illustrator, Canva & Figma.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex gap-6"
        >
          
          <a 
            href="https://www.linkedin.com/in/sannan-ahmad-504b62339" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-black text-white font-bold font-oswald tracking-wide hover:bg-white hover:text-[#0077B5] hover:scale-105 transition-all duration-300 rounded-sm border border-white/20 hover:border-white shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <Linkedin size={20} />
            LINKEDIN
          </a>

        
          <a 
            href="https://www.instagram.com/visualsonwheels_?igsh=bHU4YzVybGxyamo2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-black border border-white/20 text-white font-bold font-oswald tracking-wide hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-transparent hover:scale-105 transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <Instagram size={20} />
            INSTAGRAM
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Home;