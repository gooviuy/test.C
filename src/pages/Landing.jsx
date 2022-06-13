import { TabView, TabPanel } from "primereact/tabview";
import { NestedPanel } from "../components/NestedPanel";
import { TabPanelTemplate } from "../components/TabPanelTemplate";
import { useState } from "react";
import { useModule } from "../hooks/useModule";

function Landing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { dataModule } = useModule();

  return (
    <div>
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        {Object.keys(dataModule).map((key, index) => (
          <TabPanel
            headerTemplate={() => (
              <TabPanelTemplate
                title={key}
                setActiveIndex={() => setActiveIndex(index)}
              />
            )}
          >
            <div className="nested-panel">
              <NestedPanel k={key} />
            </div>
          </TabPanel>
        ))}
      </TabView>
    </div>
  );
}

export default Landing;
