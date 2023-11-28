// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//     </>
//   )
// }

import './App.css'
import Navigation from './components/Navigation';
import HeroSection from './components/Hero';
const App = () =>{
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
}

export default App
