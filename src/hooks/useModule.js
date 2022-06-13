import { useContext } from "react";
import { moduleContext } from "../context/ModuleContext";

export const useModule = () => {
  const context = useContext(moduleContext);
  if (!context) throw new Error("There is not Module provider");
  return context;
};
