import Aos from "aos";
import { useEffect, useState } from "react";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import 'aos/dist/aos.css';
const MySkills = () => {
    const [aosType, setAosType] = useState('fade-left');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setAosType('fade-down');
            } else {
                setAosType('fade-left');
            }
        };
        Aos.init({ duration: 3000 });
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div data-aos={aosType} className="card w-full lg:w-[500px] p-8 shadow-2xl bg-[#2a2a2b]">
            <div className="card-body text-center">
                <h2 className="card-title text-2xl text-white mb-4">About My Skills</h2>
                <hr className="mb-4" />
                <h2 className="text-xl card-title text-gray-400 mb-8">Primary Skills On</h2>
                <div className="grid grid-cols-3 gap-2">
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full animate-move shadow-lg">
                        <FaHtml5 className="w-12 h-12 text-yellow-500" />
                    </div>
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full shadow-lg animate-move">
                        <SiCss3 className="w-12 h-12 text-blue-500" />
                    </div>
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full shadow-lg animate-move">
                        <FaJs className="w-12 h-12 text-yellow-400" />
                    </div>
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full shadow-lg animate-move">
                        <FaReact className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full shadow-lg animate-move">
                        <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" className="h-12 w-12" alt="" />
                    </div>
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full shadow-lg animate-move">
                        <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" className="h-12 w-12 text-[#38B2AC]" alt="" />
                    </div>
                </div>
                <h2 className="text-xl card-title text-gray-400 my-6">Secondary Skills On</h2>
                <div className="grid grid-cols-3 gap-2">
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full shadow-lg animate-move">
                        <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" className="w-12 h-12" />
                    </div>
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full shadow-lg animate-move">
                        <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" className="w-12 h-12" />
                    </div>
                    <div className="w-20 h-20 bg-[#2a2a2b] flex items-center justify-center rounded-full shadow-lg animate-move">
                        <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" className="w-12 h-12" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
