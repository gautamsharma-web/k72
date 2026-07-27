import React, { useState } from "react";
import { createContext } from "react";
export const NavContext = createContext();
const NavbarContext = ({ children }) => {
  const [NavOpen, SetNavOpen] = useState(false);

  return (
    <NavContext.Provider value={[NavOpen, SetNavOpen]}>
      {children}
    </NavContext.Provider>
  );
};

export default NavbarContext;
