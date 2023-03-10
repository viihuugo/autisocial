import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled(motion.section)`
    
    min-height: 300vh;
    padding-top: 30rem;
    
`;

export const Container = styled(motion.div)`
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden; 
    position: sticky;
    top: 0;
`;

export const PersonWrapper = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 20vh;

    ${media.between` margin-top: 40vh`}
`;

export const People = styled(motion.div)`
    font-size: 12rem;
    color: ${props => props.numberColor || "#DEF0FD"};
    padding: 2rem;

    ${media.desktop` font-size: 8rem`}
    ${media.tablet` font-size: 6rem`}
    ${media.between` font-size: 5rem; padding: 1rem`}
    ${media.between` font-size: 3.5rem; padding: .5rem`}
`;

export const Info = styled(motion.div)`
    font-size: 3rem;
    align-items: center;
    justify-content: center;
    text-align: center;   

    ${media.bigDesktop` font-size: 2rem`}
    ${media.between` font-size: 1.5rem`}
    ${media.thone` font-size: 1rem`}
`;