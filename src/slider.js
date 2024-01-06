import './App.css';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const box = {
  entry: (back) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0
  }),
  center: {
    x: 0,
    opacity:1,
    scale:1,
    transition: {
      duration: 0.3,
    }
  },
  exit: (back) => ({
    x: back ? 500 : -500, 
    opacity:0, 
    scale:0,
    transition: {
      duration: 0.3,
    }
  })
}

function App() {
  const [visible, setVisible] = useState(3);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible(prev => prev === 10 ? 10 : prev+1)
  };
  const prevPlease = () => {
    setBack(true)
    setVisible(prev => prev === 1 ? 1 : prev-1)
  };
  return (
    <div style={{backgroundColor: "pink", height: "100vh", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
      <AnimatePresence  mode="wait" custom={back}>
        <Box 
          variants={box} 
          custom={back}
          initial="entry" 
          animate="center" 
          exit="exit" 
          key={visible}>
            {visible}
          </Box> 
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </div>
  );
}

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color:white;
`

export default App;
