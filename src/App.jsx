import Header from "./components/layout/landingpage/Header"
import Aboutsection from "./components/pages/Aboutsection";
import LandingPages from "./components/pages/LandingPages"

import './index.css';


function App() {


  return (
    <div className="flex flex-col w-screen over items-center">
      < Header />
      < LandingPages />
      <Aboutsection />
      
      
      
    </div>
  )
}

export default App
