import Collections from "./collections/Collections";
import Suggestions from "./shopping/Suggestions";
import FAQs from "./others/FAQs";
import HomePage from "./others/HomePage";

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
