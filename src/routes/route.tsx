import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default routers;
