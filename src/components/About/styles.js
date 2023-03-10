import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled(motion.section)`
    margin-top: 50px;
    border-top: 5px solid var(--text);    
    overflow: hidden;  
`;

export const Flex = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
`;

export const LeftCard = styled(motion.div)`
    grid-column-end: span 1;
    border-bottom: 8px solid var(--text);
    border-right: 5px solid var(--text);
    border-left: 5px solid var(--text);

    ${media.tablet`grid-column-end: span 2;`};
`;

export const RightCard = styled(motion.div)`   
    border-bottom: 8px solid var(--text); 
    border-right: 5px solid var(--text);

    ${media.tablet`grid-column-end: span 2; border-left: 5px solid #FDF1DE;`};
`;

export const Number = styled(motion.h2)`
    font-weight: 600;
    font-size: 4.5rem;
    color: ${props => props.numberColor || "var(--blue)"};
    padding: 50px 35px 0 35px;

    ${media.thone`font-size: 14vw; padding: 9vw 6vw 0 6vw`}
`;

export const Description = styled(motion.p)`
    font-size: 2.5rem;
    padding: 50px 35px;

    ${media.thone`font-size: 1.5rem; padding: 9vw 6vw 9vw 6vw`}
`;

export const CenterCard = styled(motion.div)`
    border-bottom: 8px solid var(--text);
    border-right: 5px solid var(--text);
    border-left: 5px solid var(--text);    
    overflow: hidden;
`;

export const Tittle = styled(motion.div)`
    padding: 50px 0;  

    ${media.thone`padding: 9vw 0`}  
`;

export const CarouselItem = styled.span`
    font-size: 6vw;
    line-height: 1.2;
    word-wrap: nowrap;
    margin: 0 1vw;
    font-weight: 400;

    ${media.thone` font-size: 12vw`}
`;

export const Carousel = styled(motion.div)`
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    width:100%;
`;

export const InfoCard = styled(motion.div)`    
    font-size: 4vw;
    border-bottom: 5px solid var(--text);
    border-right: 5px solid var(--text);
    border-left: 5px solid var(--text);
`;

export const Blue = styled(motion.span)`    
    background-color: var(--deep-blue);
    border-radius: 5px;
`;