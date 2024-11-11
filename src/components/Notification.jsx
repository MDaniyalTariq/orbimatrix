import React from "react";

const Notification = ({ message, type }) => {
  const notificationStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <div
      className={`fixed top-0 right-0 m-4 p-4 rounded-md shadow-lg ${notificationStyles[type]}`}
      style={{ zIndex: 1000 }}
    >
      {message}
    </div>
  );
};

export default Notification;
