import { ReactNode } from "react";

interface propType {
  id: string;
  placeholder: string;
  type?: string;
  maxlength?: number;
  minlength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  action?: ReactNode;
  style?: object;
}

const Input = (props: propType) => {
  return (
    <div className="w-64 flex h-[35px] items-center justify-center rounded-xl px-4 bg-[#3f3f46]" key={props.id}>
      <input className="border-none bg-[#3f3f46] outline-none w-full shadow-none text-white" style={props.style} onChange={props.onChange} defaultValue={props.defaultValue ? props.defaultValue : ""} autoComplete="off" type={props.type || "text"} id={props.id} name={props.id} placeholder={props.placeholder} maxLength={props.maxlength || 200} minLength={props.minlength || 1} />
      {props.action}
    </div>
  );
};

export default Input;
