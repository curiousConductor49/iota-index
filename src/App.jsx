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
      {/* Call navbar component so it's present across all pages */}
      <Navbar/>
      {/* Wrap route elements within the routes parent, which controls which page is rendered based on whether the url is matched */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/categories">
            {/* Categories page has child routes whose urls are built based on their parent */}
            <Route index element={<Categories/>}/>
            <Route path="docile" element={<Docile/>}/>
            <Route path="harmful" element={<Harmful/>}/>
            <Route path="hostile" element={<Hostile/>}/>
            <Route path="special" element={<Special/>}/>
        </Route>
        {/* The catch-all path redirects user when the url matches anything that hasn't been defined as a route above */}
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
