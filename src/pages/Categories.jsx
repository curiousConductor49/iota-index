import { Link } from 'react-router'

function Categories() {
    return (
        <>
            <h1 className="text-center font-fascinate text-5xl m-10">Categories</h1>
            <p className="text-center font-zain text-3xl">Slimes are classed as one of five behaviour types.</p>
            <ul className="mt-10 text-center font-fascinate text-2xl flex flex-col gap-5">
                <li><Link to="/categories/docile" className="hover:text-red-300 hover:ease-in hover:delay-100">Docile</Link></li>
                <li><Link to="/categories/harmful" className="hover:text-red-400 hover:ease-in hover:delay-100">Harmful</Link></li>
                <li><Link to="/categories/hostile" className="hover:text-red-500 hover:ease-in hover:delay-100">Hostile</Link></li>
                <li><Link to="/categories/special" className="hover:text-red-600 hover:ease-in hover:delay-100">Special</Link></li>
            </ul>
        </>
    );
        
        
}

export default Categories;