import { useContext, useEffect, useRef, useState } from 'react';
import loginImage from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import './Login.css'
import Swal from 'sweetalert2';
import { AiOutlineGoogle } from 'react-icons/ai';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const { loginUser, googleLogin } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire("Login Successfull1");
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogoleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire("Login Successfull1");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleValidateCaptcha = event => {
        event.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }
    return (
        <div className='login_container'>
            <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto border-2 border-gray-200 px-4'>
                <div className='flex-1'>
                    <img className='w-full rounded-xl' src={loginImage} alt="" />
                </div>
                <div className='flex-1 md:ml-10 sm:w-full'>
                    <h2 className='text-xl font-bold my-4 text-center'>Login Now</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-control w-full">
                            <label className="label w-full">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name='capthca' placeholder="Type the Text" className="input input-bordered" required />
                            <button type='button' onClick={handleValidateCaptcha}
                                className='w-full bg-black text-white px-4 py-1 rounded-lg mt-3'>Validate</button>
                        </div>
                        <input disabled={disabled} className='w-full px-4 py-2 rounded-lg cursor-pointer text-white font-bold my-4 bg-[#ff3438] disabled:bg-gray-400' type="submit" value="Login Now" />
                    </form>
                    <button onClick={handleGoogoleLogin} className="bg-[#ff3438] font-bold flex items-center justify-center text-white w-full px-4 py-2 rounded-lg ">Login With Google <AiOutlineGoogle className="ml-2 text-2xl"></AiOutlineGoogle></button>
                    <p className="text-center font-semibold">Al ready have an account <Link className="text-[#ff3438] text-xl font-bold" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;