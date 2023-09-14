import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Button from "../../components/ui/Button";
import {ArrowBack, ArrowBackIosRounded, ArrowLeft, Icecream, ManageAccounts} from "@mui/icons-material";
import classNames from "classnames";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "../../components/ui/IconButton";

const Nav = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const pageName = (path?.charAt(0).toUpperCase() + path.slice(1)).replace(/[-_]/, " ");
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-row">
                <div className="h-full w-60 bg-green-primary-200 p-5 flex flex-col gap-3">
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
                        <div className={"font-bold"}>Tickets</div>
                        <hr className={"flex-1 border-green-primary-400"}/>
                    </div>
                    <Button
                        label="Purchased"
                        className={classNames("bg-green-primary-400 font-bold hover:bg-green-primary-500 text-black-primary",
                            (pageName === "Purchased")?"bg-green-primary-700 text-green-primary-50":""
                        )}
                        to={"purchased"}
                        prefixIcon={<ManageAccounts />}
                    />
                    <Button
                        label="For sale"
                        className={classNames("bg-green-primary-400 font-bold hover:bg-green-primary-500 text-black-primary",
                            (pageName === "For sale")?"bg-green-primary-700 text-green-primary-50":""
                        )}
                        to={"for-sale"}
                        prefixIcon={<ManageAccounts />}
                    />
                    <Button
                        label="Sold"
                        className={classNames("bg-green-primary-400 font-bold hover:bg-green-primary-500 text-black-primary",
                            (pageName === "Sold")?"bg-green-primary-700 text-green-primary-50":""
                        )}
                        to={"sold"}
                        prefixIcon={<ManageAccounts />}
                    />
                </div>
                <div className={"flex-1 bg-green-primary-50 p-5 flex flex-col"}>
                    <div className={"bg-green-primary-50 flex flex-row m-2 items-center gap-10"}>
                        {/*<a href={"/user/"} className={"cursor-pointer hover:bg-green-primary-100 rounded-3xl p-2 flex justify-center items-center"}><ArrowBackIosRounded fontSize={"large"} /></a>*/}
                        <div className={"font-bold text-5xl text-black-primary"}>
                            {pageName}
                        </div>
                    </div>

                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default Nav;
