import Navbar from "./Shared/Navbar/Navbar"
import Cards from "./components/home/Cards"
import CradsFood from "./components/home/CradsFood"
import Footer from "./components/home/Footer"
import Form from "./components/home/Form"
import Hero from "./components/home/Hero"
import Hero1 from "./components/home/Hero1"
import Hero3 from "./components/home/Hero3"
import Home from "./components/home/Home"
import Manu from "./components/home/Manu"
import Pic from "./components/home/Pic"
import Sign from "./components/home/Sign"
import Slider1 from "./components/home/Slider1"
import Slider2 from "./components/home/Slider2"
import Story from "./components/home/Story"
import Story1 from "./components/home/Story1"
import Story3 from "./components/home/Story3"



function App() {

  return (
    <>
    <Navbar></Navbar>
     <Home/>
     <Story></Story>
     <Pic></Pic>
     <Sign></Sign>
     <Hero></Hero>
     <Slider1></Slider1>
     <Story1></Story1>
   <Manu></Manu>
     <Cards></Cards>
     <Form></Form>
     <Hero3></Hero3>
     <Slider2></Slider2>
     <Hero1></Hero1>
     <Story3></Story3>
     <CradsFood></CradsFood>
     <Footer></Footer>
    </>
  )
}

export default App
