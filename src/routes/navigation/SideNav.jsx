import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import Link from './Link';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    title: 'Faq',
    href: '/faq',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export default function SideNav() {
  const location = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  const handleMouseLeave = () => {
    setSelectedIndicator(location.pathname);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen md:w-[550px] w-full lg:hidden z-10 bg-blue-200 fixed top-0 right-0 text-white"
      style={{ overflowY: 'hidden' }} // Prevents vertical scrolling
    >
      <div className="box-content w-full h-full px-16 flex flex-col justify-between">
        <div className="flex w-full flex-col gap-4 mt-20" onMouseLeave={handleMouseLeave}>
          <div className="text-xs w-[70%] md:w-[80%] text-zinc-400 pb-2 uppercase border-b-2 border-zinc-400 mb-3">Navigation</div>
          <div className='flex flex-col gap-4'>
          {navItems.map((data, index) => (
            <Link key={index} data={{ ...data, index }} isActive={selectedIndicator === data.href} setSelectedIndicator={setSelectedIndicator} />
          ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
