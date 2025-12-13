import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: "black" }} 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.3 }}
      onAnimationComplete={onComplete}
    >
      <motion.svg 
        viewBox="0 0 200 4" 
        className="w-[200px] h-[4px]"
      >
        <motion.line
          x1="0"
          y1="2"
          x2="200"
          y2="2"
          stroke="#A2DC36" 
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ filter: `drop-shadow(0 0 10px #A2DC36)` }} 
        />
      </motion.svg>
    </motion.div>
  );
};

export default Preloader;