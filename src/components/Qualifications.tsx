import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiC, SiCplusplus, SiPython, SiDjango, SiMysql, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const Qualifications: React.FC = () => {
    return (
        <section className="py-16 bg-gray-900" id="qualifications">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-sky-300 font-mono">Qualifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-sky-600 to-teal-500">
                        <div className="flex justify-center mb-4"><SiC className="text-6xl text-white" /></div>
                        <h3 className="text-2xl font-semibold mb-2 text-black font-mono">C</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-purple-700 to-cyan-500">
                        <div className="flex justify-center mb-4"><SiCplusplus className="text-6xl text-white" /></div>
                        <h3 className="text-2xl font-semibold mb-2 text-black font-mono">C++</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-red-500 to-pink-500">
                        <div className="flex justify-center mb-4"><SiPython className="text-6xl text-white" /></div>
                        <h3 className="text-2xl font-semibold mb-2 text-black font-mono">Python</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-yellow-500 to-orange-500">
                        <div className="flex justify-center mb-4"><SiDjango className=" text-6xl text-white" /></div>
                        <h3 className="text-2xl font-semibold mb-2 text-black font-mono">Django</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-red-500 to-yellow-500">
                        <div className="flex justify-center mb-4"><FaHtml5 className="text-white text-6xl" /></div>
                        <h3 className="text-2xl font-semibold text-black mb-2 font-mono">HTML</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-fuchsia-500 to-pink-600">
                        <div className="flex justify-center mb-4"><FaCss3Alt className="text-white text-6xl" /></div>
                        <h3 className="text-2xl font-semibold text-black mb-2 font-mono">CSS</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-green-500 to-teal-500">
                        <div className="flex justify-center mb-4"><FaReact className="text-white text-6xl" /></div>
                        <h3 className="text-2xl font-semibold text-black mb-2 font-mono">React</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-cyan-500 to-purple-700">
                        <div className="flex justify-center mb-4"><SiMysql className="text-white text-6xl" /></div>
                        <h3 className="text-2xl font-semibold text-black mb-2 font-mono">MySQL</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-teal-500 to-green-500">
                        <div className="flex justify-center mb-4"><SiMongodb className="text-white text-6xl" /></div>
                        <h3 className="text-2xl font-semibold text-black mb-2 font-mono">MongoDB</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-pink-500 to-red-500">
                        <div className="flex justify-center mb-4"><SiExpress className="text-white text-6xl" /></div>
                        <h3 className="text-2xl font-semibold text-black mb-2 font-mono">ExpressJS</h3>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 bg-gradient-to-br from-teal-500 to-cyan-700">
                        <div className="flex justify-center mb-4"><SiTailwindcss className="text-white text-6xl" /></div>
                        <h3 className="text-2xl font-semibold text-black mb-2 font-mono">TailwindCSS</h3>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Qualifications;