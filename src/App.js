import './App.css';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  const [id, setId] = useState(null);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        { id ? (
          <Overlay
          variants={overlay}
          onClick={() => setId(null)}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Box layoutId={id} style={{ width: 400, height: 200 }} />
        </Overlay>
        ) : null }
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  gap:2rem;
  height:100vh;
` 

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color:pink;
`

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
