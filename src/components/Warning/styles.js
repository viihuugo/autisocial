import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled(motion.section)`    
    min-height: 200vh; 
`;

export const Container = styled(motion.div)`
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden; 
    position: sticky;
    top: 0;
`;

export const Message = styled(motion.div)`
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 10vw;
    font-weight: 500;
    flex-wrap: nowrap;
    white-space: nowrap;
    left: 110%;
    top: 35%;
    position: absolute;

`;

export const Bottom = styled(motion.div)`
    margin-top:100vh;
    min-width: 100vw;
    font-size: 8vw;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    text-align: center;
`;