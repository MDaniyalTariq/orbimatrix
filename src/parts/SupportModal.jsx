import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function SupportModal() {
  const PrivacyPolicy = () => (
    <div className="bg-gray-100 p-4 rounded-lg ">
      <h4 className="text-xl font-semibold">Privacy Policy Details</h4>
      <p>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy outlines the types of data we collect and how
        we use it.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy outlines the types of data we collect and how
        we use it.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy outlines the types of data we collect and how
        we use it.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy outlines the types of data we collect and how
        we use it.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy outlines the types of data we collect and how
        we use it.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy outlines the types of data we collect and how
        we use it.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy outlines the types of data we collect and how
        we use it.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal
        data. This Privacy Policy outlines the types of data we collect and how
        we use it.
      </p>
    </div>
  );

  const TermsOfService = () => (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h4 className="text-xl font-semibold">Terms of Service Details</h4>
      <p>
        These terms govern the use of our services. By accessing our platform,
        you agree to adhere to these terms and conditions.
      </p>
    </div>
  );

  const Disclaimer = () => (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h4 className="text-xl font-semibold">Disclaimer Details</h4>
      <p>
        All content on this platform is provided for informational purposes only
        and does not constitute professional advice.
      </p>
    </div>
  );

  const supportItems = [
    {
      name: "Privacy Policy",
      content: <PrivacyPolicy />,
    },
    {
      name: "Terms of Service",
      content: <TermsOfService />,
    },
    {
      name: "Disclaimer",
      content: <Disclaimer />,
    },
  ];

  const lostItems = [
    {
      name: "Sitemap",
      link: "https://orbimatrix.com/sitemap.xml",
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    body: "",
    isAcceptDecline: false,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [userAccepted, setUserAccepted] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (!hasVisitedBefore) {
      localStorage.setItem("hasVisitedBefore", "true");
      setOpenModal(true);
      updateModalContent(supportItems[currentStep], true);
    } else {
      setIsFirstVisit(false);
    }
  }, [currentStep]);

  const updateModalContent = (item, showProgress) => {
    setModalContent({
      title: item.name,
      body: item.content,
      isAcceptDecline: showProgress,
    });
  };

  const progressPercentage = ((currentStep + 1) / supportItems.length) * 100;

  const handleAccept = () => {
    localStorage.setItem("userAcceptedTerms", "true");
    setUserAccepted(true);

    if (currentStep < supportItems.length - 1) {
      setCurrentStep(currentStep + 1);
      updateModalContent(supportItems[currentStep + 1], true);
    } else {
      setOpenModal(false);
    }
  };

  const handleDecline = () => {
    setUserAccepted(false);
    setOpenModal(false);
  };

  const handleNextStep = () => {
    if (currentStep < supportItems.length - 1) {
      setCurrentStep(currentStep + 1);
      updateModalContent(supportItems[currentStep + 1], true);
    } else {
      setOpenModal(false);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      updateModalContent(supportItems[currentStep - 1], true);
    }
  };

  const handleLinkClick = (item) => {
    setIsLinkClicked(true);
    setModalContent({
      title: item.name,
      body: item.content,
      isAcceptDecline: false,
    });
    setOpenModal(true);
  };

  return (
    <>
      <ul className="text-sm transition-all duration-500">
        {supportItems.map((item, index) => (
          <li key={index} className="mb-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item);
              }}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {item.name}
            </a>
          </li>
        ))}
        {!isFirstVisit &&
          lostItems.map((item, index) => (
            <li key={index} className="mb-6">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                {item.name}
              </a>
            </li>
          ))}
      </ul>
      {openModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50"></div>
          <motion.div
            id="default-modal"
            tabIndex={-1}
            aria-hidden={!openModal}
            className="fixed top-0 left-1/2 transform -translate-x-1/2 flex items-start justify-center z-50 w-full h-screen md:h-auto max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {modalContent.title}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setOpenModal(false)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5">
                  {modalContent.isAcceptDecline && (
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <motion.div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${progressPercentage}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      ></motion.div>
                    </div>
                  )}
                </div>

                <div className="modal-scrollbar p-4 md:p-5 space-y-4 max-h-[calc(100vh-15rem)] overflow-y-auto">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {modalContent.body}
                  </p>
                </div>

                {modalContent.isAcceptDecline ? (
                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      onClick={handleAccept}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      I accept
                    </button>
                    <button
                      onClick={handleDecline}
                      type="button"
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Decline
                    </button>
                  </div>
                ) : (
                  <div className="p-4 flex justify-between">
                    <button
                      onClick={handlePrevStep}
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
