import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id="skills" className="text-white w-full my-48 ">
            <h1 className="text-center text-3xl font-semibold uppercase mb-12 ">Tech stack</h1>

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className=" items-center justify-center space-x-3 grid lg:grid-cols-4 grid-cols-2 space-y-5 mx-auto gap-5 max-w-screen-lg aos-init aos-animate">
                <div className="flex items-center justify-center space-x-3">
                    <img  className="w-12" src="https://i.ibb.co/sC0YC7h/html-5.png" alt="" />
                    <h1 className="text-2xl uppercase font-bold">Html</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://i.ibb.co/KVNm4Vg/css-3.png"alt="" />
                    <h1 className="text-2xl uppercase font-bold" >CSS</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-10" src="https://i.ibb.co/qyq0dSg/js.png" alt="" />
                    <h1 className="text-2xl  font-bold">Javascript</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" />
                    <h1 className="text-2xl  font-bold">Tailwind</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://i.ibb.co/SKdr9MM/bootstrap.png" alt="" />
                    <h1 className="text-2xl  font-bold">Boostrap</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://i.ibb.co/bz9zf1k/physics.png" alt="" />
                    <h1 className="text-2xl  font-bold">React</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="" />
                    <h1 className="text-2xl  font-bold">MongoDB</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="" />
                    <h1 className="text-2xl  font-bold">Node Js</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="" />
                    <h1 className="text-2xl  font-bold">Firebase</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://i.ibb.co/qRnGKNk/github-2.png" alt="" />
                    <h1 className="text-2xl  font-bold">GitHub</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/76x76.png" alt="" />
                    <h1 className="text-2xl  font-bold">Vercel</h1>
                </div>

                <div className="flex items-center justify-center space-x-3">
                    <img className="w-12" src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" alt="" />
                    <h1 className="text-2xl uppercase font-bold">Netlify</h1>
                </div>
            </div>
        </div>
    );
};

export default Skills;