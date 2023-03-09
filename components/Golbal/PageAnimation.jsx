import React from 'react'
import { motion } from 'framer-motion';

function PageAnimation({children}) {
     const variants = {
        hidden: {  opacity: 0 ,x: 20},
        visible: { opacity: 1  , x: 0},
        transition:{
            duration: 0.6,
        }
      }
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    className="w-full"
    >
        {children}
    </motion.div>
  )
}

export default PageAnimation