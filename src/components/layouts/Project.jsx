import { FaGithub } from "react-icons/fa"
import { PaddingContainer,Heading,FlexContainer,ParaText,IconContainer,Button, Link } from "../../styles/Global.styled"
import { ProjectImage, ProjectImgContainer, TechStackCard } from "../../styles/MyProjects.styled"
import { motion } from "framer-motion"
import { fadeInLeftvariant, fadeInRightvariant } from "../../utils/Variants"
const Project = ({data}) => {
  return (
    <FlexContainer fullWidthChild direction={data.reverse ? 'row-reverse' : false}>
        <motion.div variants={data.reverse ? fadeInRightvariant : fadeInLeftvariant} initial='hidden' whileInView='visible'>
            <FlexContainer align='center' gap='1rem'>
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.name}
                </Heading>
                <IconContainer color='blue' size='2rem'>
                  <Link href={data.github} target='blank'>
                    <FaGithub />
                  </Link>
                </IconContainer>
            </FlexContainer>
            <PaddingContainer top='1rem'>
                <FlexContainer gap='1.5rem'>
                    {data.tech.map((item)=>(
                        <TechStackCard key={item}>{item}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>
            <ParaText top='1.5rem' bottom='2rem'>
                {data.desc}
            </ParaText>
            {data.url ? 
            <Button href={data.url} target="blank">Visit Website</Button> : <Heading as='h4' size='h4'>Website Not Available</Heading> }
        </motion.div>
        <ProjectImgContainer justify={data.reverse ? 'flex-start' : 'flex-end'}>
            <ProjectImage src={data.img} alt={data.name}/>
        </ProjectImgContainer>

       
    </FlexContainer>
  )
}

export default Project