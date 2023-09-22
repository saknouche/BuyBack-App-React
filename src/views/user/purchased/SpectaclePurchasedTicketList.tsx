import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../services/Ticket";
import {toast} from "react-toastify";
import {SpectacleTicketResponse, SportTicketResponse} from "../../../models/TicketModel";
import TicketCard from "../../../components/ui/TicketCard";
import moment from "moment";

const SpectaclePurchasedTicketList = () => {

    const [spectacleTickets, setSpectacleTickets] = useState<SpectacleTicketResponse[]>([]);

    const getSpectacleTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getAllSpectacleTicketsByUser()
            ?.then((res) => {
                console.log(res.data)
                setSpectacleTickets(res.data);
            })
            .catch((error) => {
                console.log(error.response.data)
                toast.error(error.response.data.message);
            })
    }, [])

    useEffect(() => {
        getSpectacleTickets()
    }, [getSpectacleTickets]);

    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5">
                {
                    spectacleTickets.map((spectacleTicket)=> {
                        return (
                            <TicketCard
                                id={spectacleTicket.id.toString()}
                                label={spectacleTicket.name}
                                price={spectacleTicket.price.toString()}
                                type={"spectacle"}
                                category={spectacleTicket.category.name}
                                date={moment(spectacleTicket.startDate, "YYYY-MM-DD")}
                                city={spectacleTicket.address.name}
                                seller={spectacleTicket.seller.firstname + " " + spectacleTicket.seller.lastname}
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

export default SpectaclePurchasedTicketList;
