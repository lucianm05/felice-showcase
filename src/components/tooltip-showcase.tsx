import { Tooltip, TooltipProps } from "felice";
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
  return (
    <Showcase title="Prezentare Tooltip">
      <ShowcaseItem title="Tooltip nestilizat">
        <div className="grid grid-cols-4 w-full">
          <Tooltip content={tooltipContent} side="top">
            Reguli
          </Tooltip>
          <Tooltip content={tooltipContent} side="right">
            Reguli
          </Tooltip>
          <Tooltip content={tooltipContent} side="bottom">
            Reguli
          </Tooltip>
          <Tooltip content={tooltipContent} side="left">
            Reguli
          </Tooltip>
        </div>
      </ShowcaseItem>

      <ShowcaseItem title="Tooltip stilizat">
        <div className="grid grid-cols-4 w-full">
          <Tooltip content={tooltipContent} side="top" classNames={classNames}>
            Reguli
          </Tooltip>
          <Tooltip
            content={tooltipContent}
            side="right"
            classNames={classNames}
          >
            Reguli
          </Tooltip>
          <Tooltip
            content={tooltipContent}
            side="bottom"
            classNames={classNames}
          >
            Reguli
          </Tooltip>
          <Tooltip content={tooltipContent} side="left" classNames={classNames}>
            Reguli
          </Tooltip>
        </div>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Tooltip <b>deschis implicit</b>
          </>
        }
      >
        <Tooltip
          content={tooltipContent}
          side="bottom"
          classNames={classNames}
          defaultOpen
        >
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
    </Showcase>
  );
};
