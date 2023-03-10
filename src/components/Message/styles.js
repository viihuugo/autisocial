import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled(motion.section)`    
    min-height: 200vh;
    padding-top: 30rem;    
    overflow: hidden;

    ${media.phablet` min-height: 100vh; margin-bottom: 100px; `}
`;

export const Container = styled(motion.div)`    
    min-height: 100vh;
    background-color: #141414;
    padding: 50px;
    transform: matrix(0.99, -0.12, 0.13, 0.99, 0, 0);

    
    ${media.phablet` transform: none; min-height: 50vh `}
`;

export const Tittle = styled(motion.div)`    
    background-color: #5553DA;
    font-size: 7vw;
    font-weight: 500;
    padding-top: 1vw;
    width: 60vw;
    text-align: center;

    ${media.thone` font-size: 10vw; `}
`;

export const Info = styled(motion.div)` 
    font-size: 4rem;
    font-weight:400;
    align-items: right;
    text-align: left;
    padding-top: 4rem;
    padding-left: 5rem;

    ${media.desktop` font-size: 3rem`}
    ${media.between` font-size: 2.5rem; padding-left: 0; `}
    ${media.phablet` font-size: 1.5rem; padding-left: 0; `}
`;

export const Text = styled(motion.div)`
    min-height: 100vh;   
    font-size: 3.5vw;
    font-weight:400;
    padding: 0 35px;
    padding-top: 10vw; 

    ${media.tablet`font-size: 5vw;`};
    ${media.thone`font-size: 28px;`};
    ${media.phablet`font-size: 1.5rem; min-height: 50vh` };   
`;