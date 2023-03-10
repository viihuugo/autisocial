import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled(motion.section)`    
    min-height: 150vh; 
    overflow: hidden;  

    ${media.between` min-height: 100vh`}
`;

export const Container = styled(motion.div)`    
    border-top: 5px solid #FDF1DE; 
    border-right: 5px solid #FDF1DE;
    border-left: 5px solid #FDF1DE; 
    border-bottom: 8px solid #FDF1DE; 
`;

export const Tittle = styled(motion.h1)`    
    font-size: 6vw;
    font-weight: 600;
    padding: 50px 35px 0 35px;

    ${media.thone`font-size: 8vw; padding: 9vw 6vw 0 6vw`}
`;

export const Info = styled(motion.p)`    
    font-size: 3.5vw;
    font-weight:400;
    padding: 35px 80px 85px 80px;

    ${media.thone`font-size: 1.5rem; padding: 9vw 6vw 9vw 6vw`}
`;

