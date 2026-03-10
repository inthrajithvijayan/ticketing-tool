import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ user: '', password: '' });

    const Login = (params) => {
        console.log(loginData);
        if (loginData.user === 'admin') {
            navigate('/dashboard');
        }
    }
    return (
        <>
            <div className="min-h-screen grid grid-cols-2">
                <div className='flex items-center justify-center bg-[linear-gradient(109.6deg,rgb(0,0,0)_11.2%,rgb(11,132,145)_91.1%)]'>
                    <h1 className='font-xl text-white font-bold'>Admin Panel</h1>
                </div>
                <div className='flex items-center justify-start p-10'>
                    <form className='' onSubmit={(e) => { e.preventDefault() }}>
                        <label>Enter Username</label>
                        <input type="text" className='mt-2 border p-2 w-full' onChange={(e) => { setLoginData({ ...loginData, user: e.target.value }) }} />
                        <button type="button" className='mt-4 bg-blue-500 text-white p-2 w-full' onClick={() => Login()}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
