import React from 'react';
import {CalendarMonth, Delete, Edit, QuestionMark, SportsSoccer} from "@mui/icons-material";
import Place from '@mui/icons-material/Place';
import Button from "./Button";
import IconButton from "./IconButton";
import {Moment} from "moment";
import classNames from "classnames";

export type TicketProps = {
    id: string,
    type: "sport" | "spectacle",
    label: string,
    category?: string,
    price?: string,
    date?: Moment,
    className?: string,
    seller?: string,
    city?: string,
    edit?: boolean,
    del?: boolean,
}

const TicketCard = ({id, label, price, date, type, category, seller, className, city, edit, del }: TicketProps) => {
    return (
        <>
            <div className="bg-green-primary-50 flex flex-col rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                <div className={"relative flex-1 flex-col bg-green-primary-200 rounded-t-lg flex justify-center items-center p-10"}>
                    {
                        category?
                            <SportsSoccer fontSize={"large"} className={"text-green-primary-700"} />
                            :
                            <QuestionMark fontSize={"large"} className={"text-green-primary-700"} />
                    }
                    {
                        category?
                            <div className={"absolute -bottom-4 bg-green-primary-500 py-1 px-2 rounded-3xl text-green-primary-50 font-semibold"}>
                                {category}
                            </div>
                            :
                            <></>
                    }

                </div>
                <div className={classNames("flex justify-center p-3 flex-col gap-2",
                        category?"mt-4":""
                    )}
                >
                    <div className={"text-sm font-semibold text-green-primary-600 flex flex-row justify-between"}>
                    {
                        date?
                            <div className={"gap-1 flex flex-row items-center flex-wrap"}>
                                <CalendarMonth fontSize={"inherit"} />
                                {"" + date.locale(window.navigator.language).format('L')}
                            </div>
                            :
                            <></>
                    }
                        <div className={"text-green-primary-500"}>{seller?"by " + seller:""}</div>
                    </div>
                    <div className={"text-xl font-bold text-green-primary-700"}>
                        {label}
                    </div>
                    {
                        city?
                            <div className={"text-sm font-semibold text-green-primary-600 flex flex-col"}>
                                <div className={"gap-1 flex flex-row items-center flex-wrap"}>
                                    <Place fontSize={"inherit"} />{city}
                                </div>
                            </div>
                            :
                            <></>
                    }
                    {
                        price?
                            <div className={"text-xl gap-6 font-bold text-green-primary-700 flex flex-row justify-between"}>
                                <div>{price?price+"€":""}</div>
                            </div>
                            :
                            <></>
                    }
                    <div className={"flex flex-row gap-2"}>
                        <Button to={"/ticket/"+ type +"/"+id} label={"Details"} className={"rounded-lg flex-1 bg-blue-200 font-bold text-blue-700 hover:bg-blue-300"}/>
                        {edit?<IconButton icon={<Edit/>} className={"bg-amber-200 hover:bg-amber-300 text-amber-900"}/>:<></>}
                        {del?<IconButton icon={<Delete/>} className={"bg-red-200 hover:bg-red-300 text-red-900"}/>:<></>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketCard;
