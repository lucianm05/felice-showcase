import { Progress, ProgressChildren, ProgressClassNames } from "felice";
import { useEffect, useState } from "react";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const classNames: ProgressClassNames = {
  root: "w-full max-w-[20rem]",
  progressbar:
    "h-3 w-full max-w-[20rem] border border-slate-400 rounded-full bg-slate-100",
  indicator: "h-full bg-green-400 rounded-full",
};

const progressIndicator: ProgressChildren = ({
  indicatorProps,
  state: { percentageValue },
}) => <div {...indicatorProps} style={{ width: `${percentageValue}%` }}></div>;

export const ProgressShowcase = () => {
  const progressValues = {
    min: 25,
    max: 125,
  };
  const [currentValue, setCurrentValue] = useState(25);

  useEffect(() => {
    if (currentValue >= progressValues.max) return;

    const timeout = setTimeout(() => {
      setCurrentValue((prev) => prev + 5);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentValue]);

  return (
    <Showcase title="Prezentare Progress">
      <ShowcaseItem title={<>Progress nestilizat</>}>
        <Progress label="Preluare date" min={20} max={150} value={50} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Progress stilizat, cu <b>valori valide</b>
          </>
        }
      >
        <Progress
          label="Preluare date"
          min={0}
          max={100}
          value={25}
          classNames={classNames}
        >
          {progressIndicator}
        </Progress>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Progress stilizat, cu <b>valori invalide</b>
          </>
        }
      >
        <Progress
          label="Preluare date"
          min={0}
          max={100}
          value={125}
          classNames={classNames}
        >
          {progressIndicator}
        </Progress>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Progress stilizat, cu <b>etichetă ascunsă</b>
          </>
        }
      >
        <Progress
          label="Preluare date"
          hideLabel
          min={0}
          max={100}
          value={66}
          classNames={classNames}
        >
          {progressIndicator}
        </Progress>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Progress cu <b>state controlat extern</b>
          </>
        }
      >
        <div className="flex items-end space-x-2">
          <Progress
            label="Preluare date"
            min={progressValues.min}
            max={progressValues.max}
            value={currentValue}
            classNames={classNames}
          >
            {progressIndicator}
          </Progress>

          <div className="-mb-1">
            <span>
              {currentValue}/{progressValues.max}
            </span>
          </div>
        </div>
      </ShowcaseItem>
    </Showcase>
  );
};
