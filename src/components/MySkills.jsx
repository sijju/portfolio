
import { motion } from 'framer-motion'
import {
    PaddingContainer,FlexContainer,Heading,ParaText,BlueText,IconContainer
} from '../styles/Global.styled'
import { SkillsCard, SkillsCardContainer } from '../styles/MySkills.styled'
import { Skills } from '../utils/Data'
import {  fadeInRightvariant } from '../utils/Variants'
const MySkills = () => {
  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%" responsiveLeft='1rem' responsiveRight='1rem'>
        <FlexContainer fullWidthChild responsiveFlex responsiveDirection='column'>
        <SkillsCardContainer >
                {Skills.map((skill)=>(
                    <SkillsCard key={skill.id}>
                        <IconContainer size="5rem" color="blue">
                            {skill.icon}
                        </IconContainer>
                        <Heading as="h4" size="h4">
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                ))}
        </SkillsCardContainer>
        <motion.div variants={fadeInRightvariant} initial='hidden' whileInView='visible'>
            <Heading as="h4" size="h4">
                MY SKILLS
            </Heading>
            <Heading as="h2" size="h2" top="0.5rem">
                What <BlueText>I can do</BlueText>
            </Heading>
            <ParaText top='2rem' bottom='1.5rem'>
                As a developer, I have a wide range of experience in front-end development. I am proficient in JavaScript,React,HTML and CSS. 
                My strong experience in building responsive and dynamic user interfaces using React has allowed me to create engaging and
                interactive web applications.
            </ParaText>
            <ParaText>
            React, with its vibrant community and robust ecosystem, is my framework of choice. It enables me to stay at the forefront of modern web development, delivering applications that not only meet but exceed expectations.
            </ParaText>
        </motion.div>
       
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills