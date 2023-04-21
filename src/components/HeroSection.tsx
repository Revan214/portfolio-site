import { Fragment } from 'react';
import backgroundImage from '../assets/space3.jpg';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-screen pb-10 sm:pt-28 md:pt-32 lg:pt-36 pt-24 pr-5"
      id='home'
      style={{
        minHeight: 'calc(100vh - 4rem)', // subtracting the height of the navbar
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 100, 0.5), rgba(0, 0, 0, 1)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }}
    >
      <div className="container mx-auto px-4 flex justify-center items-center h-full relative z-10">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="sm:text-6xl text-4xl font-bold text-white text-left sm:text-center mb-8 font-mono">{`<Revan's File/>`}</h1>
          <p className="text-white text-2xl text-left sm:text-center text-opacity-75 font-mono">{`<>Hi there, my name is Revan and I'm a coder who specializes in web development. I have a strong foundation in multiple programming languages and frameworks, which allows me to create high-quality websites that are both functional and aesthetically pleasing. I'm extremely passionate about my work, and I always strive to stay on top of the latest industry trends and best practices to ensure that I'm delivering the best possible results for my clients.</>`}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
