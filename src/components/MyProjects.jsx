import {
    PaddingContainer,Heading,BlueText
} from '../styles/Global.styled'
import { projects } from '../utils/Data'
import Project from './layouts/Project'
const MyProjects = () => {
  return (
    <PaddingContainer id="Projects" top='5%' bottom='5%' responsiveTop='10%' responsiveLeft='1rem' responsiveRight='1rem'>
        <Heading as="h4" size="h4">
            MY PROJECTS
        </Heading>
        <Heading as="h2" size="h2">
            What <BlueText>I have built</BlueText>
        </Heading>
        {projects.map((project)=>(
            <PaddingContainer key={project.id} top='5rem' bottom='5rem'>
                <Project data={project} />
            </PaddingContainer>
        ))}

    </PaddingContainer>
  )
}

export default MyProjects