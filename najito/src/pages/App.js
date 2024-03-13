import { AppNavigation, AppRoutes } from "../components/Skeleton";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <AppNavigation />
    </BrowserRouter>
  );
}

export default App;
