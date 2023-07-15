import { Dialog, Tabs } from "felice";
import "./App.css";

function App() {
  return (
    <>
      <Tabs
        defaultTab={5}
        data={[
          { element: "Accordion", panel: <div>Accordion showcase</div> },
          { element: "Checkbox", panel: <div>Checkbox showcase</div> },
          {
            element: "Dialog",
            panel: (
              <div>
                <div>Dialog showcase</div>

                <Dialog
                  title="Update your billing information"
                  description="Your billing information is invalid. Please update it using the form below."
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
        styles={{
          tablist: {
            display: "flex",
            flexDirection: "column",
          },
          root: {
            display: "flex",
          },
        }}
        orientation="vertical"
      />
    </>
  );
}

export default App;
