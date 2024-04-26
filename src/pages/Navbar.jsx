
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = (
        <>
          <li className="flex ">
                <NavLink to="/" className={({isActive }) =>
                    isActive ? 'text-[#a38138] font-bold border border-[#a38138]' : 'font-bold'
                }>Home</NavLink>
            </li>
            <li className="flex ">
                <NavLink to="/about" className={({isActive }) =>
                    isActive ? 'text-[#a38138] font-bold border border-[#a38138]' : 'font-bold'
                }>About</NavLink>
            </li>
          <li className="flex ">
                <NavLink to="/update" className={({isActive }) =>
                    isActive ? 'text-[#a38138] font-bold border border-[#a38138]' : 'font-bold'
                }>Update Profile</NavLink>
          </li>
          <li className="flex ">
                <NavLink to="/user" className={({isActive }) =>
                    isActive ? 'text-[#a38138] font-bold border border-[#a38138]' : 'font-bold'
                }>User Profile</NavLink>
          </li>
          
        </>
    );
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <div className="md:flex justify-center items-center gap-0">
            <svg className="w-20 h-20"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" xml:space="preserve"><path fill="#FBCF26" d="M53.535 45.876a3.498 3.498 0 1 0-6.996 0 3.499 3.499 0 1 0 6.996 0zm-9.554 13.169a3.497 3.497 0 0 0-3.494 3.5c0 1.933 1.564 3.499 3.494 3.499s3.494-1.566 3.494-3.499c0-1.934-1.564-3.5-3.494-3.5zm12.721 13.332a3.5 3.5 0 1 0 .002 7 3.5 3.5 0 0 0-.002-7zm17.59-4.243a3.493 3.493 0 0 0-3.485 3.501c0 1.934 1.56 3.5 3.485 3.5a3.493 3.493 0 0 0 3.485-3.5 3.493 3.493 0 0 0-3.485-3.501z"/><path fill="#1A2559" d="M37.474 62.546a6.503 6.503 0 0 0 6.502 6.499 6.5 6.5 0 0 0 0-13 6.5 6.5 0 0 0-6.502 6.501zm6.502-3.501a3.504 3.504 0 0 1 3.499 3.501 3.506 3.506 0 0 1-3.499 3.498 3.506 3.506 0 0 1-3.502-3.498 3.504 3.504 0 0 1 3.502-3.501zM56.702 82.377a6.501 6.501 0 1 0 0-13.002 6.501 6.501 0 0 0 0 13.002zm0-10a3.504 3.504 0 0 1 3.499 3.501 3.504 3.504 0 0 1-3.499 3.499 3.503 3.503 0 0 1-3.499-3.499 3.503 3.503 0 0 1 3.499-3.501zM80.778 71.635a6.5 6.5 0 1 0-13 .002 6.5 6.5 0 0 0 13-.002zm-10.001 0a3.506 3.506 0 0 1 3.501-3.501 3.504 3.504 0 0 1 3.499 3.501 3.506 3.506 0 0 1-3.499 3.5 3.508 3.508 0 0 1-3.501-3.5zM50.034 52.378a6.5 6.5 0 1 0 .002-13.002 6.5 6.5 0 0 0-.002 13.002zm0-10.001a3.506 3.506 0 0 1 3.501 3.501 3.504 3.504 0 0 1-3.501 3.498 3.503 3.503 0 0 1-3.499-3.498 3.505 3.505 0 0 1 3.499-3.501z"/><path fill="#1A2559" d="M89.491 56.363a5.638 5.638 0 0 0-4.144-1.788H72.56l-.57.581a4.386 4.386 0 0 1-3.118 1.29 4.383 4.383 0 0 1-3.116-1.29 4.389 4.389 0 0 1-1.292-3.119 4.384 4.384 0 0 1 1.29-3.115l.444-.419s-.003-.914-.003-2.019v-12.47c0-1.674-.67-3.227-1.888-4.373a6.08 6.08 0 0 0-4.506-1.632c-1.307.078-4.92.51-5.217.558a31.324 31.324 0 0 0-9.341 3.059l-.005.003C35.055 36.846 28.081 47.435 28.08 59.665c.002 17.396 14.102 31.498 31.5 31.5 11.439-.001 21.444-6.103 26.96-15.224l.049.032c1.374-2.106 2.321-4.432 2.996-6.741.671-2.106 1.462-6.537 1.452-8.599-.008-1.574-.47-3.127-1.546-4.27zm-2.443 10.858c-.038.139-.072.279-.112.417-.017.064-.037.129-.055.193C83.39 79.63 72.499 88.232 59.566 88.256c-15.74-.029-28.472-12.76-28.499-28.499.025-14.374 10.645-26.229 24.474-28.204.188-.027 3.231-.502 4.418-.573a3.135 3.135 0 0 1 2.356.851c.633.597.981 1.404.981 2.274 0 0-.063 12.969-.078 13.217a7.387 7.387 0 0 0-1.769 4.806 7.405 7.405 0 0 0 12.253 5.606c.165-.019.383-.043.625-.068h11.005c.75 0 1.446.301 1.96.846.519.551.78 1.272.734 2.032-.114 1.935-.389 4.276-.978 6.677z"/></svg>
           <a className="text-3xl font-semibold "> Paint<span className="text-[#a38138]">H</span>ven</a></div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-3">
        
            <Link to="/login"><a className="btn bg-[#a38138] text-white">Log In</a></Link>
          
          
          <a className="btn bg-[#a38138] text-white">Log Out</a>
        </div>
        
      </div>
    );
};

export default Navbar;