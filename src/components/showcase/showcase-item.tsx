import { HTMLProps, ReactNode } from "react";

interface Props extends Omit<HTMLProps<HTMLLIElement>, "title"> {
  title: ReactNode;
}

export const ShowcaseItem = ({ children, title, ...props }: Props) => {
  return (
    <li {...props} className="grid grid-cols-[30%,70%] space-x-6 py-4">
      <h3 className="text-xl pl-4">{title}</h3>

      <div>{children}</div>
    </li>
  );
};
