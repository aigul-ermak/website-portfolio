import React from 'react';
import home1 from '../images/home1.png'
import {About, Description, Hide, Image} from '../styles'
import {motion} from 'framer-motion';
import {fade, photoAnim, titleAnim} from '../pageTransition';
import Wave from './Wave';


const AboutSection = () => {


    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide className="hide">
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide className="hide">
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have proffesionals with amazing
                    skills</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt=""/>
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection;
