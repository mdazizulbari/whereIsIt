import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Slide data array
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1544365712-91cd4904cd07?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reunite with Your Lost Treasures",
    description:
      "Report lost items and let our community help you recover them.",
    cta: { text: "Report Now", link: "/add-item" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1517363455679-b92511201efd?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discover Found Items",
    description: "Found something? Help return it to its rightful owner.",
    cta: { text: "Browse Items", link: "/lost-and-found-items" },
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Secure and Connected",
    description: "Join a trusted platform with real-time updates.",
    cta: { text: "Join Now", link: "/sign-up" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Expand Your Network",
    description: "Be part of a community dedicated to reuniting lost items.",
    cta: { text: "Sign Up", link: "/sign-up" },
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Navigation handlers
  const goToSlide = (index) => setCurrentSlide(index);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goToPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="bg-base-100 relative mt-10 flex h-[60vh] items-center justify-center sm:h-[70vh] md:h-[80vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero Image Slider"
    >
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 rounded-4xl bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 rounded-4xl bg-black/60" />{" "}
          {/* Enhanced overlay */}
          <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
            <motion.h2
              key={`title-${currentSlide}`} // Ensure unique key for animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="z-10 mb-4 text-2xl font-bold text-white sm:text-3xl md:text-5xl"
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.p
              key={`desc-${currentSlide}`} // Ensure unique key for animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="z-10 mb-6 max-w-2xl text-base text-white sm:text-lg md:text-xl"
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div
              key={`cta-${currentSlide}`} // Ensure unique key for animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* <Link
                to={slides[currentSlide].cta.link}
                className="btn btn-primary btn-wide"
                aria-label={`Call to action: ${slides[currentSlide].cta.text}`}
              >
                {slides[currentSlide].cta.text}
              </Link> */}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 transform justify-between px-4 sm:px-6">
        <button
          onClick={goToPrev}
          className="btn btn-circle btn-ghost hover:bg-primary text-white hover:text-white"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="btn btn-circle btn-ghost hover:bg-primary text-white hover:text-white"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 flex w-full justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
