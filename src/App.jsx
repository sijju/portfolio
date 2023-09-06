import { Container, MainBody } from "./styles/Global.styled"
import { ThemeProvider } from "styled-components"
import { theme } from "./utils/Theme"
import Showcase from "./components/Showcase"
import MySkills from "./components/MySkills"
import MyProjects from "./components/MyProjects"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
 

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />
        <Container>
          <Showcase />
          <MySkills />
          <MyProjects />
          <Footer />
        </Container>
      </MainBody>
      </ThemeProvider>

    </div>
  )
}

export default App
