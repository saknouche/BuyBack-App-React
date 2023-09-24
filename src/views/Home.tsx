import React, {useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import SearchAutocomplete from "../components/views/home/SearchAutocomplete";
import SportTicketList from "./tickets/SportTicketList";
import {SpectacleTicketResponse, SportTicketResponse} from "../models/TicketModel";
import {TicketService} from "../services/Ticket";
import Utils from "../classes/Utils";
import {toast} from "react-toastify";
import Loading from "../components/ui/Loading";
import SpectacleTicketList from "./tickets/SpectacleTicketList";

const Home = () => {

    const [isLoadingSport, setIsLoadingSport] = useState<boolean>(true);
    const [isLoadingSpectacle, setIsLoadingSpectacle] = useState<boolean>(true);
    const [sportTickets, setSportTickets] = useState<SportTicketResponse[]>([]);
    const [spectacleTickets, setSpectacleTickets] = useState<SpectacleTicketResponse[]>([]);
    

    const getSportTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getAllSportTicketsLimitBy(4)
            ?.then((res) => {
                console.log(res.data)
                setSportTickets(res.data);
                Utils.sleep(300).then(() => setIsLoadingSport(false));

            })
            .catch((error) => {
                console.log(error.response.data)
                toast.error(error.response.data.message);
                Utils.sleep(300).then(() => setIsLoadingSport(false));
            })
    }, [])

    const getSpectacleTickets = useCallback(() => {
        const ticketService = new TicketService()
        ticketService.getAllSpectacleTicketsLimitBy(4)
            ?.then((res) => {
                console.log(res.data)
                setSpectacleTickets(res.data);
                Utils.sleep(300).then(() => setIsLoadingSpectacle(false));

            })
            .catch((error) => {
                console.log(error.response.data)
                toast.error(error.response.data.message);
                Utils.sleep(300).then(() => setIsLoadingSpectacle(false));
            })
    }, [])

    useEffect(() => {
        getSportTickets()
        getSpectacleTickets()
    }, [getSpectacleTickets, getSportTickets]);

    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-col gap-10">
                <div className={"py-20 bg-green-primary-400 flex flex-col justify-center items-center gap-10"}>
                    <div className={"flex-1 flex flex-col justify-end items-center gap-3 px-5"}>
                        <div className="text-5xl sm:text-5xl font-bold select-none flex flex-col justify-center items-center">
                            <div>Welcome to BUY<span className="text-green-primary-50">BACK</span></div>
                        </div>
                        <div className="text-xl flex justify-center items-center">
                            The best app for reselling or buying event tickets.
                        </div>
                    </div>

                    <div
                        className={classNames("flex-1 w-full bg-green-primary-400 flex flex-col justify-center items-center",
                            "px-4 sm:px-16 md:px-28 lg:px-60 xl:px-80 2xl:px-96"
                        )}
                    >
                        <SearchAutocomplete />
                    </div>
                </div>

                <div className="px-20 bg-green-primary-50 flex flex-col items-center">
                    <div className={"text-3xl font-semibold flex"}>
                        Sport tickets
                    </div>
                    <div>
                        {
                            !isLoadingSport?
                                <SportTicketList sportTickets={sportTickets}/>
                                :
                                <Loading/>
                        }
                    </div>
                </div>
                <div className="px-20 bg-green-primary-50 flex flex-col items-center">
                    <div className={"text-3xl font-semibold flex"}>
                        Spectacle tickets
                    </div>
                    <div>
                        {
                            !isLoadingSpectacle?
                                <SpectacleTicketList spectacleTickets={spectacleTickets}/>
                                :
                                <Loading/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
