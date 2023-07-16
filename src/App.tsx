import { Tabs } from "felice";
import { AccordionShowcase } from "./components/accordion-showcase";
import { CheckboxShowcase } from "./components/checkbox-showcase";
import { DialogShowcase } from "./components/dialog-showcase";
import { ProgressShowcase } from "./components/progress-showcase";
import { RadioGroupShowcase } from "./components/radio-group-showcase";
import { SelectShowcase } from "./components/select-showcase";
import { SliderShowcase } from "./components/slider-showcase";
import { TabsShowcase } from "./components/tabs-showcase";
import { TooltipShowcase } from "./components/tooltip-showcase";
import { SwitchShowcase } from "./components/switch-showcase";

function App() {
  return (
    <>
      <Tabs
        data={[
          { element: "Accordion", panel: <AccordionShowcase /> },
          { element: "Checkbox", panel: <CheckboxShowcase /> },
          { element: "Dialog", panel: <DialogShowcase /> },
          { element: "Progress", panel: <ProgressShowcase /> },
          { element: "RadioGroup", panel: <RadioGroupShowcase /> },
          { element: "Select", panel: <SelectShowcase /> },
          { element: "Slider", panel: <SliderShowcase /> },
          { element: "Switch", panel: <SwitchShowcase /> },
          { element: "Tabs", panel: <TabsShowcase /> },
          { element: "Tooltip", panel: <TooltipShowcase /> },
        ]}
        classNames={{
          root: "flex p-8 space-x-8",
          tablist: "flex flex-col space-y-1",
          element: {
            default:
              "py-2 px-4 text-center bg-white border border-gray-300 whitespace-nowrap hover:bg-zinc-200 transition-colors rounded text-lg min-w-[12rem]",
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
