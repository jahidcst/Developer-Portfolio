import About from "../About/About";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import AllProjects from "../Projects/AllProjects";


import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div id="home">
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <AllProjects></AllProjects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;