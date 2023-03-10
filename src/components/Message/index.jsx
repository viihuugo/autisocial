import React from 'react'
import { Wrapper, Container, Tittle, Info, Text } from './styles'

export default function Message() {
  return (
    <Wrapper>
      <Container>
        <Tittle>Direitos Humanos</Tittle>
        <Info>As pessoas autistas estão frequentemente sujeitas ao estigma e à discriminação, incluindo a privação injusta de cuidados de saúde, educação e oportunidades de envolvimento e participação em suas comunidades</Info>
      </Container>
      <Text>“Nós (pessoas com TEA) merecemos uma vida feliz e gratificante como qualquer outra pessoa. Apesar do fato de não demonstrarmos externamente, temos os mesmos desejos de amor, relacionamentos, casamento, trabalho e nos sentimos como membros contribuintes de nossas comunidades” - Anita Lesko</Text>
    </Wrapper>
  )
}
