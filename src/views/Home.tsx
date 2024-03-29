import React, {useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import SearchAutocomplete from "../components/views/home/SearchAutocomplete";
import SportTicketList from "./tickets/list/SportTicketList";
import {SpectacleTicketResponse, SportTicketResponse} from "../models/TicketModel";
import {TicketService} from "../services/Ticket";
import Utils from "../classes/Utils";
import {toast} from "react-toastify";
import Loading from "../components/ui/Loading";
import SpectacleTicketList from "./tickets/list/SpectacleTicketList";
import Button from "../components/ui/Button";
import {Search} from "@mui/icons-material";

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
                        <Button
                            prefixIcon={<Search/>}
                            label={"Find a ticket"}
                            to={"/tickets"}
                            className={"bg-green-primary-700 text-green-primary-50 hover:bg-green-primary-800 font-semibold h-14 px-14"}
                        />
                        {/*<SearchAutocomplete />*/}
                    </div>
                </div>

                <div className="bg-green-primary-50 flex flex-col items-center">
                    <div className={"text-3xl font-semibold flex mb-5"}>
                        Recent sport tickets
                    </div>
                    <div className={"flex flex-row flex-wrap items-center justify-center"}>
                        {
                            !isLoadingSport?
                                <SportTicketList sportTickets={sportTickets}/>
                                :
                                <Loading/>
                        }
                    </div>
                </div>
                <div className="bg-green-primary-50 flex flex-col items-center pb-5">
                    <div className={"text-3xl font-semibold flex mb-5"}>
                        Recent spectacle tickets
                    </div>
                    <div className={"flex flex-row flex-wrap items-center justify-center"}>
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
