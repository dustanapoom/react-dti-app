//ไฟล์นี้เป็นไฟล์หลักของโปรเจค ในการตั้งค่า Route/Re-Render Page Component ต่างๆ
import { BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Product.jsx'
import Smartphone from './pages/Smartphone.jsx'
import Tablet from './pages/Tablet.jsx'
 
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/wowwowwow" element={<Products />}/>
          <Route path="/products/smartphone" element={<Smartphone />}/>  
          <Route path="/products/tablet" element={<Tablet />}/>  
        </Routes>
      </BrowserRouter>    
    </>    
  )
}