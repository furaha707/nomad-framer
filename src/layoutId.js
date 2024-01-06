import './App.css';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{borderRadius: 50}}/>
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{borderRadius: 0}}/>
        ) : null}
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display:flex;
  gap:2rem;
` 

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color:pink;
`

const Circle = styled(motion.div)`
  width:50px;
  height: 50px;
  border-radius:50%;
  background-color:white;
`

export default App;
