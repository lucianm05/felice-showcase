import { Tab, Tabs, TabsProps } from "felice";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const data: Tab[] = [
  { element: "Tab 1", panel: <div>Tab 1 </div> },
  { element: "Tab 2", panel: <div>Tab 2 </div> },
  { element: "Tab 3", panel: <div>Tab 3 </div> },
];

const classNames: TabsProps["classNames"] = {
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
  panel: `${classNames.panel} w-full`,
};

export const TabsShowcase = () => {
  return (
    <Showcase title="Prezentare Tabs">
      <ShowcaseItem
        title={
          <>
            Tabs nestilizat <b>orizontal</b> (orientare implicită)
          </>
        }
      >
        <Tabs data={data} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs nestilizat <b>vertical</b>
          </>
        }
      >
        <Tabs data={data} orientation="vertical" />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs stilizat <b>orizontal</b> (orientare implicită)
          </>
        }
      >
        <Tabs data={data} classNames={horizontalTabsClassNames} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs stilizat <b>vertical</b>
          </>
        }
      >
        <Tabs
          data={data}
          orientation="vertical"
          classNames={verticalTabsClassNames}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tabs cu elemente <b>inactive</b>
          </>
        }
      >
        <Tabs
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

      <ShowcaseItem
        title={
          <>
            Tabs cu <b>valoare implicită</b>
          </>
        }
      >
        <Tabs data={data} classNames={horizontalTabsClassNames} defaultTab={1} />
      </ShowcaseItem>
    </Showcase>
  );
};
