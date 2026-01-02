import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import FullPageLoader from "./components/loader/loader";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<FullPageLoader />}>
      <App />
    </Suspense>
  </QueryClientProvider>
);
