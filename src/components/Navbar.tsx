import { Fragment, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isQualifications, setIsQualifications] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const handleToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsTransparent(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const qualificationsSection = document.getElementById('qualifications');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      if (projectsSection) {
        if (homeSection && window.pageYOffset <= homeSection.offsetHeight) {
          setIsTransparent(true);
          setIsProjects(false);
        } else if (qualificationsSection && window.pageYOffset > qualificationsSection.offsetTop && window.pageYOffset <= projectsSection.offsetTop) {
          setIsTransparent(false);
          setIsProjects(false);
        } else if (window.pageYOffset > projectsSection.offsetTop && (contactSection ? window.pageYOffset <= contactSection.offsetTop : true)) {
          setIsTransparent(false);
          setIsProjects(true);
        } else if (contactSection && window.pageYOffset > (contactSection?.offsetTop ?? Infinity)) {
          setIsTransparent(false);
          setIsProjects(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 ${isQualifications ? "bg-gray-800" : isProjects ? "bg-gray-900" : isContact ? "bg-gray-800" : isTransparent ? "bg-opacity-50 bg-gray-800" : "bg-gray-900"
        }`}
      style={{
        background: isTransparent && !isProjects
          ? "linear-gradient(to bottom, rgba(16, 143, 141, 0.4), rgba(0, 0, 0, 0))"
          : isProjects ? "rgb(17 24 39)" : "rgb(31, 41, 55)",
      }}
    >

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white font-bold text-2xl font-mono">
            <button className="focus:outline-none" onClick={() => window.location.href = '#home'}>{`<Revan's File/>`}</button>
          </div>
          <div className="text-center hidden md:block">
            <a
              href="#qualifications"
              className="inline-block font-bold text-gray-300 hover:text-white mx-3 font-mono"
            >
              {`<Qualifications/>`}
            </a>
            <a
              href="#projects"
              className="inline-block font-bold text-gray-300 hover:text-white mx-3 font-mono"
            >
              {`<Project Showcase/>`}
            </a>
            <a
              href="#contact"
              className="inline-block font-bold text-gray-300 hover:text-white mx-3 font-mono"
            >
              {`<Contact Me/>`}
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isDrawerOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="md:hidden h-screen bg-gray-800 py-2 px-4">
          <a
            href="#qualifications"
            className="block font-bold text-gray-300 hover:text-white my-2 font-mono"
            onClick={handleToggle}
          >
            {`<Qualifications/>`}
          </a>
          <a
            href="#projects"
            className="block font-bold text-gray-300 hover:text-white my-2 font-mono"
            onClick={handleToggle}
          >
            {`<Project Showcase/>`}
          </a>
          <a
            href="#contact"
            className="block font-bold text-gray-300 hover:text-white my-2 font-mono"
            onClick={handleToggle}
          >
            {`<Contact Me/>`}
          </a>
        </div>
      </Transition>
    </nav>
  )
}


export default Navbar;