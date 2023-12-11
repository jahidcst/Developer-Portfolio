import { Link } from "react-router-dom";



const Navber = () => {



    const navOptions = <>

        <div className="flex gap-8">
            <a  className="text-xl font-semibold hover:text-purple-700" href="#home">Home</a>
            <a className="text-xl font-semibold hover:text-purple-700" href="#about">About</a>
            <a className="text-xl font-semibold hover:text-purple-700" href="#skills">Skills</a>
            <a className="text-xl font-semibold hover:text-purple-700" href="#projects">Projects</a>
            <a className="text-xl font-semibold border hover:text-teal-300 border-teal-400 bg-outline px-2 rounded-xl" href="#contact">Hire Me</a>

        </div>



    </>
    return (
        <>
            <div className="navbar max-w-screen-full z-10   text-white  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <Link><img className="w-12 ml-5" src='' alt="" /></Link>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content z[1] mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className=" uppercase text-transparent text-4xl text-bg-clip font-semibold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Portfolio.</Link>
                </div>
                <div className="navbar-end mr-20 hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>



        </>
    );
};

export default Navber;