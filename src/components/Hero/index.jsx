import React, { useState, useEffect } from 'react';
import { Wrapper, Container, Title, Intro, Arrow } from './styles'
import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



export default function Hero() {

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowText(false);
    }, 3500);
  }, []);

  return (
    <Wrapper>
      <Container>
        {showText && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0.4, fontSize: '5vw', y: '60%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.4, 0.4, 0.4, 0.4, 0],
                fontSize: ['5vw', '5vw', '10vw', '10vw', '10vw'],
                y: ['60%', '60%', '60%', '300%', '300%'],
              }}
              transition={{
                ease: [0.6, 0.05, 0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <Title>Auti Social</Title>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.6, fontSize: '7vw', y: '40%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.6, 0.6, 0.6, 0.6, 0],
                fontSize: ['7vw', '7vw', '10vw', '10vw', '10vw'],
                y: ['40%', '40%', '40%', '200%', '200%'],
              }}
              transition={{
                ease: [0.6, 0.05, 0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <Title>Auti Social</Title>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.8, fontSize: '8.5vw', y: '20%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.8, 0.8, 0.8, 0.8, 0],
                fontSize: ['8.5vw', '8.5vw', '10vw', '10vw', '10vw'],
                y: ['20%', '20%', '20%', '100%', '100%'],
              }}
              transition={{
                ease: [0.6, 0.05, 0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <Title>Auti Social</Title>
            </motion.div>
          </>
        )}

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '-55%' }}
          transition={{
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.5,
            delay: 3.4,
          }}>
          <motion.div
            initial={{ scale: 0, fontSize: '10vw' }}
            animate={{ scale: 1 }}
            transition={{
              ease: [0.6, 0.05, 0.01, 0.9],
              duration: 0.5,
              delay: 0.4,
            }}>
            <Title>Auti Social</Title>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            
            duration: 0.5,
            delay: 3.4,
          }}>
          <Intro>Vamos conversar sobre autismo</Intro>
        </motion.div>

        {showText && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0.8, fontSize: '8.5vw', y: '-20%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.8, 0.8, 0.8, 0.8, 0],
                fontSize: ['8.5vw', '8.5vw', '10vw', '10vw', '10vw'],
                y: ['-20%', '-20%', '-20%', '-100%', '-100%'],
              }}
              transition={{
                ease: [0.6, 0.05, 0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <Title>Auti Social</Title>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.6, fontSize: '7vw', y: '-40%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.6, 0.6, 0.6, 0.6, 0],
                fontSize: ['7vw', '7vw', '10vw', '10vw', '10vw'],
                y: ['-40%', '-40%', '-40%', '-200%', '-200%'],
              }}
              transition={{
                ease: [0.6, 0.05, 0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <Title>Auti Social</Title>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.4, fontSize: '5vw', y: '-60%' }}
              animate={{
                scale: [0, 1, 1, 1, 1],
                opacity: [0.4, 0.4, 0.4, 0.4, 0],
                fontSize: ['5vw', '5vw', '10vw', '10vw', '10vw'],
                y: ['-60%', '-60%', '-60%', '-300%', '-300%'],
              }}
              transition={{
                ease: [0.6, 0.05, 0.01, 0.9],
                times: [0, 0.3, 1],
                duration: 3,
                delay: 0.6,
              }}>
              <Title>Auti Social</Title>
            </motion.div>
          </>
        )}
        <Arrow
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 3.6,
          }}>
          <div>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </Arrow>
      </Container>
    </Wrapper>
  );
}
