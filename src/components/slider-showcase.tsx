import { Slider, SliderClassNames, SliderProps, SliderValue, cn } from "felice";
import { useState } from "react";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const classNames: SliderClassNames = {
  track:
    "w-full h-full bg-slate-300 rounded-full absolute data-[disabled=true]:bg-slate-500 data-[disabled=true]:opacity-50",
  thumb:
    "w-5 h-5 bg-white border-slate-400 absolute rounded-full border data-[disabled=true]:cursor-not-allowed data-[disabled=true]:bg-slate-400",
  range: "w-full h-full bg-green-500 rounded-full",
};

const verticalSliderClassNames: SliderClassNames = {
  ...classNames,
  root: "min-h-[16rem] w-2",
  thumb: cn(classNames.thumb, "left-1/2 -translate-x-1/2"),
};

const horizontalSliderClasNames: SliderClassNames = {
  ...classNames,
  root: "w-full max-w-[16rem] h-2",
  thumb: cn(classNames.thumb, "top-1/2 -translate-y-1/2"),
};

const singleSliderProps: Omit<SliderProps, "ref"> = {
  labels: ["Vârstă"],
  min: 18,
  max: 100,
  defaultValue: [18],
  step: 1,
  multipleStep: 3,
};

const doubleSliderProps: Omit<SliderProps, "ref"> = {
  labels: ["Preț minim", "Preț maxim"],
  min: 50,
  max: 150,
  defaultValue: [75, 125],
  step: 5,
  multipleStep: 25,
};

export const SliderShowcase = () => {
  const [currentValue, setCurrentValue] = useState<SliderValue>([18]);

  const setCurrentValueHandler = (action: "increase" | "decrease") => {
    setCurrentValue((prev) => {
      const step = singleSliderProps.step || 1;
      const min = singleSliderProps.min || 18;
      const max = singleSliderProps.max || 100;

      if (action === "increase") {
        const nextValue = prev[0] + step;

        if (nextValue >= max) return [max];

        return [nextValue];
      }

      const nextValue = prev[0] - step;

      if (nextValue <= min) return [min];

      return [nextValue];
    });
  };

  return (
    <Showcase title="Prezentare Slider">
      <ShowcaseItem title="Slider nestilizat">
        <Slider {...doubleSliderProps} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Slider simplu <b>orizontal</b> (orientare implicită)
          </>
        }
      >
        <Slider {...singleSliderProps} classNames={horizontalSliderClasNames} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Slider simplu <b>vertical</b>
          </>
        }
      >
        <Slider
          {...singleSliderProps}
          classNames={verticalSliderClassNames}
          orientation="vertical"
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Slider dublu <b>orizontal</b> (orientare implicită)
          </>
        }
      >
        <Slider {...doubleSliderProps} classNames={horizontalSliderClasNames} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Slider dublu <b>vertical</b>
          </>
        }
      >
        <Slider
          {...doubleSliderProps}
          classNames={verticalSliderClassNames}
          orientation="vertical"
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Slider cu <b>state controlat extern</b>
          </>
        }
      >
        <div className="flex flex-col space-y-4">
          <Slider
            {...singleSliderProps}
            value={currentValue}
            onValueChange={setCurrentValue}
            classNames={horizontalSliderClasNames}
          />

          <div className="space-x-4">
            <button
              type="button"
              className="mt-4 bg-teal-900 text-white py-2 px-4 rounded"
              onClick={() => setCurrentValueHandler("decrease")}
            >
              ←
            </button>

            <button
              type="button"
              className="mt-4 bg-teal-900 text-white py-2 px-4 rounded"
              onClick={() => setCurrentValueHandler("increase")}
            >
              →
            </button>
          </div>
        </div>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Slider <b>inactiv</b>
          </>
        }
      >
        <Slider
          {...singleSliderProps}
          classNames={horizontalSliderClasNames}
          disabled
        />
      </ShowcaseItem>
    </Showcase>
  );
};
