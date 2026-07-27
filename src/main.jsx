import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Stairs from "./components/common/Stairs";

import NavbarContext from "./context/navbarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <NavbarContext>
          <App />
        </NavbarContext>
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
);
