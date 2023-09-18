import { ReactNode } from "react";
import Spinner from "./Spinner";

interface propType {
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disabled?: boolean;
  type?: "submit" | "button";
}

export default function Button(props: propType) {
  return (
    <button className="flex px-4 py-2 cursor-pointer items-center justify-center border bg-white outline-none no-underline rounded-2xl font-semibold text-sm text-black disabled:cursor-not-allowed disabled:bg-[#a1a1aa] hover:bg-[#a1a1a2]" disabled={props.disabled} type={props.type ? props.type : "submit"} onClick={props.onClick}>
      {props.loading ? <Spinner /> : props.children}
    </button>
  );
}
