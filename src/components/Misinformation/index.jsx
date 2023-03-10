import React from 'react'
import { Wrapper, Container, Tittle, Info } from './styles'
import { motion } from 'framer-motion'

export default function Misinformation() {

  
  return (
    <Wrapper>
        <Container>
            <Tittle>
                <motion.p initial={{ opacity:0, y: '100%' }}
            whileInView={{opacity:1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            viewport={{once:true}}>Fazer amizade</motion.p>
                <motion.p initial={{ opacity:0, y: '100%' }}
            whileInView={{opacity:1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{once:true}}>não é tão </motion.p>
                <motion.p initial={{ opacity:0, y: '100%' }}
            whileInView={{opacity:1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            viewport={{once:true}}><i>simples</i></motion.p>                
            </Tittle>
            <Info> Embora alguns autistas não gostem de ter contato físico, mesmo com pessoas do convívio próximo, há crianças e adultos no espectro que adoram receber e dar carinho, como abraços e beijos. Além disso, é bastante comum que sintam empatia pelos outros </Info>
        </Container>
       
    </Wrapper>
  )
}
