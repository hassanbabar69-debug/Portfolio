import { motion , type Variants } from "framer-motion"; 
import { CarFront, Share2, ShoppingBag, Shirt } from "lucide-react";
import { SpotlightCard } from './components/SpotlightCard';

import './components/SpotlightCard.css';






const services = [
  {
    title: "Car Posters",
    desc: "High-quality, performance inspired car visuals that capture motion, detail, and style crafted to stand out on any platform.",
    icon: <CarFront className="w-10 h-10 text-[#A2DC36]" />,
  },
  {
    title: "Social Media Posts",
    desc: "Modern, on-brand designs built to engage audiences and elevate your brand’s online presence with a clean visual identity.",
    icon: <Share2 className="w-10 h-10 text-[#A2DC36]" />,
  },
  {
    title: "Product Advertisement Posters",
    desc: "Creative and impactful visuals that highlight your product’s best features while maintaining a sleek, professional aesthetic.",
    icon: <ShoppingBag className="w-10 h-10 text-[#A2DC36]" />,
  },
  {
    title: "Shirt Designing",
    desc: "Unique and minimal apparel designs that blend creativity with brand expression — perfect for streetwear and custom collections.",
    icon: <Shirt className="w-10 h-10 text-[#A2DC36]" />,
  },
];

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen flex flex-col justify-start items-center text-center relative"
    >
      
      
      <motion.h1
        className="text-6xl font-bold poppins-extrabold mt-20 text-[#A2DC36] serviceh montserrat"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        custom={0} 
      >
        MY SERVICES
      </motion.h1>

      <motion.p
        className="text-white mt-6 poppins-light max-w-xl servicep playfair-display"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={1} 
      >
        I help brands and creators bring ideas to life through design and code.
      </motion.p>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
        {services.map((service, i) => (
          <SpotlightCard 
            key={i}
            className="w-64 h-64" 
            custom={i} 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 text-[#A2DC36] playfair-display">
              {service.title}
            </h3>
            <p className="text-sm mt-2 leading-relaxed text-white ">{service.desc}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Services;