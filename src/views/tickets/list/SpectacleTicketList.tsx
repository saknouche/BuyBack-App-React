import React from 'react';
import classNames from "classnames";
import TicketSpectacleCard from "../TicketSpectacleCard";
import moment from "moment/moment";
import {SpectacleTicketResponse} from "../../../models/TicketModel";
import User from "../../../classes/User";

export type SpectacleTicketProps = {
    spectacleTickets: SpectacleTicketResponse[];
}

const SpectacleTicketList = ({spectacleTickets}: SpectacleTicketProps) => {
    return (
        <>
            <div
                className={
                    classNames(
                        "flex-1 bg-green-primary-50 flex flex-wrap gap-3 items-center justify-center",
                        !spectacleTickets.length?"justify-center items-center":"",
                    )}
            >
                {
                    spectacleTickets.length ?
                        spectacleTickets.map((spectacleTicket, index)=> {
                            return (
                                <TicketSpectacleCard
                                    key={index}
                                    id={spectacleTicket.id.toString()}
                                    label={spectacleTicket.name}
                                    price={spectacleTicket.price.toString()}
                                    type={"spectacle"}
                                    category={spectacleTicket.category?.name}
                                    date={moment(spectacleTicket.startDate, "YYYY-MM-DD")}
                                    city={spectacleTicket?.address.name}
                                    purchaser={spectacleTicket.purchaser}
                                    seller={spectacleTicket.seller?.firstname + " " + spectacleTicket.seller?.lastname}
                                    edit={!spectacleTicket?.purchaser && spectacleTicket.seller?.email === User.getUser().email}
                                    del={!spectacleTicket?.purchaser && spectacleTicket.seller?.email === User.getUser().email}
                                />
                            )
                        })
                        :
                        <div className={"rounded-3xl p-5 flex justify-center items-center w-full text-green-primary-500 text-5xl font-semibold bg-green-primary-100"}>No ticket</div>
                }
            </div>
        </>
    );
}

export default SpectacleTicketList;
