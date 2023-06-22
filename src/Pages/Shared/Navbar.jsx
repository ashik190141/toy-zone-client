import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import profileImage from '../../Images/login/profile.png';
import loginImage from '../../Images/logo/logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();


    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.log(error);
        })
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const navItem = <>
        <li className="font-bold text-2xl"><Link to="/">Home</Link></li>
        <li className="font-bold text-2xl"><Link to="/allToy">All Toy</Link></li>
        {
            user?.email ? <div className="flex">
                <li className="font-bold text-2xl"><Link to="/myToy">My Toy</Link></li>
                <li className="font-bold text-2xl"><Link to="/addToy">Add A Toy</Link></li>
            </div>: ''
        }
        <li className="font-bold text-2xl"><Link to="/blog">Blog</Link></li>
    </>
    return (
        <div className="navbar h-20 mb-4 bg-pink-300">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItem}
                </ul>
                </div>
                <div className="flex gap-5 items-center">
                    <img src={loginImage} alt="" className="w-14" />
                    <p className="font-bold text-2xl">Toy <span className="font-bold text-orange-500">Zone</span></p>
                </div>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className='flex md:gap-5 gap-1'>
                        {
                        user?.email ?  
                            <div className='flex'>
                                {
                                    user.photoURL ?
                                        <div className='flex md:gap-4 gap-1'>
                                             <span>
                                                {
                                                    user.displayName ? 
                                                        <div className='text-black'>
                                                            { isHovering && <span>{user.displayName}</span>}
                                                        </div> :
                                                        <div>
                                                            { isHovering && <span>{}</span>}
                                                        </div>
                                                }
                                            </span>
                                            <img src={user.photoURL}  onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut} alt="" className={`md:mr-10 rounded-xl w-12`}/>
                                        </div> :
                                        <div className='flex md:gap-4 gap-1'>
                                             <span>
                                                {
                                                    user.displayName ? 
                                                        <div className='text-black'>
                                                            { isHovering && <span>{user.displayName}</span>}
                                                        </div> :
                                                        <div>
                                                            { isHovering && <span>{}</span>}
                                                        </div>
                                                }
                                            </span>
                                            <img src={profileImage}  onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut} alt="" className={`md:mr-10 rounded-xl w-12`}/>
                                        </div>    
                                }
                                <button onClick={handleLogout} className="btn btn-primary text-white md:mr-10 mr-1 text-xl">Log Out</button>
                            </div> :
                            <Link to="/login"><button className="btn btn-primary text-white md:mr-10 text-xl">Login</button></Link>
                        }
                    </div>
            </div>
        </div>
    );
};

export default Navbar;