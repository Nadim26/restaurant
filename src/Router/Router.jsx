import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Portfolio from "../components/home/Portfolio";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,

    },
    {
      path: "/portfolio",
      element: <Portfolio></Portfolio>,
      
    },
  ]);
  export default router;

  
