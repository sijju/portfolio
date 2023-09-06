
import { PaddingContainer,FlexContainer } from "../../styles/Global.styled"
import {AiOutlineClose} from 'react-icons/ai'
import { MenuIcon, MenuItem, NavMenuContainer } from "../../styles/Navbar.styled"
import { navLinks } from "../../utils/Data"
import { motion } from "framer-motion"
import { slideInLeft } from "../../utils/Variants"
// eslint-disable-next-line react/prop-types
const NavMenu = ({setOpenMenu}) => {
  return (
    <NavMenuContainer as={motion.div} variants={slideInLeft} initial='hidden' animate='visible' exit='exit'>
        <PaddingContainer left='5%' right='5%' top='2rem'>
            <FlexContainer justify='flex-end' responsiveFlex>
                <MenuIcon onClick={()=>setOpenMenu(false)}>
                    <AiOutlineClose/>
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>
        <PaddingContainer top='8%'>
            <FlexContainer direction='column' align='center' responsiveFlex>
                {navLinks.map((navItem) =>(
                    <MenuItem  key={navItem.id} href={`#${navItem.href}`} onClick={()=>setOpenMenu(false)}>{navItem.name}</MenuItem>
                ))}
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu