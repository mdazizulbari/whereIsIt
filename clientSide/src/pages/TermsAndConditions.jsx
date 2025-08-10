// src/components/TermsAndConditions.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
          📝 Terms and Conditions
        </h1>
        <p className="text-lg text-base-content mb-4 italic">
          Last Updated: August 10, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-base-content">
            By accessing or using <span className="font-bold">WhereIsIt</span>,
            you agree to be bound by these Terms and Conditions. If you do not
            agree, please refrain from using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            2. User Responsibilities
          </h2>
          <p className="text-base-content">As a user, you agree to:</p>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>
              Provide accurate and truthful information when posting lost or
              found items.
            </li>
            <li>
              Use the platform respectfully and avoid posting offensive or
              illegal content.
            </li>
            <li>
              Protect your account credentials and notify us of any unauthorized
              access.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-base-content">
            All content on <span className="font-bold">WhereIsIt</span>,
            including text, images, and code, is owned by us or our licensors.
            You may not reproduce or distribute our content without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            4. User-Generated Content
          </h2>
          <p className="text-base-content">
            By posting lost or found items, you grant{" "}
            <span className="font-bold">WhereIsIt</span> a non-exclusive,
            royalty-free license to use, display, and store your content to
            operate the platform. You are responsible for ensuring your content
            complies with applicable laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-base-content">
            <span className="font-bold">WhereIsIt</span> is not liable for any
            damages arising from the use of our platform, including disputes
            between users or inaccuracies in posted items. We provide the
            platform "as is" without warranties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            6. Termination
          </h2>
          <p className="text-base-content">
            We reserve the right to suspend or terminate your account if you
            violate these terms or engage in harmful behavior. You may delete
            your account at any time by contacting us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            7. Governing Law
          </h2>
          <p className="text-base-content">
            These terms are governed by the laws of [Your Country/State]. Any
            disputes will be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold   mb-4">
            8. Contact Us
          </h2>
          <p className="text-base-content">
            For questions about these Terms, contact us at{" "}
            <a
              href="mailto:support@whereisit.com"
              className="text-primary underline"
            >
              support@whereisit.com
            </a>
            .
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
