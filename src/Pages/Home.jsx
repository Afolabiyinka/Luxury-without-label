import HomePage from "./Subpages/HomePage";
import Collections from "./shopping/Collections";
import FAQs from "./Subpages/FAQs";
import Suggestions from "./shopping/Suggestions";

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
