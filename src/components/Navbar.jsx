import { useEffect, useState } from 'react'
import {PaddingContainer,FlexContainer,Container} from '../styles/Global.styled'
import { Logo, MenuIcon, NavbarContainer } from '../styles/Navbar.styled'
import { AnimatePresence } from 'framer-motion'
import {GiHamburgerMenu} from 'react-icons/gi'
import NavMenu from './layouts/NavMenu'
import { theme } from '../utils/Theme'
const Navbar = () => {
    const[openMenu,setOpenMenu] = useState(false)
    const [sticky,setSticky] =useState(false)
    useEffect(()=>{
        const onScroll = () =>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        }
        window.addEventListener('scroll',onScroll)
        return () => window.removeEventListener('scroll',onScroll)
    },[])
  return (
    <NavbarContainer bgColor={sticky ? theme.colors.primary : 'transparent'}>
        <PaddingContainer top='1.2rem' bottom='1.5rem' responsiveLeft='1rem' responsiveRight='1rem'>
            <Container>
                <FlexContainer justify='space-between' responsiveFlex>
                    <Logo>
                        Karthik
                    </Logo>
                    <MenuIcon onClick={()=>{setOpenMenu(true)}} >
                        <GiHamburgerMenu/>
                    </MenuIcon>
                </FlexContainer>
            </Container>
            <AnimatePresence>

            {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
            </AnimatePresence>
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar