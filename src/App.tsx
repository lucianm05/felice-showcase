import { Dialog, Tabs } from "felice";
import { AccordionShowcase } from "./components/accordion-showcase";

function App() {
  return (
    <>
      <Tabs
        defaultTab={5}
        data={[
          { element: "Accordion", panel: <AccordionShowcase /> },
          { element: "Checkbox", panel: <div>Checkbox showcase</div> },
          {
            element: "Dialog",
            panel: (
              <div>
                <div>Dialog showcase</div>

                <Dialog
                  title="Update your billing information"
                  description="Your billing information is invalid. Please update it using the form below."
                  closeButton={"X"}
                >
                  {({ state, triggerProps }) => (
                    <button {...triggerProps}>
                      {!state.open ? "Update billing" : "Updating billing..."}
                    </button>
                  )}
                </Dialog>
              </div>
            ),
          },
          { element: "Progress", panel: <div>Progress showcase</div> },
          { element: "RadioGroup", panel: <div>RadioGroup showcase</div> },
          {
            element: "Non existent element",
            panel: (
              <div>
                <div>Non existent element showcase</div>
                <div>You shouldn't see this because it is disabled</div>
                <div>Maybe check the default value?</div>
              </div>
            ),
            elementProps: {
              disabled: true,
            },
          },
          { element: "Select", panel: <div>Select showcase</div> },
          { element: "Slider", panel: <div>Slider showcase</div> },
          { element: "Switch", panel: <div>Switch showcase</div> },
          { element: "Tooltip", panel: <div>Tooltip showcase</div> },
          {
            element: "Tabs",
            panel: (
              <div>
                <div>Tabs inception</div>

                <Tabs
                  data={[
                    { element: "Tab 1", panel: <div>Tab 1 </div> },
                    { element: "Tab 2", panel: <div>Tab 2 </div> },
                    { element: "Tab 3", panel: <div>Tab 3 </div> },
                  ]}
                />
              </div>
            ),
          },
        ]}
        classNames={{
          root: "flex p-8 space-x-8",
          tablist: "flex flex-col space-y-1",
          element: {
            default:
              "py-2 px-4 text-center bg-white border border-gray-300 whitespace-nowrap hover:bg-zinc-200 transition-colors rounded text-lg",
            disabled: "!bg-zinc-400 cursor-not-allowed",
            selected: "bg-zinc-200",
          },
          panel: "w-full",
        }}
        orientation="vertical"
      />
    </>
  );
}

export default App;
