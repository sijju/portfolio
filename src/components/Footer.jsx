
import { motion } from "framer-motion"
import { FormContainer, FormInput, FormLabel } from "../styles/Footer.styled"
import { PaddingContainer,FlexContainer,Heading, BlueText, Button } from "../styles/Global.styled"
import { fadeInBottomvariant } from "../utils/Variants"
const Footer = () => {
  return (
    <PaddingContainer id="Contact" top='5%' bottom='5%'>
        <Heading as={motion.h2} variants={fadeInBottomvariant} initial='hidden' whileInView='visible' size='h2' align='center'>Connect <BlueText>with me</BlueText> </Heading> 
        <PaddingContainer top='3rem'>
            <FlexContainer justify='center'>
                <FormContainer as={motion.form}  variants={fadeInBottomvariant} initial='hidden' whileInView='visible'>
                    <PaddingContainer bottom='2rem'>
                        <FormLabel>
                            Name
                        </FormLabel>
                        
                        <FormInput type='text' placeholder="Enter your name here..." />
                        
                    </PaddingContainer>
                    <PaddingContainer bottom='2rem'>
                        <FormLabel>
                            Email
                        </FormLabel>
                        
                        <FormInput type='text' placeholder="Enter your email here..." />
                        
                    </PaddingContainer>
                    <PaddingContainer bottom='2rem'>
                        <FormLabel>
                            Message
                        </FormLabel>
                        
                        <FormInput as='textarea' placeholder="Enter your name here..." />
                        
                    </PaddingContainer>
                    <FlexContainer justify='center' responsiveFlex>
                        <Button>Send Message</Button>
                    </FlexContainer>

                </FormContainer>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
  )
}

export default Footer