import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../services/Ticket";
import {toast} from "react-toastify";
import {SportTicketResponse} from "../../../models/TicketModel";
import moment from "moment";
import TicketSportCard from "../../../components/ui/TicketSportCard";
import classNames from "classnames";

const SportSoldTicketList = () => {

    const [sportTickets, setSportTickets] = useState<SportTicketResponse[]>([]);

    const getSoldSportTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getSoldSportTicketsByUser()
            ?.then((res) => {
                console.log(res.data)
                setSportTickets(res.data);
            })
            .catch((error) => {
                console.log(error.response.data)
                toast.error(error.response.data.message);
            })
    }, [])

    useEffect(() => {
        getSoldSportTickets()
    }, [getSoldSportTickets]);

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
                    sportTickets.length?
                    sportTickets.map((sportTicket, index)=> {
                        return (
                            <TicketSportCard
                                key={index}
                                id={sportTicket.id.toString()}
                                label={sportTicket.name}
                                price={sportTicket.price.toString()}
                                type={"spectacle"}
                                category={sportTicket.category.name}
                                date={moment(sportTicket.startDate, "YYYY-MM-DD")}
                                city={sportTicket.address.name}
                                seller={sportTicket.seller.firstname + " " + sportTicket.seller.lastname}
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

export default SportSoldTicketList;
