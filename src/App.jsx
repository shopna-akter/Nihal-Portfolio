import Aboutme from "./Components/AboutMe/Aboutme";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <div className="bg-[#2a2a2b] min-h-screen">
      <Navbar></Navbar>
      <Aboutme></Aboutme>
    </div>
  );
};

export default App;