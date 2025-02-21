import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import BoothHome from "./pages/BoothHome";
import AboutUs from './pages/AboutUs'
import List from './pages/List'
import Search from './pages/Search'
import Wiki from './pages/Wiki'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booth" element={<BoothHome />} /> 
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/list" element={<List />} />
      <Route path="search" element={<Search />} />
      <Route path="/wiki" >
        <Route path=":title" element={<Wiki />} />
      </Route>
    </Routes>
  )
}

export default App
