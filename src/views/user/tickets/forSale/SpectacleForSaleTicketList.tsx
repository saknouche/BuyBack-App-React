import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../../services/Ticket";
import {toast} from "react-toastify";
import {SpectacleTicketResponse} from "../../../../models/TicketModel";
import TicketSpectacleCard from "../../../../components/ui/TicketSpectacleCard";
import moment from "moment";
import classNames from "classnames";
import SpectacleTicketList from "../../../tickets/SpectacleTicketList";
import Loading from "../../../../components/ui/Loading";
import Utils from "../../../../classes/Utils";

const SpectacleForSaleTicketList = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [spectacleTickets, setSpectacleTickets] = useState<SpectacleTicketResponse[]>([]);

    const getForSaleSpectacleTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getForSaleSpectacleTicketsByUser()
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
        getForSaleSpectacleTickets()
    }, [getForSaleSpectacleTickets]);

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

export default SpectacleForSaleTicketList;
