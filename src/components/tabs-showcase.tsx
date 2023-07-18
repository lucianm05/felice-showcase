import { Tab, Tabs, TabsClassNames, cn } from "felice";
import { useState } from "react";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const data: Tab[] = [
  {
    element: "Setări cont",
    panel: (
      <div>
        <h4>Setările utilizatorului</h4>

        <form className="mt-4">
          <label className="flex flex-col">
            <span>Nume</span>
            <input
              name="name"
              defaultValue="Lucian"
              className="border border-slate-400 bg-white px-4 py-1 rounded"
            />
          </label>
        </form>
      </div>
    ),
  },
  {
    element: "Adrese salvate",
    panel: (
      <div>
        <h4>Adrese salvate</h4>
        <ol className="list-decimal list-inside mt-4">
          <li>Soseaua Colentina 21</li>
          <li>Brebu Megieșesc</li>
        </ol>
      </div>
    ),
  },
  {
    element: "Comenzile mele",
    panel: (
      <div>
        <h4>Comenzi</h4>
        <ol className="mt-4 list-decimal list-inside">
          <li>Comanda 1</li>
          <li>Comanda 2</li>
          <li>Comanda 3</li>
        </ol>
      </div>
    ),
  },
];

const classNames: TabsClassNames = {
  element: {
    default: "px-4 py-2 bg-white rounded border border-slate-400",
    selected: "!bg-slate-200",
    disabled: "opacity-50 !bg-slate-600 cursor-not-allowed",
  },
  panel: "border border-slate-400 p-4 rounded",
};

const horizontalTabsClassNames = {
  ...classNames,
  tablist: "space-x-4",
  root: "flex flex-col space-y-4",
};

const verticalTabsClassNames = {
  ...classNames,
  tablist: "flex flex-col space-y-2 w-max min-w-max",
  root: "flex flex-row space-x-4",
  panel: cn(classNames.panel, "w-full"),
};

export const TabsShowcase = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const setCurrentTabHandler = (action: "prev" | "next") => {
    setCurrentTab((prev) => {
      if (action === "prev") {
        const nextTab = prev - 1;

        if (nextTab < 0) return 2;

        return nextTab;
      }

      const nextTab = prev + 1;

      if (nextTab > 2) return 0;

      return nextTab;
    });
  };

  return (
    <Showcase title="Prezentare Tabs">
      <ShowcaseItem title={<>Tabs nestilizat</>}>
        <Tabs label="Tabs name" data={data} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs <b>orizontal</b> (orientare implicită) stilizat
          </>
        }
      >
        <Tabs
          label="Tabs name"
          data={data}
          classNames={horizontalTabsClassNames}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs <b>vertical</b> stilizat
          </>
        }
      >
        <Tabs
          label="Tabs name"
          data={data}
          orientation="vertical"
          classNames={verticalTabsClassNames}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs cu <b>valoare implicită</b>
          </>
        }
      >
        <Tabs
          label="Tabs name"
          data={data}
          classNames={horizontalTabsClassNames}
          defaultTab={1}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs cu <b>state controlat extern</b>
          </>
        }
      >
        <div className="flex flex-col space-y-4">
          <Tabs
            label="Tabs name"
            data={data}
            classNames={horizontalTabsClassNames}
            currentTab={currentTab}
            onTabChange={setCurrentTab}
          />

          <div className="space-x-4">
            <button
              type="button"
              className="mt-4 bg-teal-900 text-white py-2 px-4 rounded"
              onClick={() => setCurrentTabHandler("prev")}
            >
              ←
            </button>

            <button
              type="button"
              className="mt-4 bg-teal-900 text-white py-2 px-4 rounded"
              onClick={() => setCurrentTabHandler("next")}
            >
              →
            </button>
          </div>
        </div>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs cu elemente <b>inactive</b>
          </>
        }
      >
        <Tabs
          label="Tabs name"
          data={[
            data[0],
            data[1],
            {
              element: "Tab 3",
              panel: "Tab 3",
              elementProps: { disabled: true },
            },
            {
              element: "Tab 4",
              panel: "Tab 4",
            },
            {
              element: "Tab 5",
              panel: "Tab 5",
              elementProps: { disabled: true },
            },
          ]}
          orientation="vertical"
          classNames={verticalTabsClassNames}
        />
      </ShowcaseItem>
    </Showcase>
  );
};
