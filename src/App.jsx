import Contact from "./page/Contact"
import Home from "./page/Home"
import Menu from "./page/Menu"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
