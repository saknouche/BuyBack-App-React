import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../services/Ticket";
import {toast} from "react-toastify";
import {SportTicketResponse} from "../../../models/TicketModel";
import TicketCard from "../../../components/ui/TicketCard";
import moment from "moment";

const SportPurchasedTicketList = () => {

    const [sportTickets, setSportTickets] = useState<SportTicketResponse[]>([]);

    const getSportTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getAllSportTicketsByUser()
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
        getSportTickets()
    }, [getSportTickets]);

    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5">
                {
                    sportTickets.map((sportTicket)=> {
                        return (
                            <TicketCard
                                id={sportTicket.id.toString()}
                                label={sportTicket.name}
                                price={sportTicket.price.toString()}
                                type={"spectacle"}
                                category={sportTicket.category.name}
                                date={moment(sportTicket.startDate, "YYYY-MM-DD")}
                                city={sportTicket.address.name}
                                seller={sportTicket.seller.firstname + " " + sportTicket.seller.lastname}
                                edit
                                del
                            />
                        )
                    })
                }
            </div>
        </>
    );
}

export default SportPurchasedTicketList;
