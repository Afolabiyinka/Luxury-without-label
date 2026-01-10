import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import ProgressBar from "./components/progress-bar/progress-bar";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<ProgressBar />}>
      <App />
    </Suspense>
  </QueryClientProvider>
);
