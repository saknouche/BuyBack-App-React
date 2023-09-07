import React from 'react';
import NotFoundSvg from '../assets/svg/not_found.svg';

const NotFound = () => {
  return (
    <div className="bg-green-primary-50 flex flex-1 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <img className="max-h-full" src={NotFoundSvg} alt=""/>
          <a hidden href="https://storyset.com/online">Online illustrations by Storyset</a>
      </div>
    </div>
  );
}

export default NotFound;
