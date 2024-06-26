import Aboutme from "./Components/AboutMe/Aboutme";
import ContactMe from "./Components/ContactMe";
import MyProjects from "./Components/MyProjects";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <div className="bg-[#2a2a2b] min-h-screen">
      <Navbar></Navbar>
      <div>
        <Aboutme></Aboutme>
        <MySkills></MySkills>
        <MyProjects></MyProjects>
        <div className="card">
          <h2 className="text-2xl font-bold text-white">My Projects</h2>
          <ContactMe></ContactMe>
        </div>
      </div>
    </div>
  );
};

export default App;