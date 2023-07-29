import './App.css';
import Nav from './components/nav';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Resume from './components/resume';
import Footer from './components/footer';
import WhatIDo from './components/whatIDo';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
  return (
<>

<BrowserRouter >
<Nav/>
<Home/>
<About/>
<WhatIDo/>
<Resume/>
<Contact/>
<Footer/>

<Routes>
<Route path='#home' element={<Home/>} smooth/>
<Route path='#about' element={<About/>}/>
<Route path='#contact' element={<Contact/>}/>
<Route path='#resume' element={<Resume/>}/>
<Route path='#skills' element={<WhatIDo/>}/>


</Routes>
</BrowserRouter>
  
</>
  );
}

export default App;
