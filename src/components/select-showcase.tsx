import { Select, SelectOption, SelectProps } from "felice";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";
import { useState } from "react";

const options: SelectOption[] = [
  { label: "Informatică Economică", value: "info" },
  { label: "Cibernetică", value: "cib" },
  { label: "Statistică și previziune economică", value: "stat" },
  { label: "Relații internaționale", value: "rei" },
  { label: "Marketing", value: "marketing" },
  { label: "Informatică de gestiune", value: "cig" },
  { label: "Contabilitate", value: "contab" },
];

const classNames: SelectProps["classNames"] = {
  root: "flex flex-col space-y-2",
  trigger: "w-max bg-white border border-slate-400 px-4 py-2 rounded",
  list: "bg-white border border-slate-400 rounded mt-2 min-w-[19rem] ",
  option: {
    default: "px-4 py-2 cursor-pointer transition-colors",
    active: "bg-slate-100",
    selected: "!bg-slate-200",
  },
};

const selectProps: Omit<SelectProps, "ref"> = {
  label: "Programul de studiu",
  data: options,
  placeholder: "Selectați programul de studiu",
  classNames,
};

export const SelectShowcase = () => {
  const [open, setOpen] = useState(false);

  return (
    <Showcase title="Prezentare Select">
      <ShowcaseItem title="Select nestilizat">
        <Select {...selectProps} classNames={undefined} />
      </ShowcaseItem>

      <ShowcaseItem title="Select cu structură implicită">
        <Select
          {...selectProps}
          classNames={{
            ...classNames,
            list: `${classNames.list} max-h-[10rem] overflow-y-auto`,
          }}
        />
      </ShowcaseItem>

      <ShowcaseItem title="Select cu structură definită de utilizator">
        <Select
          {...selectProps}
          renderOption={(optionProps, option) => {
            return (
              <li
                {...optionProps}
                className={`${optionProps.className} flex items-center justify-between w-full`}
              >
                <span>{option.label}</span>

                <span>{optionProps["aria-selected"] && "✓"}</span>
              </li>
            );
          }}
        />
      </ShowcaseItem>

      <ShowcaseItem title="Select cu valoare implicită">
        <Select {...selectProps} defaultValue="info" />
      </ShowcaseItem>

      <ShowcaseItem title="Select deschis în mod implicit">
        {/* <Select {...selectProps}  defaultOpen /> */}
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Select cu <b>state controlat extern</b>
          </>
        }
      >
        <button
          type="button"
          className="px-4 py-2 rounded bg-slate-400 text-white mb-4"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Închide" : "Deschide"} select
        </button>

        <Select {...selectProps} open={open} onOpenChange={setOpen} />
      </ShowcaseItem>
    </Showcase>
  );
};
