import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../../services/Ticket";
import {toast} from "react-toastify";
import {SpectacleTicketResponse} from "../../../../models/TicketModel";
import TicketSpectacleCard from "../../../../components/ui/TicketSpectacleCard";
import moment from "moment";
import classNames from "classnames";
import SpectacleTicketList from "../../../tickets/SpectacleTicketList";
import SportTicketList from "../../../tickets/SportTicketList";
import Loading from "../../../../components/ui/Loading";
import Utils from "../../../../classes/Utils";

const SpectacleSoldTicketList = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [spectacleTickets, setSpectacleTickets] = useState<SpectacleTicketResponse[]>([]);

    const getSoldSpectacleTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getSoldSpectacleTicketsByUser()
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
        getSoldSpectacleTickets()
    }, [getSoldSpectacleTickets]);

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

export default SpectacleSoldTicketList;
