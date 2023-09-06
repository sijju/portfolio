
import { motion } from "framer-motion"

import { PaddingContainer,FlexContainer,Heading, BlueText,IconContainer, Link } from "../styles/Global.styled"
import { fadeInBottomvariant } from "../utils/Variants"
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
import {FiMail} from 'react-icons/fi'
const Footer = () => {
  return (
    <PaddingContainer id="Contact" top='5%' bottom='5%'>
        <Heading as={motion.h2} variants={fadeInBottomvariant} initial='hidden' whileInView='visible' size='h2' align='center'>Connect <BlueText>with me</BlueText> </Heading> 
        <PaddingContainer top='3rem'>
            <FlexContainer justify='center' gap='2rem' responsiveFlex>
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
                  <IconContainer color='white' size='1.5rem'>
                    <Link href='mailto:karthik.msv1234@gmail.com' target='blank'>

                    <FiMail/>
                    </Link>
                  </IconContainer>
            </FlexContainer>
        </PaddingContainer>
             
    </PaddingContainer>
  )
}

export default Footer