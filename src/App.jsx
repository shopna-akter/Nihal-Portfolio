import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Aboutme from "./Components/AboutMe/Aboutme";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import MyProjects from "./Components/MyProjects";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutmeHeight = document.getElementById('aboutme').clientHeight;
      if (window.scrollY > aboutmeHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#2a2a2b] min-h-screen relative">
      <Navbar />
      <div className="flex lg:gap-36 flex-col lg:flex-row p-5 lg:p-10">
        <div className="lg:sticky ml-4 lg:ml-8 lg:mb-0 mb-12 lg:top-20 lg:h-screen lg:flex lg:flex-col justify-center lg:w-auto">
          <Profile />
        </div>
        <div className="lg:w-auto lg:space-y-10 flex flex-col lg:flex-none items-center lg:ml-0">
          <div id="aboutme">
            <Aboutme />
          </div>
          <div id="myskills">
            <MySkills />
          </div>
          <div id="myprojects">
            <h2 className="text-2xl text-white font-bold pt-4 my-4">My Projects</h2>
            <MyProjects />
          </div>
          <div id="contactme">
            <ContactMe />
          </div>
        </div>
      </div>
      <Footer />

      {showButton && (
        <button
          onClick={() => scroll.scrollToTop()}
          className="fixed bottom-10 right-10 p-3 bg-gradient-to-br from-[#1e2024] to-[#23272b] text-[#ff014f] rounded-full shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
