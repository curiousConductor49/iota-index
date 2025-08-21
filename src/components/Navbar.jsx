import { NavLink } from 'react-router'
import pink from '../assets/images/docile/Pink_Slime.png'

function Navbar() {
    return (
        <ul className="border-b-3 border-red-400 font-fascinate text-2xl flex items-center gap-10 p-5">
            <li className="mr-auto"><NavLink to="/" className="flex flex-row items-center gap-5"><img src={pink} className="h-[60px] w-[60px]"/><span className="text-3xl text-border-red-400">Iota Index</span></NavLink></li>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-400" : "text-black" }>Home</NavLink></li>
            <li><NavLink to="/categories" className={({ isActive }) => isActive ? "text-red-400" : "text-black" }>Categories</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-red-400" : "text-black" }>About</NavLink></li>
        </ul>
    );
}

export default Navbar