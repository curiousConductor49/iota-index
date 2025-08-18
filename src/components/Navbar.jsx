import { NavLink } from 'react-router'

function Navbar() {
    return (
        <ul className="border-b-3 border-red-400 font-sans text-2xl flex items-center gap-10 p-5">
            <li className="mr-auto"><NavLink to="/"><img src="src/assets/images/docile/Pink_Slime.png" className="h-[60px] w-[60px]"/></NavLink></li>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-400" : "text-black" }>Home</NavLink></li>
            <li><NavLink to="/categories" className={({ isActive }) => isActive ? "text-red-400" : "text-black" }>Categories</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-red-400" : "text-black" }>About</NavLink></li>
        </ul>
    );
}

export default Navbar