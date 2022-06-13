import { Button } from "primereact/button";

export const TabPanelTemplate = ({ title, setActiveIndex }) => {
  return <Button onClick={setActiveIndex} label={title} />;
};
