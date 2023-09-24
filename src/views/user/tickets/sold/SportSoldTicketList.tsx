import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../../services/Ticket";
import {toast} from "react-toastify";
import {SportTicketResponse} from "../../../../models/TicketModel";
import moment from "moment";
import TicketSportCard from "../../../../components/ui/TicketSportCard";
import classNames from "classnames";
import SpectacleTicketList from "../../../tickets/SpectacleTicketList";
import SportTicketList from "../../../tickets/SportTicketList";
import Loading from "../../../../components/ui/Loading";
import Utils from "../../../../classes/Utils";

const SportSoldTicketList = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [sportTickets, setSportTickets] = useState<SportTicketResponse[]>([]);

    const getSoldSportTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getSoldSportTicketsByUser()
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
        getSoldSportTickets()
    }, [getSoldSportTickets]);

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

export default SportSoldTicketList;
