import ScrollToTopButton from "./components/ScrollBtn";
import RoutesConfig from "./routes/routes";

export function App() {
  return (
    <div className="font-[Lato]">
      <RoutesConfig />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
