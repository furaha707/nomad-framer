import { motion } from 'framer-motion';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <Box 
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    />
  );
}

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: pink;
  border-radius:15px;
`

export default App;
