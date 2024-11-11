import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
import { Portfolios } from "../json/landingPageData";
import SubscribeFormModal from "components/SubscribeFormModal";
export default function Footer() {
  const navigate = useNavigate();
  const maxDisplayedProjects = 4;
  const handleNavigation = (id) => {
    navigate(`/project/${id}`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Team", link: "/team" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/discuss-project" },
    { name: "Projects", link: "/project" },
  ];
  const supportItems = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" },
    { name: "Disclaimer", link: "/disclaimer" },
    { name: "Sitemap", link: "https://orbimatrix.com/sitemap" },
  ];
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <BrandIcon />
            <p className="w-full text-lg text-gray-600 font-light dark:text-gray-400">
              Services You Trust Products <br />
              You Can Entrust!
            </p>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              We offer expert Web3, smart contract, AI, mobile, and development
              services using the latest technologies to help scale your
              business.
            </p>
            <a
              href="/contact"
              className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-transparent bg-gradient-heading bg-clip-text font-medium mb-7">
              Orbimatrix
            </h4>
            <ul className="text-sm transition-all duration-500">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={index !== menuItems.length - 1 ? "mb-6" : ""}
                >
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-transparent bg-gradient-heading bg-clip-text font-medium mb-7">
              Products
            </h4>
            <ul className="text-sm transition-all duration-500">
              {Portfolios.slice(0, maxDisplayedProjects).map((portfolio) => (
                <li className="mb-6" key={portfolio.id}>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    onClick={() => handleNavigation(portfolio.id)}
                  >
                    {portfolio.title}
                  </a>
                </li>
              ))}

              {Portfolios.length > maxDisplayedProjects && (
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-theme-purple hover:text-gray-200 flex items-center"
                    onClick={() => navigate("/project")}
                  >
                    <span>See All</span>
                    <FaArrowRight className="w-5 h-5 ml-2" />{" "}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-transparent bg-gradient-heading bg-clip-text font-medium mb-7 ">
              Support
            </h4>
            <ul className="text-sm  transition-all duration-500">
              {supportItems.map((item, index) => (
                <li
                  key={index}
                  className={index !== menuItems.length - 1 ? "mb-6" : ""}
                >
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-transparent bg-gradient-heading bg-clip-text font-medium mb-7">
                Subscribe
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-6 mb-7">
                Subscribe to get the latest news from us
              </p>
              <button
                onClick={toggleModal}
                className="flex items-center justify-center gap-2 border border-indigo-600 rounded-full py-3 px-6 w-fit lg:mx-0 text-sm text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50"
              >
                Subscribe
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                    stroke="#4F46E5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <SubscribeFormModal isOpen={isModalOpen} onClose={toggleModal} />
          </div>
        </div>
        <div className="pt-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © <a href="/">Orbimatrix</a> {new Date().getFullYear()}, All
              rights reserved.
            </span>

            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <a
                href="https://t.me/+LQVH8V4gvLcyYWY0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0088cc] hover:bg-[#007bb5] active:bg-[#0088cc]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </button>
              </a>
              <a
                href="https://discord.gg/p57YwA8Wpu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#5865F2] hover:bg-[#4a5cd3] active:bg-[#5865F2]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-discord"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                  </svg>
                </button>
              </a>

              <a
                href="https://x.com/StatDucks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    fill="#fff"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                      data-original="#03a9f4"
                    />
                  </svg>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/company/orbimatrix/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    fill="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                      data-original="#0077b5"
                    />
                  </svg>
                </button>
              </a>
              <a
                href="https://www.instagram.com/orbi.matrix/profilecard/?igsh=amI3amFxcDBqdHkx" // Replace with actual Telegram link
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#ea0065] hover:bg-[#ea0065d6] active:bg-[#ea0065]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    fill="#fff"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0"
                      data-original="#000000"
                    />
                    <path
                      d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"
                      data-original="#000000"
                    />
                    <path
                      d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
