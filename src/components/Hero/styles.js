import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled(motion.section)`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;    
`;

export const Container = styled.div`
  padding: 0 2.75vw;
`;

export const Title = styled(motion.h1)`
    font-size: inherit;
    margin: 0;
    overflow: hidden;
    line-height: 1.2;
    
`;

export const Intro = styled(motion.p)`
    font-size: 3vw;
    position: absolute;
    width: 100%;
    left: 0;
    top: 50vh;
    margin: 0;
    text-align: center;
    overflow: hidden; 
    
    ${media.thone`font-size: 24px; padding: 1rem 0;`};
    ${media.phablet`font-size: 22px; padding: 1rem 0;`};
    
`;

export const Arrow = styled(motion.div)`
    font-size: 4rem;
    left: 50%;
    top: 65vh;
    transform: translateX(-50%);
    position: absolute;

    ${media.thone`font-size: 8vw;`};
`;