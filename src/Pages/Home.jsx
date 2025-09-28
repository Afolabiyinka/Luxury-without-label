import React from "react";
import HomePage from "./Subpages/HomePage";
import Collections from "./Subpages/Collections";
import FAQs from "./Subpages/FAQs";
import Suggestions from "./Suggestions";

const Home = () => {
  return (
    <>
      <HomePage />
      <Suggestions />
      <Collections />
      <FAQs />
    </>
  );
};

export default Home;
