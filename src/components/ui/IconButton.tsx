import React from 'react';
import classNames from "classnames";


export type IconButtonProps = {
  icon: string,
  link?: string,
}

const IconButton = ({ icon, link }: IconButtonProps) => {

  function handleClick() {
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={classNames(
          "select-none cursor-pointer",
          // "select-none cursor-pointer flex flex-col justify-center items-center h-10 w-10 border border-yellow-primary rounded-3xl",
          // "transition duration-300 ease-in-out hover:bg-yellow-primary-50"
        )}
      >
        <img className="h-6 w-6" src={icon} alt=""/>
      </div>
    </>
  );
}

export default IconButton;
