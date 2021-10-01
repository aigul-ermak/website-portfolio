import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import athlete from '../images/athlete-small.png'
import theracer from '../images/theracer-small.png'
import goodtimes from '../images/goodtimes-small.png'
import {motion} from 'framer-motion';
import {fade, lineAnimation, pageAnimation, photoAnim, Slider, sliderContainer} from '../pageTransition';
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work style={{background: '#fff'}} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={Slider}></Frame1>
                <Frame2 variants={Slider}></Frame2>
                <Frame3 variants={Slider}></Frame3>
                <Frame4 variants={Slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 varuiants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt=""/>
                    </Hide>
                </Link>
            </Movie>
            <Movie variants={fade} animate={controls} initial="hidden" ref={element}>
                <h2>The Racer</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt=""/>
                </Link>
            </Movie>
            <Movie variants={fade} animate={controls2} initial="hidden" ref={element2}>
                <h2>Good times</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt=""/>
                </Link>
            </Movie>
            <ScrollTop/>
        </Work>

    )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  //background: white;
  h2 {
    padding: 1rem 0rem;
  }
  @media(max-width: 1300px) {  
    padding: 2rem 2rem;    
  }
`

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
  overflow: hidden
`

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 7.6%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`
export default OurWork;
