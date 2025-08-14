import React from "react";
import { motion } from "framer-motion";

// Testimonial data array
const testimonialsData = [
  {
    quote:
      "I lost my phone at a concert, and WhereIsIt helped me recover it in just 24 hours! The process was seamless and secure.",
    name: "Sara Khan",
    role: "Musician",
    location: "Dhaka, Bangladesh",
    date: "October 2024",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Found a lost pet and reunited it with its owner through this platform. It’s such a rewarding experience!",
    name: "Arif Hossain",
    role: "Veterinarian",
    location: "Chittagong, Bangladesh",
    date: "November 2024",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This site made it so easy to return a lost wallet. The community here is amazing and trustworthy.",
    name: "Lamia Rahman",
    role: "Teacher",
    location: "Sylhet, Bangladesh",
    date: "September 2024",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I recovered my lost laptop thanks to WhereIsIt’s quick and intuitive interface. It’s a game-changer!",
    name: "Nadia Islam",
    role: "Software Developer",
    location: "Rajshahi, Bangladesh",
    date: "December 2024",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This platform helped me find my missing keys in just hours. The community is so supportive!",
    name: "Imran Chowdhury",
    role: "Shop Owner",
    location: "Khulna, Bangladesh",
    date: "January 2025",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I found a lost book and connected with its owner through WhereIsIt. It feels great to help!",
    name: "Fatima Begum",
    role: "Librarian",
    location: "Barisal, Bangladesh",
    date: "November 2024",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <section
      className="bg-base-100 pb-12"
      role="region"
      aria-label="User Testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-gummy mb-8 text-3xl font-bold sm:text-4xl"
        >
          What Our Community Says
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-base-200 rounded-lg p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
              role="article"
              aria-labelledby={`testimonial-${index}`}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
              />
              <p className="text-base-content mb-4 italic">
                "{testimonial.quote}"
              </p>
              <h4
                id={`testimonial-${index}`}
                className="text-primary font-semibold"
              >
                — {testimonial.name}
              </h4>
              <p className="text-base-content/80 text-sm">{testimonial.role}</p>
              <p className="text-base-content/80 text-sm">
                {testimonial.location}
              </p>
              <p className="text-base-content/60 text-sm">{testimonial.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
