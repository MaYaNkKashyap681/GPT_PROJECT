import './App.css'
import {Article, Brand, CTA, Navbar} from './components/index'
import {Footer, Blog, Possibility, Features, WhatGP3, Headers} from './container/index'

function App() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
    <Navbar/>
    <Headers/>
    </div>
   <Brand/>
   <WhatGP3/>
   <Features/>
   <Possibility/>
   <CTA/>
   <Blog/>
   <Footer/>
    </div>
  )
}

export default App
