import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='#home'>Homepage</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#qualification'>Qualification</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href='#home' className="btn btn-ghost normal-case text-xl">Auvy</a>
            </div>
            <div className="navbar-end">
                <button className="flex items gap-2 text-smallTextColor font-[600] border-solid hover:text-white hover:font-[500] ease duration-300 border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40] hover:bg-smallTextColor">
                    <i className='ri-send-plane-line' ></i> Let's Talk
                </button>

            </div>
        </div>
    );
};

export default Header;