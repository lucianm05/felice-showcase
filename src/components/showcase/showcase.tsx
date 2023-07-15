import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLElement> {
  title: string;
}

export const Showcase = ({ children, title, ...props }: Props) => {
  return (
    <section {...props}>
      <h2 className="text-3xl border-b border-slate-400 pb-4 font-medium">{title}</h2>

      <ul className="divide-y divide-slate-400">{children}</ul>
    </section>
  );
};
