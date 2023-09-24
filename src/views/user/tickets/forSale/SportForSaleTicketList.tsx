import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../../services/Ticket";
import {toast} from "react-toastify";
import {SportTicketResponse} from "../../../../models/TicketModel";
import SportTicketList from "../../../tickets/SportTicketList";
import Utils from "../../../../classes/Utils";
import Loading from "../../../../components/ui/Loading";

const SportForSaleTicketList = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [sportTickets, setSportTickets] = useState<SportTicketResponse[]>([]);

    const getForSaleSportTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getForSaleSportTicketsByUser()
            ?.then((res) => {
                console.log(res.data)
                setSportTickets(res.data);
                Utils.sleep(300).then(() => setIsLoading(false));

            })
            .catch((error) => {
                console.log(error.response.data)
                toast.error(error.response.data.message);
                Utils.sleep(300).then(() => setIsLoading(false));
            })
    }, [])

    useEffect(() => {
        getForSaleSportTickets()
    }, [getForSaleSportTickets]);

    return (
        <>
            {
                !isLoading?
                    <SportTicketList sportTickets={sportTickets}/>
                    :
                    <Loading/>
            }
        </>
    );
}

export default SportForSaleTicketList;
