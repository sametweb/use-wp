import React, { createContext, ReactNode } from "react";

export const WPContext = createContext({ url: "", urlWithPath: "" });

const useWp = (url: string) => {
  const value = {
    url,
    urlWithPath: url + "/wp-json/wp/v2",
  };

  const Provider = ({ children }: { children: ReactNode }) => (
    <WPContext.Provider value={value}>{children}</WPContext.Provider>
  );

  return Provider;
};

export default useWp;
