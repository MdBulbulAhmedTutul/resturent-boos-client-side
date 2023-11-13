import { Link } from "react-router-dom";
import loginImage from '../../assets/others/authentication1.png';
import './Register.css'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { AiOutlineGoogle } from 'react-icons/ai';
const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire("Register Successfull1");
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGoogoleRegister = () =>{
        googleLogin()
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire("Register Successfull1");
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className='login_container'>
            <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto border-2 border-gray-200 px-4'>
                <div className='flex-1'>
                    <img className="w-full rounded-xl" src={loginImage} alt="" />
                </div>
                <div className='flex-1 md:ml-10 sm:w-full'>
                    <h2 className='text-xl font-bold my-4 text-center'>Register Now</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-control w-full">
                            <label className="label w-full">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        <input className='w-full px-4 py-2 rounded-lg cursor-pointer text-white font-bold my-4 bg-[#ff3438] disabled:bg-gray-400' type="submit" value="Login Now" />
                    </form>
                    <button onClick={handleGoogoleRegister} className="bg-[#ff3438] font-bold flex items-center justify-center text-white w-full px-4 py-2 rounded-lg ">Login With Google <AiOutlineGoogle className="ml-2 text-2xl"></AiOutlineGoogle></button>
                    <p className="text-center font-semibold">Al ready have an account <Link className="text-[#ff3438] text-xl font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;