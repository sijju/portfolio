
import {
    PaddingContainer,FlexContainer,Heading,ParaText,BlueText,IconContainer, Link
} from '../styles/Global.styled'
import {BsLinkedin,BsInstagram,BsTwitter, BsGithub} from 'react-icons/bs'
import {  ShowCaseParticelContainer, ShowcaseImageCard } from '../styles/Showcase.styled'
import Me from '../assets/me.png'

import { motion } from 'framer-motion'
import { fadeInLeftvariant } from '../utils/Variants'
const Showcase = () => {
  return (
    <PaddingContainer id="Home" left='3%' right='10%' top='15%' bottom='10%' responsiveLeft='1rem' responsiveRight='1rem' responsiveTop='8rem'>
        <FlexContainer fullWidthChild >
            {/*left Content */}
            <motion.div
             variants={fadeInLeftvariant}
             initial='hidden'
             whileInView='visible'
            >
                <Heading as="h4" size="h4">Hello!</Heading>
                <Heading as="h2" size="h2" top="0.5rem" bottom="0.1rem">
                  I&apos;m <BlueText>Karthik Mutyala</BlueText>
                </Heading>
                <ParaText as='p' top='2rem' bottom='4rem'>
                  Hello, my name is Karthik and I&apos;m a fron-end developer, I create and design user-friendly websites and web apps.
                </ParaText>

                {/* --social--icons */}
                <FlexContainer  gap='20px' responsiveFlex>
                  <IconContainer  size='1.5rem'>
                   <Link href='https://www.linkedin.com/in/karthik-msv-833366112/' target='blank'> 
                    <BsLinkedin />
                   </Link>
                  </IconContainer>
                  <IconContainer color='white' size='1.5rem'>
                    <Link href='https://instagram.com/karthiksijju' target='blank'>

                    <BsInstagram/>
                    </Link>
                  </IconContainer>
                  <IconContainer color='white' size='1.5rem'>
                   <Link href='https://twitter.com/s0loLife' target='blank'>
                    
                    <BsTwitter/>
                   </Link>
                  </IconContainer>
                  <IconContainer color='white' size='1.5rem'>
                    <Link href='https://github.com/sijju' target='blank'>

                    <BsGithub />
                    </Link>
                  </IconContainer>
                </FlexContainer>
            </motion.div>

            {/* --right-container */}
              <FlexContainer justify="flex-end"  >
                  <ShowCaseParticelContainer>
                    <ShowcaseImageCard >
                      <img src={Me} alt="my picture" />
                    </ShowcaseImageCard>
                  
                  </ShowCaseParticelContainer>
              </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase