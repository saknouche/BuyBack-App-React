import React from 'react';
import classNames from "classnames";
import {UseFormReturn} from "react-hook-form";


export type TextareaProps = {
    form: UseFormReturn<any>
    id: string,
    required?: boolean,
    label?: string,
    className?: string,
    maxLength?:number,
}

const Textarea = ({form, id, label, required, className, maxLength}: TextareaProps) => {

    const [count, setCount] = React.useState(0);

  return (
    <>
        {
            label?
                <div className="mb-0.5">
                    <label className="ml-2 text-green-primary-900 font-semibold">
                        {label}
                    </label>
                </div>
                :
                <div/>
        }
        <div className={"relative w-full mb-6"}>
            <textarea
                id={id}
                className={classNames(
                    "rounded-lg p-2 w-auto border focus:border-green-primary-900 outline-none",
                    className
                    // "select-none cursor-pointer flex flex-col justify-center items-center h-10 w-10 border border-yellow-primary rounded-3xl",
                    // "transition duration-300 ease-in-out hover:bg-yellow-primary-50"
                )}
                maxLength={maxLength}
                {...form.register(id, { required: required, maxLength: 300 })}
                onChange={e => setCount(e.target.value.length)}
            >
            </textarea>
            {
                maxLength?
                    <span className={"absolute bottom-3 right-3 text-green-primary-900"}>{count}/{maxLength}</span>
                    :
                    <></>
            }
        </div>
    </>
  );
}

export default Textarea;
