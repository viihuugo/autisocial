import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled(motion.section)`     
    overflow: hidden; 
`;

export const Container = styled.div`
    margin-top: 100px;
    border: 5px solid #FDF1DE;

    ${media.tablet` border-bottom: none`}
`;

export const TopContainer = styled.div`
    border-bottom: 8px solid #FDF1DE;
`;

export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`;

export const Box = styled.div`
    border-bottom: 5px solid var(--text);
    font-weight: 400;
    font-size: 6vw;
    padding: 3vw 2.75vw;
    border-right: ${props => props.border || "5px solid var(--text)"};
    cursor: pointer;

    :hover {
      background-color: var(--text);
      color: #0F0F0F;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ${media.tablet`
      grid-column-end: span 3;
      padding: 8vw 3.5vw; 
      font-size: 8vw;
      border-bottom: ${props => props.borderBottom || "8px solid var(--text)"}; 
      border-right: none`};

`;

export const Carousel = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  width:100%;
  padding: 50px 35px;
`;

export const CarouselItem = styled.span`
  font-size: 7vw;
  line-height: 1.2;
  word-wrap: nowrap;
  margin: 0 1vw;
  font-weight: 400;
`;

export const Footer = styled(motion.div)`
  align-items: center;
  justify-content: center;
  text-align: center;
  width:100%;
  margin: 2.5rem 0;

  a {
      text-decoration: none;
      color: inherit;
    }
`;