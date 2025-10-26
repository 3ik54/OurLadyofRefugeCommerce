import './Login.css'
import Authentication from '../src/Auth.tsx';
import pfpicon from '../src/assets/pfpicon.png';

export default function Login () {
    return (
        <>
        <div className='login-container'> 
            <h1>Seller Login</h1>
            <img src={pfpicon} alt="Profile Icon" className="pfp-icon"/>
        </div>
        <Authentication/>
        </>
    )
}