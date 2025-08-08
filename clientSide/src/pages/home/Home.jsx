import React, { useEffect } from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import ItemsSection from "./ItemsSection";
import { useLoaderData } from "react-router";

const Home = () => {
  const items = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-20">
      <title>WhereIsIt | Home</title>
      <Hero />
      <ItemsSection items={items} />
      <HowItWorks />
      <FAQ />
    </div>
  );
};

export default Home;
