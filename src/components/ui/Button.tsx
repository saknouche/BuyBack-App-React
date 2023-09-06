import React, {ReactElement} from 'react';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";


export type ButtonProps = {
  label: string,
  icon?: ReactElement,
  to?: string,
  link?: string,
  onClick?: Function,
  className?: string,
  type?: string,
}

const Button = ({label, icon, to, link, className, type, onClick }: ButtonProps) => {
  const navigate  = useNavigate();

  function handleClick() {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <>
      <div
        className={classNames(
          "relative select-none cursor-pointer flex flex-row justify-center items-center w-auto gap-2",
          "rounded-xl transition duration-300 ease-in-out",
          className
        )}
      >
        <div
          className={classNames(
            "absolute left-3 z-0"
          )}
        >
          {icon}
        </div>
        <input
          className={classNames(
            "cursor-pointer flex-1 py-2 px-3 pl-10 z-10"
          )}
          onClick={handleClick}
          type={type?type:"button"}
          value={label}
        >
        </input>
      </div>
    </>
  );
}

export default Button;
