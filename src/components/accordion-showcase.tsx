import { Accordion, AccordionProps } from "felice";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

const classNames: AccordionProps["classNames"] = {
  root: "w-full max-w-[20rem] flex flex-col space-y-2",
  trigger: {
    default: "w-full text-start px-4 py-2 bg-purple-200 shadow-sm rounded",
    expanded: "rounded-b-none font-medium",
  },
  content: "px-4 py-2 border-purple-200 border rounded-b",
};

export const AccordionShowcase = () => {
  return (
    <Showcase title="Prezentare Accordion">
      <ShowcaseItem title="Un singur Accordion nestilizat">
        <Accordion
          data={{
            header: "Accordion nestilizat",
            content: (
              <div>
                <p>Conținutul Accordion-ului nestilizat</p>
                <p>Acesta acceptă orice tip de element HTML</p>
                <ul className="list-decimal list-inside">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <button>Button</button>
              </div>
            ),
          }}
        />
      </ShowcaseItem>

      <ShowcaseItem title="Mai multe componente Accordion stilizate">
        <Accordion
          data={[
            {
              header: "Primul Accordion",
              content: "Conținutul primului Accordion",
            },
            {
              header: "Al doilea Accordion",
              content: "Conținutul celui de al doilea Accordion",
            },
            {
              header: "Al treilea Accordion",
              content: "Conținutul celui de al treilea Accordion",
            },
          ]}
          classNames={classNames}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Un singur Accordion deschis <b>(type=single)</b>{" "}
          </>
        }
      >
        <Accordion
          data={[
            {
              header: "Primul Accordion",
              content: "Conținutul primului Accordion",
            },
            {
              header: "Al doilea Accordion",
              content: "Conținutul celui de al doilea Accordion",
            },
          ]}
          type="single"
          classNames={classNames}
        />
      </ShowcaseItem>

      <ShowcaseItem title="Un Accordion deschis implicit">
        <Accordion
          data={[
            {
              header: "Primul Accordion",
              content: "Conținutul primului Accordion",
            },
            {
              header: "Al doilea Accordion",
              content: "Conținutul celui de al doilea Accordion",
            },
          ]}
          defaultValue={[1]}
          classNames={classNames}
        />
      </ShowcaseItem>

      <ShowcaseItem title="Mai multe Accordion deschise implicit">
        <Accordion
          data={[
            {
              header: "Primul Accordion",
              content: "Conținutul primului Accordion",
            },
            {
              header: "Al doilea Accordion",
              content: "Conținutul celui de al doilea Accordion",
            },
            {
              header: "Al treilea Accordion",
              content: "Conținutul celui de al treilea Accordion",
            },
          ]}
          defaultValue={[1, 2]}
          classNames={classNames}
        />
      </ShowcaseItem>

      <ShowcaseItem
        title={
          <>
            Accordion afișat cu funcția <b>render</b>
          </>
        }
      >
        <Accordion
          data={[
            {
              render: ({
                rootProps,
                state,
                contentProps,
                headerProps,
                triggerProps,
              }) => (
                <div {...rootProps}>
                  <h4 {...headerProps}>
                    <button {...triggerProps}>
                      Accordion-ul este acum{" "}
                      {state.expanded ? "deschis" : "închis"}
                    </button>
                  </h4>

                  <p {...contentProps}>
                    Structura Accordion-ului este definită de către utilizatorul
                    bibliotecii
                  </p>
                </div>
              ),
            },
          ]}
        />
      </ShowcaseItem>
    </Showcase>
  );
};
