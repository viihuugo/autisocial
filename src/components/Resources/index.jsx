import React from 'react'
import { CardsWrapper, Wrapper, Container, TopContainer, Box, Carousel, CarouselItem, Footer } from './styles'

export default function Resources() {
  return (
    <Wrapper>
        <Container>
        <TopContainer>
            <Carousel  initial={{ x: '0' }}
              animate={{ x: '-90%' }}
              transition={{ duration: 10, ease: 'linear', repeat: Infinity, delay: 1 }}>
              <CarouselItem>FONTES</CarouselItem>
              <CarouselItem>—</CarouselItem>
              <CarouselItem>FONTES</CarouselItem>
              <CarouselItem>—</CarouselItem>
              <CarouselItem>FONTES</CarouselItem>
              <CarouselItem>—</CarouselItem>
              <CarouselItem>FONTES</CarouselItem>
              <CarouselItem>—</CarouselItem>  
              <CarouselItem>FONTES</CarouselItem>
              <CarouselItem>—</CarouselItem> 
              <CarouselItem>FONTES</CarouselItem>
              <CarouselItem>—</CarouselItem> 
            </Carousel>
        </TopContainer>
        <CardsWrapper>
            <Box><a href='https://www.ama.org.br/site/'>Doe para ajudar</a></Box>
            <Box><a href='https://www.thetreetop.com/statistics/autism-prevalence'>Saiba mais</a></Box>
            <Box border='none' borderBottom='5px solid var(--text)'><a href='https://genialcare.com.br/blog/dia-do-autismo-campanha-da-genial-care/'>Dia do Autismo</a></Box>
        </CardsWrapper>
        </Container>
        <Footer>Criado por <u><a href='http://victorhugoalves.com/'>Victor Alves</a></u></Footer>
    </Wrapper>
  )
}
