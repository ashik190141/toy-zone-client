import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../TitleHook/TitleHook';

const SignIn = () => {
    useTitle('SignIn');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signIn, loginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        setSuccess('');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess("Login Successful");
                navigate(from , {replace:true});
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const googleLoginHandler = () => {
        setError('');
        setSuccess('');
        loginWithGoogle()
        .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess("Login Successful");
                navigate(from , {replace:true});
            })
            .catch(error => {
                setError(error.message);
        })
    }
    return (
        <div>
            <div className="hero p-28 bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold mb-5">Please Login !!</h1>
                        <p className='font-bold text-2xl text- text-green-500'>{success}</p>
                        <p className='font-bold text-2xl text- text-red-500'>{error}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    
                        <form onSubmit={loginHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                    <input required type="email" placeholder="Email"
                                    name='email'   className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                        <input type="password" required placeholder="Password"
                                        name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className='text-2xl font-bold text-center mb-6'>OR</p>
                        <button onClick={googleLoginHandler} className='ml-6 mr-6 btn btn-outline'><FaGoogle className='me-2' /> Login With Google</button>
                        
                        <p className='ml-6 mt-2'>
                            <span className='mr-8'>New to ToyZone?</span>
                            <Link to="/register">
                                <button className="btn btn-active btn-link mb-3">Please Register</button>
                            </Link>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;