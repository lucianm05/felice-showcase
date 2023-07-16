import { Switch, SwitchClassNames } from "felice";
import { useState } from "react";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const classNames: SwitchClassNames = {
  root: "flex space-x-2 items-center",
  switch: {
    default:
      "h-5 w-10 border-slate-400 rounded-full border relative transition-colors",
    checked: "bg-indigo-500 ",
    unchecked: "bg-slate-100",
    disabled: "opacity-50 cursor-not-allowed !bg-slate-900",
  },
  thumb: {
    default:
      "w-4 h-4 absolute rounded-full border border-slate-600 top-1/2 -translate-y-1/2 bg-white transition-transform",
    checked: "translate-x-5",
    unchecked: "translate-x-0.5",
    disabled: "bg-slate-500",
  },
};

export const SwitchShowcase = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Showcase title="Prezentare Switch">
      <ShowcaseItem title={<>Switch nestilizat</>}>
        <Switch label="Marketing e-mails" />
      </ShowcaseItem>

      <ShowcaseItem title={<>Switch stilizat</>}>
        <Switch label="Marketing e-mails" classNames={classNames} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Switch cu <b>etichetă ascunsă</b>
          </>
        }
      >
        <Switch label="Marketing e-mails" hideLabel classNames={classNames} />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Switch cu <b>valoare implicită</b>
          </>
        }
      >
        <Switch
          label="Marketing e-mails"
          classNames={classNames}
          defaultChecked
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Switch cu <b>state controlat extern</b>
          </>
        }
      >
        <div>
          <Switch
            checked={checked}
            onCheckedChange={setChecked}
            label="Marketing e-mails"
            classNames={classNames}
          />

          <button
            type="button"
            className="mt-4 bg-teal-900 text-white py-2 px-4 rounded"
            onClick={() => setChecked((prev) => !prev)}
          >
            Schimbă starea Switch-ului
          </button>
        </div>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Switch <b>inactiv</b>
          </>
        }
      >
        <Switch label="Marketing e-mails" classNames={classNames} disabled />
      </ShowcaseItem>
    </Showcase>
  );
};
