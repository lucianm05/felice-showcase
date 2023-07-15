import { Checkbox, CheckboxProps } from "felice";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";
import { useState } from "react";

const classNames: CheckboxProps["classNames"] = {
  root: "flex items-center space-x-1",
  checkbox: {
    default:
      "w-6 h-6 border border-slate-400 rounded flex items-center justify-center transition-colors",
    checked: "bg-emerald-200",
    unchecked: "bg-white",
    disabled: "bg-zinc-500 text-white cursor-not-allowed",
  },
};

export const CheckboxShowcase = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Showcase title="Prezentare Checkbox">
      <ShowcaseItem
        title={
          <>
            Checkbox cu <b>indicator</b> prin <b>props</b>
          </>
        }
      >
        <Checkbox
          label="Termeni și condiții"
          indicator={({ state }) => (
            <span className="">{state.checked ? "✓" : "✗"}</span>
          )}
          classNames={classNames}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Checkbox cu <b>indicator</b> ca element copil
          </>
        }
      >
        <Checkbox label="Termeni și condiții" classNames={classNames}>
          {({ state }) => <span className="">{state.checked ? "✓" : "✗"}</span>}
        </Checkbox>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Checkbox <b>inactiv</b>
          </>
        }
      >
        <Checkbox
          label="Termeni și condiții"
          indicator={({ state }) => {
            if (state.disabled) return <span>🛇</span>;

            return <span>{state.checked ? "✓" : "✗"}</span>;
          }}
          classNames={classNames}
          disabled
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Checkbox cu <b>state</b> gestionat extern
          </>
        }
      >
        <Checkbox
          label="Termeni și condiții"
          classNames={classNames}
          checked={checked}
          onCheckedChanged={setChecked}
        >
          {({ state }) => <span className="">{state.checked ? "✓" : "✗"}</span>}
        </Checkbox>

        <button
          type="button"
          className="mt-4 bg-teal-900 text-white py-2 px-4 rounded"
          onClick={() => setChecked((prev) => !prev)}
        >
          Schimbă starea Checkbox-ului
        </button>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Checkbox cu <b>etichetă ascunsă</b>
          </>
        }
      >
        <Checkbox label="Termeni și condiții" hideLabel classNames={classNames}>
          {({ state }) => <span className="">{state.checked ? "✓" : "✗"}</span>}
        </Checkbox>
      </ShowcaseItem>
    </Showcase>
  );
};
