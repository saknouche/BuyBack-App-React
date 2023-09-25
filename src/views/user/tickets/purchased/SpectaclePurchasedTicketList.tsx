import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../../services/Ticket";
import {toast} from "react-toastify";
import {SpectacleTicketResponse} from "../../../../models/TicketModel";
import TicketSpectacleCard from "../../../tickets/TicketSpectacleCard";
import moment from "moment";
import classNames from "classnames";
import SpectacleTicketList from "../../../tickets/list/SpectacleTicketList";
import Loading from "../../../../components/ui/Loading";
import Utils from "../../../../classes/Utils";

const SpectaclePurchasedTicketList = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [spectacleTickets, setSpectacleTickets] = useState<SpectacleTicketResponse[]>([]);

    const getPurchasedSpectacleTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getPurchasedSpectacleTicketsByUser()
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
        getPurchasedSpectacleTickets()
    }, [getPurchasedSpectacleTickets]);

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

export default SpectaclePurchasedTicketList;
