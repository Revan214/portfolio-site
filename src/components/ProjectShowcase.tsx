import { FaGithub, FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus, SiPython, SiDjango, SiMysql, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si';
import bannerForgeThumbnail from '../assets/bannerForgeThumbnail.png';
import studentUi from '../assets/studentUi.jpg';
import portfolioThumbnail from '../assets/portfolioThumbnail.png';
import trollEmoji from '../assets/trollEmoji.png';

import "../App.css"

const ProjectShowcase: React.FC = () => {
    return (
        <div className="bg-gray-800 text-white py-10 px-5" id="projects">
            <div className="mx-auto max-w-max">
                <h2 className="text-4xl font-bold mb-8 mr-0 text-white text-right font-mono banner-header">Project Showcase</h2>
                {/* Banner forge */}
                <div className="max-w-5xl rounded-lg mx-auto overflow-hidden p-8 bg-gray-900 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-blue-500 to-purple-500">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 rounded-lg overflow-hidden md:ml-0">
                        <img
                            alt="Banner Forge Thumbnail"
                            className="object-cover object-center h-full w-full"
                            src={bannerForgeThumbnail}
                        />
                        <div className="p-4 bg-neutral-900 bg-gradient-to-br flex justify-start from-green-500 to-yellow-500">
                            <FaReact className="text-2xl text-blue-900 mr-4" />
                            <SiTypescript className="text-2xl bg-gray-300 text-purple-700" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 md:pl-10">
                        <div className="bg-gray-800 rounded-lg overflow-hidden p-4">
                            <h2 className="text-3xl font-semibold mb-4 font-mono">Banner Forge</h2>
                            <p className="text-lg mb-4 font-mono">
                                Banner Forge is a project that allows users to upload an image and customize it with a tint, a header, and other options. You can upload an image, you can add a tint to the image, intensify the tint, change the color of the tint, add a header, change the color of the header and change the size the image.
                            </p>
                            <div className="flex mb-4">
                                <a
                                    href="https://github.com/Revan214/banner-forge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center mr-4"
                                >
                                    <FaGithub className="mr-2" />
                                    <span>Github</span>
                                </a>
                                <a
                                    href="https://banner-forge.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <FaExternalLinkAlt className="mr-2" />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student UI */}

                <div className="max-w-5xl rounded-lg overflow-hidden p-8 mt-14 bg-gray-900 mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-green-500 to-blue-500">
                    <div className="w-full md:w-1/2 md:pr-10">
                        <div className="bg-gray-800 rounded-lg overflow-hidden p-4">
                            <h2 className="text-3xl font-semibold mb-4 font-mono">Student UI</h2>
                            <p className="text-lg mb-4 font-mono">
                                Student UI is a project where the user can enter the student's first name, middle name, last name, id, email and password, which then saves it in the mongo database, you can access the live demo, but you can only see and use the UI, if you want to use the backend you have to check out the github part and follow the steps there.
                            </p>
                            <div className="flex mb-4">
                                <a
                                    href="https://github.com/Revan214/StudentEntryUI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center mr-4"
                                >
                                    <FaGithub className="mr-2" />
                                    <span>Github</span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <FaExternalLinkAlt className="mr-2" />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 mt-10 md:mb-0 rounded-lg overflow-hidden md:ml-0">
                        <img
                            alt="Student UI"
                            className="object-cover object-center h-full w-full"
                            src={studentUi}
                        />
                        <div className="p-4 bg-neutral-900 bg-gradient-to-br from-red-500 to-pink-500 flex justify-end">
                            <FaReact className="text-2xl text-teal-800 mr-4" />
                            <SiMongodb className="text-2xl text-green-800 mr-4" />
                            <SiExpress className="text-2xl text-slate-800" />
                        </div>
                    </div>
                </div>

                {/* Portfolio */}
                <div className="max-w-5xl rounded-lg overflow-hidden p-8 mt-14 mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br mb-10 from-red-500 to-orange-500">

                    <div className="w-full md:w-1/2 mb-10 md:mb-0 rounded-lg overflow-hidden md:ml-0">
                        <img
                            alt="Portfolio Thumbnail"
                            className="object-cover object-center h-full w-full"
                            src={portfolioThumbnail}
                        />
                        <div className="p-4 bg-neutral-900 bg-gradient-to-br flex justify-start from-blue-500 to-green-500">
                            <FaReact className="text-2xl text-blue-900 mr-4" />
                            <SiTailwindcss className="text-2xl text-teal-800 mr-4" />
                            <SiTypescript className="text-2xl bg-gray-400 text-blue-800" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 md:pl-10">
                        <div className="bg-gray-800 rounded-lg overflow-hidden p-4">
                            <h2 className="text-3xl font-semibold mb-4 font-mono">Portfolio Site</h2>
                            <p className="text-lg mb-4 font-mono">
                                I think the site speaks for itself.
                                <img src={trollEmoji} alt="" className="w-28 md:w-28 text-center" />
                            </p>
                            <div className="flex mb-4">
                                <a
                                    href="https://github.com/Revan214/portfolio-site"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center mr-4"
                                >
                                    <FaGithub className="mr-2" />
                                    <span>Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
