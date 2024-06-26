import { Link } from "react-router-dom";

const MyProjects = () => {
    return (
        <div className="card w-full">
            <div className="card bg-[#2a2a2b] w-[500px] p-8 customShadow shadow-2xl my-10">
                <figure>
                    <img
                        src="https://prnt.sc/FHzLeqyOkel7"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                        <h2 className="card-title text-white text-2xl">PicoWorker</h2>
                    <div className="flex gap-3">
                        <a href={"https://n210ph-final.web.app"} className="text-white underline text-lg">Live Link</a>
                        <a href={"https://n210ph-final.web.app"} className="text-white underline text-lg">Client Code</a>
                        <a href={"https://n210ph-final.web.app"} className="text-white underline text-lg">Server Code</a>
                    </div>
                    <p className="text-[#a0a8b3] mb-2 text-lg font-medium">It is my first complete website. I used all of my skills to build that. Here are some feature of my Project:</p>
                    <ul>
                        <li className="text-[#a0a8b3] list-disc mb-1">This is micro task & earning platform where user is able to do some micro task & earn money</li>
                        <li className="text-[#a0a8b3] list-disc">This website have three user role. Including Worker, Taskreator, Admin</li>
                        <li className="text-[#a0a8b3] list-disc">This website have a stripe based payment system. So taskreator can buy coin[Website currency] & Worker can withdraw their earned coin</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;