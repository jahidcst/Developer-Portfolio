import Typewriter from 'typewriter-effect';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";


const Intro = () => {
   
   
    return (
        <div>
            <div  className="hero min-h-screen">
                <div className="hero-content p-none flex-col lg:flex-row gap-20">
                    <img src="https://i.ibb.co/wcwk35D/Picsart-23-06-02-14-50-12-653.jpg" className="lg:w-[650px] h-96  lg:h-[400px] lg:ml-24 rounded-lg shadow-2xl" />
                    <div className="">
                        <h1 className="text-4xl font-semibold ">Hi!  I'm Md. Jahid Hasan</h1>
                        <h1 className="lg:text-3xl text-2xl font-bold flex gap-2">I am a <span className='uppercase text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <Typewriter

                                options={{
                                    strings: ['FRONT-END DEVELOPER_','React Developer_', 'MERN STACK WEB DEVELOPER', ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></span>



                        </h1>
                        <p className="py-7 pr-36  font-medium text-lg">I have a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love for learning, keen attention to detail, and a strong commitment to my work..</p>
                        <p className='uppercase text-md mt-4'>Connect with me
                            <div className='flex gap-4 py-3 '>
                                <a className='text-3xl bg-purple-700 p-2 rounded-full hover:bg-transparent' href="https://www.linkedin.com/in/jahid-hasan-a10498280"> <FaLinkedin></FaLinkedin></a>
                                <a className="text-3xl bg-purple-700 p-2 rounded-full  hover:bg-transparent" href="https://github.com/jahidcst"><FaGithub></FaGithub></a>
                                <a className="text-3xl bg-purple-700 p-2 rounded-full  hover:bg-transparent" href="https://www.facebook.com/mjahid.hasan.3152"><FaFacebook></FaFacebook></a>
                                <a  className="text-3xl bg-purple-700 p-2 rounded-full  hover:bg-transparent" href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fjahid_hasan__06%3Figshid%3DMzRlODBiNWFlZA%253D%253D%26fbclid%3DIwAR0L86OD-cM48QnUgQ9DL607dKheX57hvbZ2EBACs5A042ZE8IygGlXfbGA&h=AT30mh9jCg90WH78N_N6lljyO6_pYRBLIt2C5M2TXcs6frpoIsmu33vWUMngLwI00AR4YfjEs9dblNVJJ3PzImx_KhPqieDz1edwRMQ0E9AatEXsYtluQITQq9I5bGItpdOybA"><FaInstagram></FaInstagram></a></div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;