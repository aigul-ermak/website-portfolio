import React from 'react';
import home1 from '../images/home1.png'
import styled from 'styled-components';


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide className="hide">
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have proffesionals with amazing
                    skills</p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt=""/>
            </Image>
        </About>
    )
}

//styled component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter
  }
`
const Image = styled.div`
    flex: 1;
  overflow: hidden;//gor animation
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
  overflow: hidden;
`




export default AboutSection;
