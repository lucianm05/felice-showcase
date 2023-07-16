import { Tooltip, TooltipProps } from "felice";
import { useState } from "react";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const tooltipContent = (
  <div className="flex flex-col space-y-4">
    <p>Trebuie să țineți cont de următoarele reguli:</p>
    <ol className="list-decimal list-inside">
      <li>Regula 1</li>
      <li>Regula 2</li>
      <li>Regula 3</li>
    </ol>
    <p>Nerespectarea lor poate duce la încheierea contractului</p>
  </div>
);

const classNames: TooltipProps["classNames"] = {
  content: "bg-white border border-slate-400 rounded p-3 w-full max-w-[15rem]",
  trigger: "w-max px-4 py-2 bg-slate-400 rounded text-white",
};

export const TooltipShowcase = () => {
  const [open, setOpen] = useState(false);

  return (
    <Showcase title="Prezentare Tooltip" className="min-h-[200vh]">
      <ShowcaseItem title="Tooltip nestilizat">
        <Tooltip content={tooltipContent} side="bottom">
          Reguli
        </Tooltip>
      </ShowcaseItem>

      <ShowcaseItem title="Tooltip stilizat">
        <Tooltip content={tooltipContent} side="bottom" classNames={classNames}>
          Reguli
        </Tooltip>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tooltip <b>cu offset</b> față de Trigger
          </>
        }
      >
        <Tooltip
          content={tooltipContent}
          side="bottom"
          classNames={classNames}
          sideOffset={16}
        >
          Reguli
        </Tooltip>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tooltip <b>fără delay</b>
          </>
        }
      >
        <Tooltip
          content={tooltipContent}
          side="bottom"
          classNames={classNames}
          delay={0}
        >
          Reguli
        </Tooltip>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tooltip în cele <b>patru poziționări</b>
          </>
        }
      >
        <div className="grid grid-cols-4 w-full">
          <Tooltip
            side="top"
            content={<p>Conținut în partea de sus</p>}
            classNames={classNames}
            sideOffset={8}
          >
            Sus
          </Tooltip>

          <Tooltip
            side="bottom"
            content={<p>Conținut în partea de jos</p>}
            classNames={classNames}
            sideOffset={8}
          >
            Jos
          </Tooltip>

          <Tooltip
            side="right"
            content={<p>Conținut în partea dreaptă</p>}
            classNames={classNames}
            sideOffset={8}
          >
            Dreapta
          </Tooltip>

          <Tooltip
            side="left"
            content={<p>Conținut în partea stângă</p>}
            classNames={classNames}
            sideOffset={8}
          >
            Stânga
          </Tooltip>
        </div>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tooltip cu <b>state controlat extern</b>
          </>
        }
      >
        <div className="flex flex-col space-y-4">
          <Tooltip
            side="top"
            content={tooltipContent}
            classNames={classNames}
            sideOffset={8}
            open={open}
            onOpenChange={setOpen}
          >
            Reguli
          </Tooltip>

          <button
            type="button"
            className="px-4 py-2 rounded text-white w-max bg-teal-900"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "Închide Tooltip" : "Deschide Tooltip"}
          </button>
        </div>
      </ShowcaseItem>
    </Showcase>
  );
};
