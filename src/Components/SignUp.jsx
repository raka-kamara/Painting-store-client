import { useState } from "react";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";

const SignUp = () => {
    const {createUser, updateUserProfile} = useAuth();
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password, name, photo);

        if (!name || !email || !password || !photo) {
            setError("Please fill out all fields");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError("Password must contain at least one uppercase and one lowercase letter");
            return;
        }
        setError('');
       
        

        createUser(email, password)
            .then(result =>{
                updateUserProfile({displayName:name, photoUrl:photo})
                console.log(result.user);
                toast.success("Registration successful!");
         })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 from-10% via-yellow-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">Sign up now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                            <span onClick={() => setShowPass(!showPass)}>
                                {showPass ? <FaRegEyeSlash /> : <LuEye />}
                            </span>
                        </label>
                        <input type={showPass ? "text" : "password"} required name="password" placeholder="Password" className="input input-bordered" />
                    </div>
                        {error && <small className="text-red-600">{error}</small>}
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-blue-500 from-10% via-yellow-500 via-30% to-emerald-500">Sign Up</button>
                        </div>
                    </form>
                    <p className="text-center my-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;