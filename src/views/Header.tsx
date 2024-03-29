import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import Logo from "../assets/svg/logo_circle.svg"
import HeaderButton from "../components/views/header/HeaderButton";
import Button from "../components/ui/Button";
import SwipeableTemporaryDrawer from "../components/views/header/SwipeableTemporaryDrawer";
import Dropdown from "../components/ui/Dropdown";
import {BookOnline, ConfirmationNumber, ManageAccounts} from "@mui/icons-material";
import User from "../classes/User";
import {UserContext} from "../App";
import classNames from "classnames";

const Header = () => {
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        setUser(User.getUser)
    },[setUser]);

    const disconnect = () => {
        User.disconnect()
        setUser(User.getUser)
    }

  return (
    <div className="select-none flex flex-row h-24 bg-green-primary-500 justify-between">
        <Link to="/" className="flex flex-row items-center justify-center xl:hidden">
            <div className="pl-3">
                <img className="h-20" src={Logo} alt=""/>
            </div>
        </Link>
        <div className="flex-1 hidden flex-row gap-8 items-center xl:flex ml-10">
            <Link to="/" className="flex flex-row items-center justify-center">
              <div className="pl-3">
                  <img className="h-20" src={Logo} alt=""/>
              </div>
            </Link>
            <HeaderButton label="Home" to="/"/>
            <HeaderButton label="Search Ticket" to="/tickets"/>

        </div>
        <div className="flex-1 flex flex-row items-center justify-end pr-5">

        </div>
        <div className="flex-1 flex flex-row gap-4 sm:gap-8 items-center justify-end pr-5">

            {
                (User.getUser().accessToken)?
                    <Button
                        label="Sell a ticket"
                        className={classNames("hidden xl:flex ml-10 bg-green-primary-700 hover:bg-green-primary-600 text-green-primary-50 font-bold")}
                        prefixIcon={<BookOnline/>}
                        to={"user/sell-ticket"}
                    />
                    :
                    <></>
            }


            <Dropdown label={(User.getUser().accessToken)?(user?.firstname) + " " + (user?.lastname):"Login"} className="hidden xl:inline-block">
                {
                    (!User.getUser().accessToken)?
                        <div className="w-full p-3 flex flex-col justify-center items-center gap-1 z-auto" role="none">
                            <Button
                                label="Sign in"
                                to="/login"
                                className="w-full bg-green-primary-700 hover:bg-green-primary-600 text-green-primary-50 border border-transparent hover:shadow-sm"
                            />
                            <Button
                                label="Sign up"
                                to="/register"
                                className="w-full bg-yellow-primary-500 text-yellow-primary-50 hover:bg-yellow-primary-600 border border-transparent hover:shadow-sm"
                            />
                        </div>
                        :
                        <div>
                            <div className="flex justify-center items-center py-1" role="none">
                                <div className="text-gray-700 block px-4 py-2 text-sm">{User.getUser().email}</div>
                            </div>
                            <hr/>
                            <div className="w-full p-3 flex flex-col justify-center items-center gap-1" role="none">
                                <Button
                                    label="My profile"
                                    to="/user/profile"
                                    prefixIcon={<ManageAccounts/>}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-green-primary-50 border border-transparent hover:border-yellow-primary hover:shadow-sm"
                                />
                                <Button
                                    label="My tickets"
                                    to="/user/purchased"
                                    prefixIcon={<ConfirmationNumber/>}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-green-primary-50 border border-transparent hover:border-yellow-primary hover:shadow-sm"
                                />
                            </div>
                            <hr/>
                            <div className="w-full p-3 flex flex-col justify-center items-center gap-1" role="none">
                                <Button
                                    label="Logout"
                                    to="/"
                                    onClick={disconnect}
                                    className="w-full bg-red-500 hover:bg-red-600 text-red-50 border border-transparent hover:shadow-sm"
                                />
                            </div>
                        </div>
                }
            </Dropdown>
            {/*<Button to="/cart" label="Cart" icon={<ShoppingBasketIcon />} className="bg-gray-100 border border-transparent hover:border-gray-300 hover:shadow-sm" />*/}
            <div className="flex xl:hidden">
              <SwipeableTemporaryDrawer/>
            </div>
        </div>
    </div>
  );
}

export default Header;
