import { TabPanel, TabView } from "primereact/tabview";
import { RenderUsers } from "./RenderUsers";
import { TabPanelTemplate } from "../components/TabPanelTemplate";
import { useState } from "react";
import { useModule } from "../hooks/useModule";

export const NestedPanel = ({ k }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { dataModule } = useModule();
  return (
    <TabView
      activeIndex={activeIndex}
      onTabChange={(e) => setActiveIndex(e.index)}
    >
      {Object.keys(dataModule[k]).map((content, index) => (
        <TabPanel
          headerTemplate={() => (
            <TabPanelTemplate
              title={content}
              setActiveIndex={() => setActiveIndex(index)}
            />
          )}
        >
          <RenderUsers data={dataModule[k][content]} />
        </TabPanel>
      ))}
    </TabView>
  );
};
