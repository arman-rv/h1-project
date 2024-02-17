const variants = {
  hidden: {
    position: "relative",
    opacity: 0,
    top: 80,
  },
  visible: {
    position: "relative",
    opacity: 1,
    top: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.3,
      duration:3,
    }}
};

export {variants}
