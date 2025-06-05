import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/route.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        {" "}
        <RouterProvider router={routers} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
