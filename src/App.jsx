import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Categories from './pages/Categories.jsx'
import Docile from './pages/Docile.jsx'
import Harmful from './pages/Harmful.jsx'
import Hostile from './pages/Hostile.jsx'
import Special from './pages/Special.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/categories">
            <Route index element={<Categories/>}/>
            <Route path="docile" element={<Docile/>}/>
            <Route path="harmful" element={<Harmful/>}/>
            <Route path="hostile" element={<Hostile/>}/>
            <Route path="special" element={<Special/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
