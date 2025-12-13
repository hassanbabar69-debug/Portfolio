import { motion , type Variants } from 'framer-motion';
import { Linkedin, Instagram, Phone, MapPin, ArrowUpRight, Download, FileText } from 'lucide-react';






const ContactSection = () => {
  
  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  
  const itemVariants : Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
   
    <section className="contactme relative overflow-hidden min-h-screen bg-black flex items-center justify-center p-6 font-sans text-white">
      

      <div className="absolute inset-0 pointer-events-none">
       
      </div>

      <motion.div
        className="max-w-5xl w-full z-10" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        
        <motion.div variants={itemVariants} className="mb-28 text-center md:text-center">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight montserrat text-[#A2DC36]">
            Let's Connect
          </h2>
          <p className="text-white mt-3 text-lg playfair-display ">
            Reach out through social media or grab my resume below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          
          <motion.a 
            href="https://www.linkedin.com/in/sannan-ahmad-504b62339" 
            target="_blank"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white rounded-[2rem] p-8 flex flex-col justify-between h-64 relative text-black"
          >
            <div className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full group-hover:bg-[#0077B5] group-hover:text-white transition-colors"><ArrowUpRight size={24} /></div>
            <Linkedin size={48} className="text-gray-800 group-hover:text-[#0077B5] transition-colors" />
            <div><h3 className="text-2xl font-bold">LinkedIn</h3><p className="text-gray-500 font-medium">Professional Connect</p></div>
          </motion.a>

          <motion.a 
            href="https://wa.me/923247289234" 
            target="_blank"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-[#A2DC36] rounded-[2rem] p-8 flex flex-col justify-between h-64 relative text-black"
          >
            <div className="absolute top-6 right-6 p-2 bg-black/10 rounded-full group-hover:bg-black group-hover:text-[#A2DC36] transition-colors"><ArrowUpRight size={24} /></div>
            <Phone size={48} />
            <div><h3 className="text-2xl font-bold">WhatsApp</h3><p className="opacity-80 font-medium">Chat directly</p></div>
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/visualsonwheels_?igsh=bHU4YzVybGxyamo2" 
            target="_blank"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white rounded-[2rem] p-8 flex flex-col justify-between h-64 relative overflow-hidden text-black"
          >
             <div className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full group-hover:bg-[#E1306C] group-hover:text-white transition-colors"><ArrowUpRight size={24} /></div>
            <Instagram size={48} className="text-gray-800 group-hover:text-[#E1306C] transition-colors" />
            <div><h3 className="text-2xl font-bold">Instagram</h3><p className="text-gray-500 font-medium">Visual Portfolio</p></div>
          </motion.a>

          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 bg-zinc-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden border border-white/5 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          >
            <div className="space-y-6 z-10">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute  h-full w-full rounded-full bg-[#A2DC36] opacity-75"></span>
                  <span className="relative  rounded-full h-3 w-3 bg-[#A2DC36]"></span>
                </span>
                <span className="text-[#A2DC36] font-medium tracking-wide text-sm uppercase">Available for work</span>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                  Need my full details?
                </h3>
                <div className="flex items-center gap-2 text-zinc-400">
                  <MapPin size={18} />
                  <span>Based in Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            <a 
              href="/resume.pdf.pdf"
              download="Sannan_Siddiqui_Resume.pdf"
              className="group w-full md:w-auto bg-white/5 hover:bg-[#A2DC36] border border-white/10 hover:border-[#A2DC36] transition-all duration-300 rounded-2xl p-6 flex items-center justify-between gap-6 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="bg-zinc-800 group-hover:bg-black/20 p-3 rounded-full transition-colors text-white group-hover:text-black">
                  <FileText size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg group-hover:text-black transition-colors">Download Resume</p>
                  <p className="text-sm text-zinc-500 group-hover:text-black/70 transition-colors">PDF Format</p>
                </div>
              </div>
              <div className="bg-white/10 group-hover:bg-black/10 p-2 rounded-full transition-colors">
                <Download size={20} className="text-white group-hover:text-black" />
              </div>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;