import { Progress } from "felice";
import { Showcase } from "./showcase/showcase";
import { ShowcaseItem } from "./showcase/showcase-item";

export const ProgressShowcase = () => {
  return (
    <Showcase title="Prezentare Progress">
      <ShowcaseItem title="Progress cu valori valide">
        <Progress
          label="Completare formular"
          min={0}
          max={100}
          value={25}
          classNames={{
            root: "h-3 w-full max-w-[20rem] border border-slate-400 rounded-full",
            indicator: "w-full bg-green-400",
          }}
        />
      </ShowcaseItem>
    </Showcase>
  );
};
