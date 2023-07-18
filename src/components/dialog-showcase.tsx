import { Dialog, DialogClassNames, RadioGroup } from "felice";
import { useState } from "react";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const classNames: DialogClassNames = {
  overlay: "fixed top-0 left-0 w-full h-full bg-black/25 cursor-default",
  root: "bg-white w-full max-w-[37.5rem] fixed z-[1] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 py-4 px-6 rounded-lg shadow",
  title: "text-2xl font-medium",
  description: "my-4",
  header: "flex items-center justify-between",
  closeButton: "text-2xl",
  trigger:
    "py-2 px-4 rounded bg-slate-400 text-white hover:bg-slate-500 focus:bg-slate-600 transition-colors data-[disabled=true]:bg-slate-700 data-[disabled=true]:text-slate-400 data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed",
};

export const DialogShowcase = () => {
  const [open, setOpen] = useState(false);

  return (
    <Showcase title="Prezentare Dialog">
      <ShowcaseItem title="Dialog nestilizat">
        <Dialog
          title="Actualizați informațiile de plată"
          description="Informațiile despre modalitatea de plată nu mai sunt valabile. Sunteți rugat să le actualizați pentru a continua operațiunea."
        >
          Actualizați informațiile
        </Dialog>
      </ShowcaseItem>

      <ShowcaseItem title="Dialog stilizat">
        <Dialog
          title="Actualizați informațiile de plată"
          description="Informațiile despre modalitatea de plată nu mai sunt valabile. Sunteți rugat să le actualizați pentru a continua operațiunea."
          closeButton="✗"
          content={({ actions }) => (
            <>
              <form
                className="flex flex-col space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  actions.close();
                }}
              >
                <input
                  type="text"
                  placeholder="Nume complet"
                  className="w-full border border-slate-400 px-4 py-2 rounded"
                />

                <input
                  type="text"
                  placeholder="Stradă"
                  className="w-full border border-slate-400 px-4 py-2 rounded"
                />

                <input
                  type="text"
                  placeholder="Oraș"
                  className="w-full border border-slate-400 px-4 py-2 rounded"
                />

                <button
                  type="submit"
                  className="py-2 px-4 rounded bg-teal-900 text-white w-max mx-auto !mt-6"
                >
                  Salvează informațiile
                </button>
              </form>
            </>
          )}
          classNames={classNames}
        >
          Actualizați informațiile
        </Dialog>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Dialog cu structură si stiluri <b>definite de utilizator</b>
          </>
        }
      >
        <Dialog
          render={({
            actions,
            descriptionProps,
            overlayProps,
            rootProps,
            titleProps,
          }) => (
            <>
              <button
                {...overlayProps}
                className="top-0 fixed left-0 w-full h-full bg-black/25"
              ></button>

              <div
                {...rootProps}
                className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[1] bg-white p-5 rounded-lg flex flex-col w-full max-w-[30rem]"
              >
                <h6 {...titleProps} className="text-xl mb-4 font-semibold">
                  Metoda de plată
                </h6>

                <p {...descriptionProps}>
                  Vă rugăm să alegeți metoda de plată din opțiunile de mai jos:
                </p>

                <RadioGroup
                  label="Metodă de plată"
                  data={[
                    { label: "Plată cu cardul", value: "card" },
                    { label: "Plată ramburs", value: "cash" },
                    { label: "Transfer bancar", value: "bank-transfer" },
                    {
                      label: "Puncte de loialitate - Indisponibil momentan",
                      value: "loyalty-points",
                      disabled: true,
                    },
                  ]}
                  classNames={{
                    root: "mt-6 flex flex-col space-y-3",
                    radioButton: {
                      root: {
                        default: "flex items-center space-x-3",
                        disabled: "opacity-50 cursor-not-allowed",
                      },
                      button: {
                        default:
                          "w-5 h-5 rounded-full border border-zinc-900",
                        checked: "bg-slate-300",
                        unchecked: 'bg-white',
                        disabled: "bg-slate-700 cursor-not-allowed",
                      },
                    },
                  }}
                  orientation="vertical"
                />

                <button
                  type="button"
                  onClick={actions.close}
                  className="mt-6 bg-teal-900 text-white px-4 py-2 rounded w-max mx-auto"
                >
                  Salvați metoda de plată
                </button>
              </div>
            </>
          )}
        >
          {({ triggerProps, state }) => (
            <button
              {...triggerProps}
              className="py-2 px-4 rounded bg-slate-400 text-white hover:bg-slate-500 focus:bg-slate-600 transition-colors"
            >
              {state.open
                ? "Se alege metoda de plată..."
                : "Alegeți metoda de plată"}
            </button>
          )}
        </Dialog>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Dialog cu <b>state controlat extern</b>
          </>
        }
      >
        <div className="flex flex-col w-max space-y-4">
          <Dialog
            open={open}
            onOpenChange={setOpen}
            title="Actualizați informațiile de plată"
            description="Informațiile despre modalitatea de plată nu mai sunt valabile. Sunteți rugat să le actualizați pentru a continua operațiunea."
            closeButton="✗"
            content={({ actions }) => (
              <>
                <form
                  className="flex flex-col space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    actions.close();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Nume complet"
                    className="w-full border border-slate-400 px-4 py-2 rounded"
                  />

                  <input
                    type="text"
                    placeholder="Stradă"
                    className="w-full border border-slate-400 px-4 py-2 rounded"
                  />

                  <input
                    type="text"
                    placeholder="Oraș"
                    className="w-full border border-slate-400 px-4 py-2 rounded"
                  />

                  <button
                    type="submit"
                    className="py-2 px-4 rounded bg-teal-900 text-white w-max mx-auto !mt-6"
                  >
                    Salvează informațiile
                  </button>
                </form>
              </>
            )}
            classNames={classNames}
          >
            Actualizați informațiile
          </Dialog>
          <button
            type="button"
            className="px-4 py-2 rounded bg-teal-900 text-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            {!open ? "Deschide dialog" : "Dialogul este deschis"}
          </button>
        </div>
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Dialog <b>inactiv</b>
          </>
        }
      >
        <Dialog
          title="Actualizați informațiile de plată"
          description="Informațiile despre modalitatea de plată nu mai sunt valabile. Sunteți rugat să le actualizați pentru a continua operațiunea."
          closeButton="✗"
          classNames={classNames}
          disabled
        >
          Actualizați informațiile
        </Dialog>
      </ShowcaseItem>
    </Showcase>
  );
};
