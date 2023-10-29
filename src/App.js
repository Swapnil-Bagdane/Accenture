/*eslint-disable*/
import Header from './components/Header'
import ResearchCards from './components/ResearchCards'
import DemoCarousel from './components/DemoCarousel'
import TextCarousel from './components/TextCarousel'
import Footer from './components/Footer'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <ResearchCards />
    <DemoCarousel />
    <TextCarousel />
    <Footer />
  </div>
)

export default App
