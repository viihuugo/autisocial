import React from 'react'
import { Wrapper, SplitWrapper, StatsRow, Stat, Number, Header } from './styles'

import { motion } from 'framer-motion'

export default function Stats() {

  const transition = { delay: .5, duration: 1.4, ease: [0.6, 0.05, 0.01, 0.9] };

  const fadeIn = {
    initial: {
      opacity:0,
      y: '50%',
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ... transition },
    },
  };

  return (
    <Wrapper>
        <SplitWrapper >
            <StatsRow>
                <Stat>Prevalência de autismo aumentou 
                <Number variants={fadeIn} initial='initial' whileInView={'animate'} viewport={{once:true}}>178%</Number> desde 2000</Stat>
                <Stat>Aproximadamente 
                <Number variants={fadeIn} initial='initial' whileInView={'animate'} viewport={{once:true}}>40%</Number> dos adultos com autismo nunca tiveram um emprego remunerado</Stat>
                <Stat>Quase 
                <Number variants={fadeIn} initial='initial' whileInView={'animate'} viewport={{once:true}}>80%</Number> dos indivíduos com autismo também têm algum tipo de deficiência intelectual</Stat>
                <Stat>Prevalência de autismo no Brasil aumentou 
                <Number variants={fadeIn} initial='initial' whileInView={'animate'} viewport={{once:true}}>200%</Number> desde 2000</Stat>
            </StatsRow>
            <div>
            <Header>
                Veja alguns números 
            </Header>
            </div>
            

        </SplitWrapper>
    </Wrapper>
  )
}
