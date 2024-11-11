// @ts-nocheck
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "Name":
        if (!value) {
          error = "Name is required";
        } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
          error = "Name can only contain letters, spaces, and periods.";
        }

        break;
      case "Email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email address is invalid";
        }
        break;
      case "Message":
        if (!value) {
          error = "Message is required";
        } else if (value.length < 10) {
          error = "Message must be at least 10 characters long";
        } else if (value.length > 500) {
          error = "Message must be less than 500 characters";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const error = validateField(name, value);
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const validateForm = () => {
    let errors = {};
    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key, value);
      if (error) {
        errors[key] = error;
      }
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = {
      name: formData.Name,
      email: formData.Email,
      message: formData.Message,
    };

    try {
      const response = await fetch("https://formspree.io/f/xeoqkapz", {
        method: "POST",
        body: JSON.stringify(formDataToSend),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ Name: "", Email: "", Message: "" });
      } else {
        toast.error("Error sending message.");
      }
    } catch (error) {
      toast.error("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="mx-0 mb-4">
            <input
              type="text"
              id="name"
              autoComplete="given-name"
              placeholder="Your Name"
              className={`w-full rounded-md border py-2 pl-2 pr-4 shadow-md text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-600 ${
                formErrors.Name && "border-red-500"
              }`}
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
            {formErrors.Name && (
              <p className="mt-1 text-xs text-red-900 dark:text-red-500">
                {formErrors.Name}
              </p>
            )}
          </div>
          <div className="mx-0 mb-4">
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="Your Email Address"
              className={`w-full rounded-md border py-2 pl-2 pr-4 shadow-md text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-600 ${
                formErrors.Email && "border-red-500"
              }`}
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
            {formErrors.Email && (
              <p className="mt-1 text-xs text-red-900 dark:text-red-500">
                {formErrors.Email}
              </p>
            )}
          </div>
          <div className="mx-0 mb-4">
            <textarea
              id="message"
              name="Message"
              cols={30}
              rows={5}
              placeholder="Write your message..."
              className={`w-full rounded-md border py-2 pl-2 pr-4 shadow-md text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-600 ${
                formErrors.Message && "border-red-500"
              }`}
              value={formData.Message}
              onChange={handleChange}
            ></textarea>
            {formErrors.Message && (
              <p className="mt-1 text-xs text-red-900 dark:text-red-500">
                {formErrors.Message}
              </p>
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`transition-transform duration-500 ease-in-out hover:scale-105 w-full dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 font-xl rounded-md sm:mb-0 ${
              isSubmitting && "opacity-50 cursor-not-allowed"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
