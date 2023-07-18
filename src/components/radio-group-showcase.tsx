import { RadioButton, RadioGroup, RadioGroupClassNames } from "felice";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const radioButtons = [
  { label: "Ciocolată", value: "chocolate" },
  { label: "Vanilie", value: "vanilla" },
  { label: "Căpșuni", value: "strawberry" },
];

const allRadioButtons = [
  { label: "Afine", value: "blueberry", disabled: true },
  radioButtons[0],
  radioButtons[1],
  { label: "Caramel", value: "caramel", disabled: true },
  radioButtons[2],
  { label: "Zmeură", value: "raspberry", disabled: true },
];

const classNames: RadioGroupClassNames = {
  radioButton: {
    root: {
      default: "flex space-x-1 items-center",
      disabled: "opacity-50",
    },
    button: {
      default: "w-5 h-5 rounded-full border border-slate-400",
      checked: "bg-slate-400",
      unchecked: "bg-white",
      disabled: "bg-slate-900 cursor-not-allowed",
    },
  },
};

export const RadioGroupShowcase = () => {
  return (
    <Showcase title="Prezentare RadioGroup">
      <ShowcaseItem title={<>RadioGroup nestilizat</>}>
        <RadioGroup
          orientation="horizontal"
          label="Topping extra"
          data={radioButtons}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            RadioGroup <b>orizontal</b> (orientare implicită) stilizat
          </>
        }
      >
        <RadioGroup
          orientation="horizontal"
          label="Topping extra"
          data={radioButtons}
          classNames={{
            ...classNames,
            root: "flex flex-row space-x-8",
          }}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            RadioGroup <b>vertical</b> stilizat
          </>
        }
      >
        <RadioGroup
          orientation="vertical"
          label="Topping extra"
          data={radioButtons}
          classNames={{
            ...classNames,
            root: "flex flex-col space-y-4",
          }}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            RadioGroup cu structură <b>definită de utilizator</b>
          </>
        }
      >
        <RadioGroup
          orientation="vertical"
          label="Topping extra"
          classNames={{ root: "flex flex-col space-y-4" }}
          data={allRadioButtons.map<RadioButton>((btn) => ({
            ...btn,
            render: ({ buttonProps, descriptionProps, labelProps, state }) => {
              return (
                <button
                  {...buttonProps}
                  className={`flex flex-col p-5 border rounded-lg border-slate-400 w-max  ${
                    state.checked ? "bg-gray-300" : "bg-white"
                  } ${
                    state.disabled
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <label {...labelProps} className="text-xl font-medium">
                    {btn.label}
                  </label>
                  <p {...descriptionProps}>Topping de {btn.label.toLowerCase()}</p>
                </button>
              );
            },
          }))}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            RadioGroup cu elemente <b>inactive</b>
          </>
        }
      >
        <RadioGroup
          orientation="horizontal"
          label="Topping extra"
          data={allRadioButtons}
          classNames={{
            ...classNames,
            root: "flex flex-row [&>*]:mr-8 [&>*]:mt-2 -mt-2 flex-wrap",
          }}
        />

        <RadioGroup
          orientation="vertical"
          label="Topping extra"
          data={allRadioButtons}
          classNames={{
            ...classNames,
            root: "flex flex-col space-y-4 mt-12",
          }}
        />
      </ShowcaseItem>
    </Showcase>
  );
};
