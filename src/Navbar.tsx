import './Navbar.css'
import logo from './assets/logo.png'

const Navbar = () => {

    return (

        <header className="head">
            <a href="/" className="logo">
                <img src={logo} alt="Logo"/> 
            
            </a>
            <nav className="navbar">
                <a href="/"> Login </a>
                <a href="/"> Contact </a>
                <a href="/"> Sellers </a>
            </nav>
        </header>

    );

}

export default Navbar;