import { motion, useMotionValue, useTransform } from 'framer-motion';
import './App.css';
import styled from 'styled-components';

// const boxVariants = {
//   hover: { scale : 1.5, rotateZ: 90 },
//   click: { borderRadius: "100px" },
//   drag: {backgroundColor: "rgba(255,255,0,0.5)", transition: { duration: 10 }}
// }

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  return (
    <div style={{backgroundColor: "pink", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button onClick={() => x.set(200)}>클릭!</button>
      <Box 
        style={{x, scale : scale}}
        drag="x"
        dragSnapToOrigin
      />
    </div>
  );
}

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255,255,255,1);
  border-radius:40px;
`

// const BiggerBox = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: rgba(0,0,0,0.4);
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `

export default App;
