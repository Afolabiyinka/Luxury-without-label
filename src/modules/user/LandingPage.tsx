import Collections from "./collections/Collections";
import Suggestions from "./shopping/Suggestions";
import FAQs from "./others/FAQs";
import HomePage from "./others/HomePage";

const LandingPage = () => {
  return (
    <>
      <HomePage />
      <Suggestions />
      <Collections />
      <FAQs />
    </>
  );
};

export default LandingPage;
