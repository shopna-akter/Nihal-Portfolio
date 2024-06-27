
const Profile = () => {
    return (
        <div>
            <h2 className="text-5xl mb-4 font-extrabold text-white">Hi, I’m <span className="text-[#ff014f]">
                Nihal</span> <br />
                Front-End Developer.</h2>
            <p className="text-lg text-[#a0a8b3] mb-8">I can provide you a responsive web <br /> application using react with best UI UX</p>
            <div className="flex gap-4">
                <a href="https://drive.google.com/file/d/1cwG89Mb11Ezv4u5gbmIrrlsspn-FWk9i/view" className="bg-gradient-to-br from-[#1e2024] to-[#23272b] text-[#ff014f] font-bold py-3 px-8  focus:outline-none focus:shadow-outline transition duration-300  rounded ease-in-out transform hover:scale-105 flex items-center justify-center" target="_blank" rel="noopener noreferrer">View Resume</a>
                <button className="bg-gradient-to-br from-[#1e2024] to-[#23272b] text-[#ff014f] font-bold py-3 px-8  focus:outline-none focus:shadow-outline transition duration-300  rounded ease-in-out transform hover:scale-105 flex items-center justify-center">Hire Me</button>
            </div>
        </div>
    );
};

export default Profile;