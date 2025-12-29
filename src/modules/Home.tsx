import Collections from "./collections/Collections";
import Suggestions from "./shopping/Suggestions";
import FAQs from "./Subpages/FAQs";
import HomePage from "./Subpages/HomePage";

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
