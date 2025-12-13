import { easeOut, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Home = () => {
  const lists = ["Home", "About Me", "Tools", "Services", "Projects", "Contact Me"];
  const [active, setActive] = useState("Home");
  const [Open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.2, ease: easeOut }}
      className="text-[#F7DBA7] flex justify-center   fixed top-0 left-0 z-50 w-full"
    >
    
      <motion.nav
        className="bg-black hidden md:flex justify-center items-center py-1 border-2 border-[#A2DC36] rounded-full w-[730px] mt-6 shadow-lg py-4 "
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }}
      >
        <ul className="flex space-x-10">
          {lists.map((item) => (
            <motion.li
              key={item}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: [0, 0, 1] }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <Link
                to={item.toLowerCase().replace(/\s+/g, "")} 
                smooth={true}
                // duration={600}
                offset={100} 
                spy={true} 
                onSetActive={() => setActive(item)}
                onClick={() => setActive(item)}
                className={`cursor-pointer transition-all duration-300 border-transparent font-oswald uppercase tracking-wider
                  ${
                    active === item
                      ? "text-black bg-[#A2DC36] border-2 rounded-3xl py-2 px-5 scale-90 text-sm"
                      : "text-sm text-white hover:text-black hover:bg-white hover:border-2 hover:rounded-3xl hover:px-5 py-2 scale-85 transition-color duration-500"
                  }`}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

    
      <div className="block md:hidden absolute top-5 left-3 z-50 text-[#A2DC36]">
        {Open ? (
          <X
            className="text-[#A2DC36] w-7 h-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        ) : (
          <Menu
            className="text-[#A2DC36] w-7 h-7 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        )}
      </div>

     
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: Open ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden flex flex-col absolute top-0 left-0 gap-6 bg-black h-screen w-[230px] p-8 z-40 text-[#F7DBA7] font-bold uppercase font-oswald"
      >
        {lists.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase().replace(/\s+/g, "")}
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            onSetActive={() => setActive(item)}
            onClick={() => setOpen(false)}
            
            className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ${
              active === item
                ? "bg-[#A2DC36] text-black"
                : "text-white hover:bg-[#F7DBA7] hover:text-[#0E402D] transition-all duration-400"
            }`}
          >
            {item}
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;
