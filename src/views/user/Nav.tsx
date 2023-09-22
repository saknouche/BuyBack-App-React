import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import Button from "../../components/ui/Button";
import {Add, ArrowBackIosRounded, ManageAccounts} from "@mui/icons-material";
import classNames from "classnames";
import LockIcon from "@mui/icons-material/Lock";

const Nav = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const pageName = (path?.charAt(0).toUpperCase() + path.slice(1)).replace(/[-_]/, " ");

    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-row">
                <div className={classNames(
                    "flex h-full w-60 bg-green-primary-200 p-5 flex-col gap-3",
                        (pageName === "")?"flex-1 md:flex-none":"hidden md:flex"
                    )}
                >
                    <Button
                        label="Profile"
                        className={classNames("font-bold hover:bg-green-primary-500",
                            (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                        )}
                        to={"profile"}
                        prefixIcon={<ManageAccounts />}
                    />
                    <Button
                        label="Change password"
                        className={classNames("font-bold hover:bg-green-primary-500",
                            (pageName === "Change password")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                        )}
                        to={"change-password"}
                        prefixIcon={<LockIcon />}
                    />
                    <div className={"flex flex-row justify-center items-center gap-2 text-black-primary"}>
                        <hr className={"flex-1 border-green-primary-400"}/>
                        <div className={"font-bold"}>My Tickets</div>
                        <hr className={"flex-1 border-green-primary-400"}/>
                    </div>
                    <Button
                        label="Sell ticket"
                        className={classNames("bg-blue-400 hover:bg-blue-500 font-bold  text-black-primary",
                            (pageName === "Sell ticket")?"bg-blue-700 text-green-primary-50":""
                        )}
                        prefixIcon={<Add/>}
                        to={"sell-ticket"}
                    />
                    <Button
                        label="For sale"
                        className={classNames("bg-green-primary-400 font-bold hover:bg-green-primary-500 text-black-primary",
                            (pageName === "For sale")?"bg-green-primary-700 text-green-primary-50":""
                        )}
                        to={"for-sale"}
                    />
                    <Button
                        label="Purchased"
                        className={classNames("bg-green-primary-400 font-bold hover:bg-green-primary-500 text-black-primary",
                            (pageName === "Purchased")?"bg-green-primary-700 text-green-primary-50":""
                        )}
                        to={"purchased"}
                    />
                    <Button
                        label="Sold"
                        className={classNames("bg-green-primary-400 font-bold hover:bg-green-primary-500 text-black-primary",
                            (pageName === "Sold")?"bg-green-primary-700 text-green-primary-50":""
                        )}
                        to={"sold"}
                    />
                </div>
                <div className={classNames(
                    "flex-1 bg-green-primary-50 flex flex-col ",
                        (pageName === "")?"hidden":""
                    )}
                >
                    <div className={"bg-green-primary-50 flex flex-row items-center gap-5 mb-2 pt-5 px-5 md:px-16"}>
                        <Link
                            to={"/user/"}
                            className={classNames(
                                "flex md:hidden cursor-pointer hover:bg-green-primary-100 rounded-3xl p-2 justify-center items-center",
                                // (pageName === "")?"hidden":""
                            )}
                        >
                            <ArrowBackIosRounded fontSize={"large"} />
                        </Link>
                        <div className={"font-bold text-5xl text-black-primary"}>
                            {pageName}
                        </div>
                    </div>
                    <div className={"overflow-auto px-5 pb-5"}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
