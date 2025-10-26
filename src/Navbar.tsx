import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './assets/logo.png'

const Navbar = () => {

    return (

        <header className="head">
            <Link to="/" className="logo">
                <img src={logo} alt="Logo"/> 
            
            </Link>
            <nav className="navbar">
                <Link to="/"> Home </Link>
                <Link to="/Login"> Login </Link>
                <Link to="/Contact"> Contact </Link>
                <Link to="/Seller"> Sellers </Link>
            </nav>
        </header>

    );

}

export default Navbar;