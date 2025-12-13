import { ChevronLeft, ChevronRight, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";



import shirt1 from './image-removebg-preview.png';
import shirt2 from './image__1_-removebg-preview.png';
import car3 from "./5.png";
import car4 from "./1.png";
import poster1 from "./undefined (1).jpeg";
import poster2 from "./undefined (4).jpeg";



const data = [
  {
    img: shirt1,
    text: "Shirt Designing",
    description:
      "A streetwear apparel concept based on 'Bushido: Way of the Warrior.' The design merges a modern, blocky font with a classic samurai and sun graphic.",
    socials: {
      instagram: "https://www.instagram.com/visualsonwheels_?igsh=bHU4YzVybGxyamo2",
      linkedin: "https://www.linkedin.com/in/sannan-ahmad-504b62339",
    },
    style: {
      img: "w-[550px] h-[550px] object-contain absolute left-[18%] top-[-8%] shirt1",
      titleBox: "absolute right-[5%] top-[63%] titleshirt1",
      titleText: "text-[#A2DC36] poppins-extrabold text-[30px] titleinshirt1 montserrat",
      descBox: "absolute right-[0%] top-[75%] w-[300px] descshirt1",
      descText: "text-white poppins-light-italic text-[14px] descinshirt1",
      socials: "absolute bottom-12 left-13 flex gap-13 socialsshirt1",
      socialIcon: "w-6 h-6 text-[#A2DC36] hover:text-black transition socialsinshirt1"
    }
  },
  {
    img: shirt2,
    text: "Hoodie Designing",
    description:
      "An anime-inspired hoodie concept featuring Naruto Uzumaki. The design includes stylized typography on the front and a bold character graphic on the back.",
    socials: {
      instagram: "https://www.instagram.com/visualsonwheels_?igsh=bHU4YzVybGxyamo2",
      linkedin: "https://www.linkedin.com/in/sannan-ahmad-504b62339",
    },
    style: {
      // Added classes: shirt2, titleshirt2, titleinshirt2, descshirt2, descinshirt2, socialsshirt2
      img: "w-[530px] h-[530px] object-contain absolute left-[18%] top-[-8%] shirt2",
      titleBox: "absolute right-[4%] top-[63%] titleshirt2",
      titleText: "text-[#A2DC36] poppins-extrabold text-[30px] titleinshirt2",
      descBox: "absolute right-[1%] top-[75%] w-[320px] descshirt2",
      descText: "text-white poppins-light-italic text-[14px] descinshirt2",
      socials: "absolute bottom-12 left-13 flex gap-13 socialsshirt2",
      socialIcon: "w-6 h-6 text-[#A2DC36] hover:text-black transition socialsinshirt2"
    }
  },
  {
    img: car3,
    text: "Car Posters",
    description:
      "A promotional poster concept for the 2023 Honda Civic Type R, highlighting its aggressive styling and performance.",
    socials: { instagram: "https://www.instagram.com/visualsonwheels_?igsh=bHU4YzVybGxyamo2",
      linkedin: "https://www.linkedin.com/in/sannan-ahmad-504b62339",},
    style: {
      img: "w-[380px] absolute top-[2%] cursor-pointer posimg",
      titleBox: "absolute right-[10%] top-[55%] postitle ",
      titleText: "text-[#A2DC36] poppins-extrabold text-[42px] postitle1",
      descBox: "absolute right-[3%] top-[70%] w-[350px] posdesc",
      descText: "text-white poppins-light-italic text-[14px] posdesc1 playfair-display",
        socials: "absolute bottom-12 left-13 flex gap-13  possocial",
      socialIcon: "w-6 h-6 text-[#A2DC36] hover:text-black transition  possocial1"
    }
  },
  {
    img: car4,
    text: "Car Posters",
    description:
      "A 2018 Honda Accord Sport concept wrapped in Drip Lab Films color PPF featuring custom carbon fiber parts.",
    socials: { instagram: "https://www.instagram.com/visualsonwheels_?igsh=bHU4YzVybGxyamo2",
      linkedin: "https://www.linkedin.com/in/sannan-ahmad-504b62339",},
    style: {
      img: "w-[380px] absolute top-[2%] cursor-pointer posimg",
      titleBox: "absolute right-[10%] top-[55%] postitle",
      titleText: "text-[#A2DC36] poppins-extrabold text-[42px] postitle1",
      descBox: "absolute right-[3%] top-[70%] w-[350px] posdesc",
      descText: "text-white poppins-light-italic text-[14px] posdesc1 playfair-display",
       socials: "absolute bottom-12 left-13 flex gap-13  possocial",
      socialIcon: "w-6 h-6 text-[#A2DC36] hover:text-black transition  possocial1"
    }
  },
  {
    img: poster1,
    text: "Product Advertisement",
    description:
      "A product advertisement concept for Nescafé Red Mug, highlighting its warm flavor profile.",
    socials: {instagram: "https://www.instagram.com/visualsonwheels_?igsh=bHU4YzVybGxyamo2",
      linkedin: "https://www.linkedin.com/in/sannan-ahmad-504b62339",},
    style: {
      img: "w-[380px] absolute top-[2%] cursor-pointer proimg",
      titleBox: "absolute right-[4%] top-[60%] protitle",
      titleText: "text-[#A2DC36] poppins-extrabold text-[28px] protitle1",
      descBox: "absolute right-[3%] top-[70%] w-[350px] prodesc",
      descText: "text-white poppins-light-italic text-[13px] prodesc1 playfair-display",
       socials: "absolute bottom-12 left-13 flex gap-13  prosocial",
      socialIcon: "w-6 h-6 text-[#A2DC36] hover:text-black transition prosocial1"
    }
  },
  {
    img: poster2,
    text: "Product Advertisement",
    description:
      "A modern advertisement concept for the H-178X SERA wireless headphones.",
    socials: {instagram: "https://www.instagram.com/visualsonwheels_?igsh=bHU4YzVybGxyamo2",
      linkedin: "https://www.linkedin.com/in/sannan-ahmad-504b62339",},
    style: {
      img: "w-[340px] absolute top-[2%] cursor-pointer proimg",
      titleBox: "absolute right-[4%] top-[60%] protitle",
      titleText: "text-[#A2DC36] poppins-extrabold text-[28px] protitle1",
      descBox: "absolute right-[3%] top-[70%] w-[350px] prodesc",
      descText: "text-white poppins-light-italic text-[13px] prodesc1 playfair-display",
      socials: "absolute bottom-12 left-13 flex gap-13  prosocial",
      socialIcon: "w-6 h-6 text-[#A2DC36] hover:text-black transition  prosocial1"
    }
  }
];

const Projects = () => {
  const [Index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const [, setIsDetailsVisible] = useState(false);

  const active = isHovered || isTapped;

  const handleNext = () => {
    setIsHovered(false);
    setIsTapped(false);
    setIndex((prev) => (prev + 1) % data.length);
    setIsDetailsVisible(false);
  };

  const handlePrev = () => {
    setIsHovered(false);
    setIsTapped(false);
    setIndex((prev) => (prev - 1 + data.length) % data.length);
    setIsDetailsVisible(false);
  };

  const getAnimation = () => {
    if (!active) return {};
     if (window.innerWidth < 700) {
    
    return {};
  }

    if (Index === 0) return { left: "6%", top: "-12%" };
    if (Index === 1) return { left: "5%", top: "-12%" };
    if (Index >= 2 && Index <= 5) return { x: -180, scale: 0.7 };

    return {};
  };

 

  return (
    <>
      <div className="projects min-h-screen flex flex-col justify-center items-center mt-[350px] relative px-4">

       

        <motion.h1
          className="absolute top-[-29%] text-6xl lg:text-8xl font-bold poppins-extrabold text-[#A2DC36] project montserrat"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="absolute top-[-12%] poppins-light-italic text-[19px] text-white projectdesc playfair-display"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          What I Have Built
        </motion.p>

        <div className="max-w-4xl w-full h-[500px] relative group">
          <div className='absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#A2DC36]/20 shadow-[0_0_30px_-10px_rgba(241,169,62,0.15)]'></div>

          
          <div className={`
            absolute top-0 left-0 border-t-2 border-l-2 border-[#A2DC36] rounded-tl-2xl transition-all duration-500
            ${active
              ? 'w-24 h-24 opacity-100' 
              : 'w-16 h-16 opacity-60'  
            }
          `}></div>
          
          
          <div className={`
            absolute bottom-0 right-0 border-b-2 border-r-2 border-[#A2DC36] rounded-br-2xl transition-all duration-500
            ${active
              ? 'w-24 h-24 opacity-100' 
              : 'w-16 h-16 opacity-60'   
            }
          `}></div>

          
          <button
            onClick={handlePrev}
            className="absolute left-3 button1 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#A2DC36] text-black"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            {data.map((project, i) =>
              i === Index && (
                <motion.div
                  key={i}
                  className="h-full"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.45 }}
                >

                
                  <motion.img
                    src={project.img}
                    className={project.style.img}
                    alt={project.text}

                    onMouseEnter={() => !isTapped && setIsHovered(true)}
                    onMouseLeave={() => !isTapped && setIsHovered(false)}

                    onClick={() => {
                      setIsTapped((prev) => !prev);
                      setIsHovered(false); 
                    }}

                    

                    animate={getAnimation()}
                    transition={{ type: "spring", stiffness: 130, damping: 16 }}
                  />

                  
                  <motion.h2
                    className={`${project.style.titleBox} ${project.style.titleText}`}
                    animate={{
                      opacity: active ? 1 : 0,
                      y: active ? 0 : 20
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    {project.text}
                  </motion.h2>

                  
                  <motion.p
                    className={`${project.style.descBox} ${project.style.descText}`}
                    animate={{
                      opacity: active ? 1 : 0,
                      y: active ? 0 : 25
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    {project.description}
                  </motion.p>

                  
                  {project.socials.instagram && (
                    <motion.div
                      className={project.style.socials}
                      animate={{ opacity:  1  }}
                    >
                      <a href={project.socials.instagram} target="_blank" rel="noreferrer">
                        <motion.div whileHover={{ scale: 1.2 }}>
                          <Instagram className={project.style.socialIcon} />
                        </motion.div>
                      </a>

                      <a href={project.socials.linkedin} target="_blank" rel="noreferrer">
                        <motion.div whileHover={{ scale: 1.2 }}>
                          <Linkedin className={project.style.socialIcon} />
                        </motion.div>
                      </a>
                    </motion.div>
                  )}

                </motion.div>
              )
            )}
          </AnimatePresence>

         
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#A2DC36] text-black button2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      </div>
    </>
  );
};

export default Projects;
