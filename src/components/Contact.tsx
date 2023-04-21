import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-2xl text-green-400 font-semibold tracking-wide uppercase">
            Contact Me
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-mono">
            Let's get in touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 sm:mx-auto font-mono">
            Have a question or want to work together? I'm always up for a challenge.
            Feel free to reach out to me and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-name">
                  Name
                </label>
                <input className="font-mono appearance-none block w-full bg-gray-700 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600" id="grid-name" type="text" placeholder="Jane Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input className="font-mono appearance-none block w-full bg-gray-700 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600" id="grid-email" type="email" placeholder="janedoe@example.com" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea className="font-mono appearance-none block w-full bg-gray-700 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600" id="grid-message" placeholder="Your message"></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="shadow active:from-teal-600 active:to-green-700 hover:from-teal-600 hover:to-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded bg-gradient-to-br from-teal-600 to-green-500" type="button">
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
