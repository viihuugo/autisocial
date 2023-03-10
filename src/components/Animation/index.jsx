import React, { useRef } from 'react';
import { Wrapper, PersonWrapper, People, Info, Container } from './styles'
import { motion, useScroll, useTransform } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faPersonDress } from '@fortawesome/free-solid-svg-icons'

export default function Animation() {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  scrollYProgress.onChange((value) => console.log(value));


  const boy1 = useTransform(scrollYProgress, [0.50, 0.75], ['0%', '-550%']);
  const boy2 = useTransform(scrollYProgress, [0.55, 0.75], ['0%', '-550%']);
  const boy3 = useTransform(scrollYProgress, [0.60, 0.75], ['0%', '-550%']);
  const boy4 = useTransform(scrollYProgress, [0.65, 0.75], ['0%', '-550%']);
  const girl = useTransform(scrollYProgress, [0.70, 0.75], ['0%', '-550%']);

  


  return (
    <Wrapper ref={containerRef}>
      <Container>
      <PersonWrapper>
        <People style={{ translateY: boy1 }}><FontAwesomeIcon icon={faPerson} /></People>
        <People style={{ translateY: boy2 }}><FontAwesomeIcon icon={faPerson} /></People>
        <People style={{ translateY: boy3 }}><FontAwesomeIcon icon={faPerson} /></People>
        <People style={{ translateY: boy4 }}><FontAwesomeIcon icon={faPerson} /></People>
        <People style={{ translateY: girl }} numberColor="#FDDEDE"><FontAwesomeIcon icon={faPersonDress} /></People>
      </PersonWrapper>
      <Info>Meninos têm 4 vezes mais chances de serem</Info>
      <Info>diagnosticados com autismo do que meninas</Info>
      </Container>
    </Wrapper>
  )
}
