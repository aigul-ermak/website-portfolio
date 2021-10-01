import React from 'react';
import {About} from '../styles'
import styled from 'styled-components';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {fade, scrollReveal} from '../pageTransition';
import {useScroll} from './useScroll';


const FaqSection = () => {
    const [element, controls] = useScroll()
    return (
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur. adipisicing elit.
                            Consectetur. Consectetur. adipisicing elit. </p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='Different Payments Methods'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='What Products Do You Offer?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>

        </Faq>
    )
}

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-dottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`

export default FaqSection;
