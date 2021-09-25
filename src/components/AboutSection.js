import React from 'react';
import home1 from '../images/home1.png'


const AboutSection = () => {
    return (
<div>
    <div className="description">
        <div className="title">
            <div className="hide">
                <h2>We work to make</h2>
            </div>
            <div className="hide">
                <h2>your <span>dreams</span> come</h2>
            </div>
            <div className="hide">
                <h2>true.</h2>
            </div>
        </div>
        <p>COntact us for any photography or videogtaphy odeas that you have. We habe proffesianls with amaxing skills</p>
        <button>Contact us</button>
    </div>
    <div className='image'>
        <img src={home1} alt=""/>
    </div>
</div>
    )
}


export default AboutSection;
