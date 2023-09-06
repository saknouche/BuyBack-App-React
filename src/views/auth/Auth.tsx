import React, { ReactElement } from 'react';
import Logo from "../../assets/svg/logo_circle.svg";

export type AuthProps = {
  children?: ReactElement | ReactElement[]
  className?: string
  [key: string]: any
}

const Auth = ({ children }: AuthProps) => {
  return (
    <div className="flex flex-1 bg-green-primary-50 p-20">
      <div className="flex flex-1 bg-gradient-to-br from-green-primary-900 to-green-primary-400 p-5 rounded-3xl">
        <div className="flex flex-col flex-1 p-5 h-auto">
          <div className="flex flex-row items-center content-center h-min gap-3">
            <img className="h-24" src={Logo} alt=""/>
            <div className="text-5xl font-bold">BUY<span className="text-green-primary-200">BACK</span></div>
          </div>

          {children}

          {/*<a className="hidden" href="https://storyset.com/technology">Technology illustrations by Storyset</a>*/}
        </div>
        <div className="flex flex-1 h-full p-5  rounded-l-xl">
        </div>
      </div>
    </div>
  );
}

export default Auth;
