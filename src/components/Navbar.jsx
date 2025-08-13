import { Link } from 'react-router'

function Navbar() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/categories">Categories</Link></li>
        </ul>
    );
}

export default Navbar