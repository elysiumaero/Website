import React, { createContext, useContext, useState, useEffect } from "react";

interface PreloaderContextType {
  showPreloader: boolean;
  hidePreloader: () => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    const preloaderShown = sessionStorage.getItem("preloader-shown");
    
    if (preloaderShown) {
      setShowPreloader(false);
    } else {
      // Mark preloader as shown after brief delay
      const timer = setTimeout(() => {
        sessionStorage.setItem("preloader-shown", "true");
        setShowPreloader(false);
      }, 3000); // 3 seconds for preloader animation

      return () => clearTimeout(timer);
    }
  }, []);

  const hidePreloader = () => {
    sessionStorage.setItem("preloader-shown", "true");
    setShowPreloader(false);
  };

  return (
    <PreloaderContext.Provider value={{ showPreloader, hidePreloader }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within PreloaderProvider");
  }
  return context;
};
