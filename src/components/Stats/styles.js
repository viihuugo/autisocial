import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled.section`
    height: 100vh;
    padding-top: 10rem;
    

    ${media.phablet` margin-bottom: 200px; `}
`;

export const SplitWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 4rem;

   ${media.tablet`
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto)`};
`;

export const StatsRow = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 4vw;
    padding: 0 35px;

    ${media.tablet`order: 1`};    
`;

export const Stat = styled(motion.div)`
    font-size: 2rem;

    ${media.tablet`padding-top: 10vw`}; 
`;

export const Number = styled(motion.div)`
    font-size: 4rem;
    font-weight: 600;
    color: var(--purple);

`;

export const Header = styled.div`
    font-size: 6rem;
    font-weight: 500;
    position: sticky;
    top: 10px;

    ${media.tablet`
        font-size: 4rem;
        padding: 0 35px;
    `};
`;
