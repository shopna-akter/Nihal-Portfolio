
const Navbar = () => {
    const navigations = <>
        <a className="mr-2 btn bg-gradient-to-r from-purple-700 to-blue-300" href="">About Me</a>
        <a className="mr-2 btn bg-gradient-to-r from-purple-700 to-blue-300" href="">Skills</a>
        <a className="mr-2 btn bg-gradient-to-r from-purple-700 to-blue-300" href="">Projects</a>
        <a className="mr-2 btn bg-gradient-to-r from-purple-700 to-blue-300" href="">Certificates</a>
        <a className="mr-2 btn bg-gradient-to-r from-purple-700 to-blue-300" href="">Contact Me</a>
    </>
    return (
        <div>
            <nav className="navbar sticky top-0 z-50 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navigations}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navigations}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;