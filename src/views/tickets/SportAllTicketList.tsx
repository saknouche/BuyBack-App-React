import React, {useCallback, useEffect, useState} from "react";
import {SportTicketResponse} from "../../models/TicketModel";
import {TicketService} from "../../services/Ticket";
import Utils from "../../classes/Utils";
import {toast} from "react-toastify";
import Loading from "../../components/ui/Loading";
import SportTicketList from "./list/SportTicketList";


const SportAllTicketList = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [sportTickets, setSportTickets] = useState<SportTicketResponse[]>([]);

    const getAllSportTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getAllSportTicketsByUser()
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
        getAllSportTickets()
    }, [getAllSportTickets]);

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

export default SportAllTicketList;
