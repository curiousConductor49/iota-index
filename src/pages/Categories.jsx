import { Link } from 'react-router'

function Categories() {
    return (
        <>
            <h1 className="text-center font-sans text-5xl m-10">Categories</h1>
            <p className="text-center font-sans text-xl mb-10">Slimes are classed as one of five behaviour types.</p>
            <ul className="text-center font-sans text-2xl flex flex-col gap-5">
                <li><Link to="/categories/docile">Docile</Link></li>
                <li><Link to="/categories/harmful">Harmful</Link></li>
                <li><Link to="/categories/hostile">Hostile</Link></li>
                <li><Link to="/categories/special">Special</Link></li>
            </ul>
        </>
    );
        
        
}

export default Categories;