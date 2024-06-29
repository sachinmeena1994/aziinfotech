import { motion } from "framer-motion";

const transition = (OgComponent, pageName) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-[#aed1fd] transform origin-bottom pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} 
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-[#aed1fd] transform origin-top pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} 
      />
      <motion.div
        className="fixed inset-0 flex items-center justify-center text-white text-6xl sm:text-7xl md:text-9xl z-50 pointer-events-none"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -200 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} 
      >
        {pageName}
      </motion.div>
    </>
  );
};

export default transition;
