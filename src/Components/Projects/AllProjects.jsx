import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project1 from "./Project1";
import Project2 from "./Projects2";
import Project3 from "./Project3";


const AllProjects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
            easing: "ease-in-out",
        });
    }, []);
    return (
        <div id="projects" className="my-20 md:mt-20 md:mb-20 text-white max-w-screen-full">
            <div className="w-full flex justify-center items-end">
                <h1 className="text-2xl  md:text-3xl font-semibold mb-12">My Recent Projects</h1>
            </div>

            <div className="mt-10 overflow-hidden md:pb-16">
                
                <div data-aos="fade-left" className="grid md:grid-cols-2 mb-28 lg:mb-12">
                    <div className="grid md:grid-cols-2   h-[300px] max-w-[90%]  justify-self-center">

                        <Project1></Project1>
                    </div>

                </div>
                <div data-aos="fade-right" className="grid md:grid-cols-2 mb-28 lg:mb-12">
                    <div className="flex items-center justify-self-end">
                        <div className="border h-[80%] border-primary opacity-70">

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 justify-self-center h-[300px] max-w-[90%] ">
                        <Project2></Project2>
                    </div>
                </div>
                <div data-aos="fade-left" className="grid md:grid-cols-2 mb-28 lg:mb-12 ">
                    <div className="grid md:grid-cols-2  h-[300px] max-w-[90%]  justify-self-center">
                        <Project3></Project3>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
