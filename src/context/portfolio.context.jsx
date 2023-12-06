import React, { createContext, useState, useEffect, useContext } from 'react';

const NavTabContext = createContext();

export const useNavTabContext = () => useContext(NavTabContext);

export const NavTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const value = { activeTab, setActiveTab };
  return (
    <NavTabContext.Provider value={value}>{children}</NavTabContext.Provider>
  );
};
