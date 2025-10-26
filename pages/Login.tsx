import './Login.css'
import Authentication from '../src/Auth.tsx';

export default function Login () {
    return (
        <>
        <div className='login-container'> 
            <h1>Login</h1>
        </div>
        <Authentication/>
        </>
    )
}