import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-4 bg-skyblue rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 footer">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 footer-left-text">
        Developed by Sai Kiran Bandari
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 footer-contact">
        <li>
          <a href="https://github.com/saikiran-bandari" className="mr-4 hover:underline md:mr-6">
            <BsGithub className="text-sky-400 w-8 h-8 md:w-10 md:h-10" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sai-kiran-bandari-91317871/" className="mr-4 hover:underline md:mr-6">
            <BsLinkedin className="text-sky-400 w-8 h-8 md:w-10 md:h-10" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
