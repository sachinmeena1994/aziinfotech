import { motion } from 'framer-motion';
import { slide, scale } from './anim';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-white rounded-full absolute left-[-30px]"
      ></motion.div>
      <Link
        to={href} // Use `to` prop instead of `href` for `Link`
        className="text-5xl md:text-6xl text-white hover:text-gray-400 transition-colors duration-200"
      >
        {title}
      </Link>
    </motion.div>
  );
}
