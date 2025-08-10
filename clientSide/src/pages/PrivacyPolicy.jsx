// src/components/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          🔒 Privacy Policy
        </h1>
        <p className="text-lg text-base-content mb-4 italic">
          Last Updated: August 10, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            1. Introduction
          </h2>
          <p className="text-base-content">
            Welcome to <span className="font-bold">WhereIsIt</span>, a platform
            dedicated to helping users recover lost items and connect with
            finders. We value your privacy and are committed to protecting your
            personal data. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            2. Information We Collect
          </h2>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email, photo URL, and
              contact details provided during registration or when posting
              lost/found items.
            </li>
            <li>
              <strong>Item Data:</strong> Details about lost or found items,
              including descriptions, locations, and dates, submitted via our
              forms.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with our site, such as IP addresses, browser types, and page
              views, collected via cookies and analytics tools.
            </li>
            <li>
              <strong>Authentication Data:</strong> Tokens and credentials used
              for Firebase authentication and JWT-based access to private
              routes.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-base-content">We use your data to:</p>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>
              Facilitate the posting and recovery of lost and found items.
            </li>
            <li>
              Authenticate users and secure private routes using JWT and
              Firebase.
            </li>
            <li>Improve our website’s functionality and user experience.</li>
            <li>
              Send notifications or updates related to your posts (with your
              consent).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            4. Data Sharing and Security
          </h2>
          <p className="text-base-content">
            We do not sell or share your personal data with third parties,
            except:
          </p>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>
              With your consent, to facilitate item recovery (e.g., sharing
              contact details with another user).
            </li>
            <li>To comply with legal obligations or protect our rights.</li>
          </ul>
          <p className="text-base-content mt-4">
            We use industry-standard security measures, including encrypted
            Firebase configuration keys and MongoDB credentials stored in
            environment variables, to protect your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            5. Your Rights
          </h2>
          <p className="text-base-content">You have the right to:</p>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>Access, update, or delete your personal data.</li>
            <li>Opt out of non-essential communications.</li>
            <li>Request information about how your data is used.</li>
          </ul>
          <p className="text-base-content mt-4">
            Contact us at{" "}
            <a
              href="mailto:support@whereisit.com"
              className="text-primary underline"
            >
              support@whereisit.com
            </a>{" "}
            to exercise these rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            6. Cookies and Tracking
          </h2>
          <p className="text-base-content">
            We use cookies to enhance your experience and analyze site usage.
            You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            7. Changes to This Policy
          </h2>
          <p className="text-base-content">
            We may update this Privacy Policy to reflect changes in our
            practices or legal requirements. We will notify you via email or a
            website notice.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
