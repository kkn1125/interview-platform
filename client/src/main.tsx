import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router.tsx";
import LoginProvider from "./providers/LoginProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <React.StrictMode> */}
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LoginProvider>
    </QueryClientProvider>
    {/* </React.StrictMode> */}
  </>
);
