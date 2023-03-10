import React from 'react'
import { Wrapper, Flex, LeftCard, RightCard, Number, Description, CenterCard, Tittle, InfoCard, CarouselItem, Carousel, Blue } from './styles'

export default function About() {

  const transition = {  ease: [0.6, 0.05, 0.01, 0.9] };

  const fadeIn = {
    initial: {
      opacity:0,
      y: 80,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: .3, duration: .8, ... transition },
    },
  };

  return (
    <Wrapper>
        <Flex>
        <LeftCard>
            <Number variants={fadeIn} initial='initial' whileInView={'animate'} viewport={{once:true}}>75,000,000</Number>
            <Description>Pessoas têm transtorno do espectro do autismo, isso é 1% da população mundial</Description>
        </LeftCard>
        <RightCard>
            <Number variants={fadeIn} initial='initial' whileInView={'animate'} viewport={{once:true}} numberColor="var(--red)" >1 em 100</Number>
            <Description>Crianças são diagnosticadas com transtorno do espectro autista em 2021</Description>
        </RightCard>
        </Flex>
        <CenterCard initial={{opacity:0,y:'-100%'}} whileInView={{opacity:1,y:0}} transition={{delay: .8, duration: 1, ...transition}} viewport={{once:true}}>
            <Tittle initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.8,duration:1}} viewport={{once:true}}>
              <Carousel  initial={{ x: '0' }}
                animate={{ x: '-90%' }}
                transition={{ duration: 20, ease: 'linear', repeat: Infinity, delay: 1 }}>
                <CarouselItem>AS ESTATÍSTICAS</CarouselItem>
                <CarouselItem>—</CarouselItem>
                <CarouselItem>AS ESTATÍSTICAS</CarouselItem>
                <CarouselItem>—</CarouselItem>
                <CarouselItem>AS ESTATÍSTICAS</CarouselItem>
                <CarouselItem>—</CarouselItem>
                <CarouselItem>AS ESTATÍSTICAS</CarouselItem>
                <CarouselItem>—</CarouselItem>              
              </Carousel>
            </Tittle> 
        </CenterCard>
        <InfoCard initial={{opacity:0,y:'-100%'}} whileInView={{opacity:1,y:0}} transition={{delay: 1.8, duration: 1, ...transition}} viewport={{once:true}}>
            <Description initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2.4,duration:.5}} viewport={{once:true}}>
            O transtorno do espectro do autismo (TEA) é uma deficiência de desenvolvimento causada por diferenças no cérebro. As pessoas com TEA geralmente têm problemas de <Blue>comunicação e interação social</Blue> e comportamentos ou interesses restritos ou repetitivos. As pessoas com TEA também podem ter maneiras diferentes de aprender, se mover ou prestar atenção
            </Description>
        </InfoCard>
    </Wrapper>
  )
}
