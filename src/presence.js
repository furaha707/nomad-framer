import './App.css';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20
  }
}

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <div style={{backgroundColor: "pink", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <AnimatePresence>
      {showing ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" /> : null}
      </AnimatePresence>
      <button onClick={toggleShowing}>클릭</button>
    </div>
  );
}

const Box = styled(motion.div)`
  position: absolute;
  left: 0;
  top:0;
  width: 100px;
  height: 100px;
  background-color:white;
`

export default App;
