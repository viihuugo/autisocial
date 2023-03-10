import React, { useRef } from 'react';
import { Wrapper, Container, Message, Bottom } from './styles'

import { useScroll, useTransform } from "framer-motion"

export default function Warning() {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  scrollYProgress.onChange((value) => console.log(value));

  const msg = useTransform(scrollYProgress, [0.10, 0.85], ['0%', '-200%']);

  return (
    <Wrapper ref={containerRef}>
      <Container>
        <Message style={{ translateX: msg }}>Se você está preocupado - aja cedo!</Message>
      </Container>
      <Bottom>Como posso ajudar?</Bottom>
    </Wrapper>
  )
}
