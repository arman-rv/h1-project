import { motion, useScroll } from "framer-motion"

const ScrollYProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
        className="z-[2000]"
        style={{ scaleX: scrollYProgress ,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 5+'px',
          background: 'var(--text-col3)',
          transformOrigin: 0+'%',
         }}
      /> 
  )
}

export {ScrollYProgress}