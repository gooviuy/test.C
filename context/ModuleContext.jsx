import { createContext, useEffect, useMemo, useState } from "react";
import readFiles from "../utils/testA";

export const moduleContext = createContext();

export const ModuleProvider = ({ children }) => {
  const [dataModule, setDataModule] = useState({});

  useEffect(() => {
    const newData = readFiles;
    setDataModule(newData);
  }, []);

  const moduleValue = useMemo(() => {
    return { dataModule };
  }, [dataModule]);

  return (
    <moduleContext.Provider value={moduleValue}>
      {children}
    </moduleContext.Provider>
  );
};
