import { Slider, SliderProps } from "felice";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const classNames: SliderProps["classNames"] = {
  track: "w-full h-full bg-slate-300 rounded-full",
  thumb: "w-5 h-5 bg-white border-slate-400 absolute rounded-full border",
  range: "w-full h-full bg-green-500",
};

const verticalSliderClassNames: SliderProps["classNames"] = {
  ...classNames,
  root: "min-h-[15rem] w-2",
  thumb: `${classNames.thumb} left-1/2 -translate-x-1/2`,
};

const horizontalSliderClasNames: SliderProps["classNames"] = {
  ...classNames,
  root: "w-full max-w-[20rem] h-2",
  thumb: `${classNames.thumb} top-1/2 -translate-y-1/2`,
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
  min: 20,
  max: 200,
  defaultValue: [40, 180],
  step: 5,
  multipleStep: 25,
};

export const SliderShowcase = () => {
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
    </Showcase>
  );
};
