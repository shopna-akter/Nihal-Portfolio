import Aboutme from "./Components/AboutMe/Aboutme";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import MyProjects from "./Components/MyProjects";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <div className="bg-[#2a2a2b] min-h-screen">
      <Navbar />
      <div className="flex lg:gap-36 flex-col lg:flex-row p-5 lg:p-10">
        <div className="lg:sticky ml-24 lg:ml-8 lg:mb-0 mb-12 lg:top-20 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:w-auto">
          <Profile />
        </div>
        <div className="lg:w-auto lg:space-y-10 flex flex-col lg:flex-none items-center lg:ml-0">
          <div id="aboutme">
            <Aboutme />
          </div>
          <div id="myskills">
            <MySkills />
          </div>
          <div id="myprojects" className="card">
            <h2 className="text-2xl text-white font-bold mb-4">My Projects</h2>
            <MyProjects />
          </div>
          <div id="contactme">
            <ContactMe />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
