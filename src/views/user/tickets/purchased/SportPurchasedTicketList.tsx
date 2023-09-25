import React, {useCallback, useEffect, useState} from 'react';
import {TicketService} from "../../../../services/Ticket";
import {toast} from "react-toastify";
import {SportTicketResponse} from "../../../../models/TicketModel";
import moment from "moment";
import TicketSportCard from "../../../tickets/TicketSportCard";
import classNames from "classnames";
import SportTicketList from "../../../tickets/list/SportTicketList";
import Loading from "../../../../components/ui/Loading";
import Utils from "../../../../classes/Utils";

const SportPurchasedTicketList = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [sportTickets, setSportTickets] = useState<SportTicketResponse[]>([]);

    const getSportTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getPurchasedSportTicketsByUser()
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
        getSportTickets()
    }, [getSportTickets]);

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

export default SportPurchasedTicketList;
