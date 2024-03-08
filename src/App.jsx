import './App.css'
import HeroSection from './components/Hero';
import Navbar from './components/Navbar';
const App=()=>{
  return(
    <>
    <Navbar/>
    <div className='line'></div>
    <HeroSection/>

    </>
  )

}
export default App;