"use client";

import { HashRouter } from "react-router-dom";

import "./App.css";
import Router from "./components/Layouts/Router";
import { ErrorBoundary } from "react-error-boundary";
import MenuProvider from "./components/Navigation/MenuContext";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <MenuProvider>
        <HashRouter basename="/misterben">
          <Router />
        </HashRouter>
      </MenuProvider>
    </ErrorBoundary>
  );
}

export default App;
