import ScrollToTopButton from "./components/ScrollBtn";
import RoutesConfig from "./Routes/routes";

export function App() {
  return (
    <div className="font-[Lato]">
      <RoutesConfig />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
