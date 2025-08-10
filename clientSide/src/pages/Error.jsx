import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10],
      transition: {
        y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-md mx-auto bg-base-100 shadow-xl rounded-lg p-8 text-center">
        <motion.div variants={iconVariants} initial="initial" animate="animate">
          <FaExclamationTriangle className="text-6xl text-warning mx-auto mb-4" />
        </motion.div>
        <h1 className="text-4xl font-bold text-primary mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-base-content mb-6">
          Oops! It looks like the page you're looking for has gone missing, much
          like a lost item. Don't worry, let's get you back on track!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn btn-soft btn-primary">
            Return to Home
          </Link>
          <Link
            to="/lost-and-found-items"
            className="btn btn-primary btn-outline"
          >
            Browse Lost & Found
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Error;
