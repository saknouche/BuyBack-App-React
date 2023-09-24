import React from 'react';
import classNames from "classnames";
import TicketSportCard from "../../components/ui/TicketSportCard";
import moment from "moment/moment";
import {SportTicketResponse} from "../../models/TicketModel";
import User from "../../classes/User";

export type SportTicketProps = {
    sportTickets: SportTicketResponse[];
}

const SportTicketList = ({sportTickets}: SportTicketProps) => {
    return (
        <>
            <div
                className={
                    classNames(
                        "flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5",
                        !sportTickets.length?"justify-center items-center":"",
                    )}
            >
                {
                    sportTickets.length ?
                        sportTickets.map((sportTicket, index)=> {
                            return (
                                <TicketSportCard
                                    key={index}
                                    id={sportTicket.id.toString()}
                                    label={sportTicket.name}
                                    price={sportTicket.price.toString()}
                                    type={"sport"}
                                    category={sportTicket.category?.name}
                                    date={moment(sportTicket.startDate, "YYYY-MM-DD")}
                                    city={sportTicket.address.name}
                                    seller={sportTicket.seller?.firstname + " " + sportTicket.seller?.lastname}
                                    edit={!sportTicket?.purchaser && sportTicket.seller?.email === User.getUser().email}
                                    del={!sportTicket?.purchaser && sportTicket.seller?.email === User.getUser().email}
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

export default SportTicketList;
