import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import './App.css';
import styled from 'styled-components';

// const boxVariants = {
//   hover: { scale : 1.5, rotateZ: 90 },
//   click: { borderRadius: "100px" },
//   drag: {backgroundColor: "rgba(255,255,0,0.5)", transition: { duration: 10 }}
// }

function Motion() {
  const x = useMotionValue(0);
  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const gradient = useTransform(x, [-800, 0, 800], ["rgba(238, 0, 153, 0.5)", "rgba(238, 0, 153, 0.4)", "rgba(238, 0, 153, 0.3)"]);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0,1], [1,5]);
  return (
    <Wrapper style={{background:gradient}}>
      <button onClick={() => x.set(200)}>클릭!</button>
      <Box 
        style={{x, scale : scale}}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
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

const Wrapper = styled(motion.div)`
  background-color: rgba(238, 0, 153, 0.5);
  height: 500vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default Motion;
