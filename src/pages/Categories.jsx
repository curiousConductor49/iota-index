import { Link } from 'react-router'

function Categories() {
    return (
        <>
            <h1>Categories</h1>
            <ul>
                <li><Link to="/categories/docile">Docile</Link></li>
                <li><Link to="/categories/harmful">Harmful</Link></li>
                <li><Link to="/categories/hostile">Hostile</Link></li>
                <li><Link to="/categories/special">Special</Link></li>
            </ul>
        </>
    );
        
        
}

export default Categories;