import React, {useCallback, useEffect, useState} from "react";
import {SpectacleTicketResponse} from "../../models/TicketModel";
import {TicketService} from "../../services/Ticket";
import Utils from "../../classes/Utils";
import {toast} from "react-toastify";
import Loading from "../../components/ui/Loading";
import SpectacleTicketList from "./list/SpectacleTicketList";


const SpectacleAllTicketList = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [spectacleTickets, setSpectacleTickets] = useState<SpectacleTicketResponse[]>([]);

    const getAllSpectacleTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getAllSpectacleTicketsByUser()
            ?.then((res) => {
                console.log(res.data)
                setSpectacleTickets(res.data);
                Utils.sleep(300).then(() => setIsLoading(false));
            })
            .catch((error) => {
                console.log(error.response.data)
                toast.error(error.response.data.message);
                Utils.sleep(300).then(() => setIsLoading(false));
            })
    }, [])

    useEffect(() => {
        getAllSpectacleTickets()
    }, [getAllSpectacleTickets]);

    return (
        <>
            {
                !isLoading?
                    <SpectacleTicketList spectacleTickets={spectacleTickets}/>
                    :
                    <Loading/>
            }
        </>
    );
}

export default SpectacleAllTicketList;
