import React from "react";
import AppRouter from "./AppRouter";
import { ModuleProvider } from "../context/ModuleContext";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // primeng theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons

function App() {
  return (
    <ModuleProvider>
      <AppRouter />
    </ModuleProvider>
  );
}

export default App;
