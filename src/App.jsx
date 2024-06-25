import Aboutme from "./Components/AboutMe/Aboutme";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <div className="bg-[#2a2a2b] min-h-screen">
      <Navbar></Navbar>
      <Aboutme></Aboutme>
      <MySkills></MySkills>
    </div>
  );
};

export default App;