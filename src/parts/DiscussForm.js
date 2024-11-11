import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  projectIdea: Yup.string().required("Project idea is required"),
});

const DiscussionForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Form submitted successfully!");
      resetForm();
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto pb-8 mb-12 px-4 ">
      <div className="max-w-3xl mb-6 text-center sm:text-center md:mx-auto md:mb-12">
        <p className="text-base font-semibold tracking-wide text-gray-800 uppercase dark:text-white">
          We're Here to Help
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-transparent font-heading sm:text-5xl bg-gradient-heading bg-clip-text">
          Let's Bring Your Vision to Life!
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-800 dark:text-white">
          Fill out the form below to share your project details with us. Our
          team is eager to understand your goals and provide the best solution
          tailored to your needs. Let's start building something amazing
          together!
        </p>
      </div>

      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          phone: "",
          projectIdea: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const formspreeUrl = "https://formspree.io/f/xvgorkvl";

          fetch(formspreeUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((response) => response.json())
            .then(() => {
              toast.success("Form submitted successfully!");
              resetForm();
            })
            .catch(() => {
              toast.error("Something went wrong, please try again.");
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-white font-semibold mb-2"
                >
                  Your Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-700 dark:text-white font-semibold mb-2"
                >
                  Your Company
                </label>
                <Field
                  id="company"
                  name="company"
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your company name"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-white font-semibold mb-2"
                >
                  Your Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 dark:text-white font-semibold mb-2"
                >
                  Your Contact Number
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="projectIdea"
                className="block text-gray-700 dark:text-white font-semibold mb-2"
              >
                Project Idea
              </label>
              <Field
                id="projectIdea"
                name="projectIdea"
                as="textarea"
                rows="4"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Describe your project idea"
              />
              <ErrorMessage
                name="projectIdea"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </div>
  );
};

export default DiscussionForm;
