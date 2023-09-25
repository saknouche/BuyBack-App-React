import React from 'react';
import {Link} from "react-router-dom";
import Tab from "../../components/ui/Tab";
import SportSoldTicketList from "./tickets/sold/SportSoldTicketList";
import SpectacleSoldTicketList from "./tickets/sold/SpectacleSoldTicketList";
import AddSportTicket from "../tickets/add/AddSportTicket";
import AddSpectacleTicket from "../tickets/add/AddSpectacleTicket";

const tabData = [
    {
        label: "Sports",
        value: "sports",
        body: <AddSportTicket/>,
    },
    {
        label: "Spectacles",
        value: "spectacles",
        body: <AddSpectacleTicket />,
    }
];

const SellTicket = () => {
    return (
        <>
            <div className="flex-1 w-full bg-green-primary-50 flex gap-3 flex-wrap">


                <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 pt-5">
                    <Tab data={tabData} defaultValue={"sports"} />
                </div>

                {/*<Link to={"sport/new"}>*/}
                {/*    <div className={"p-2 rounded-lg bg-green-primary-500 flex justify-center items-center hover:bg-green-primary-600"}>*/}
                {/*        <div className={"text-4xl font-semibold flex-1 rounded-md p-8 bg-green-primary-400 text-green-primary-50 flex justify-center items-center"}>*/}
                {/*            Sport*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}

                {/*<Link to={"spectacle/new"}>*/}
                {/*    <div className={"p-2 rounded-lg bg-green-primary-500 flex justify-center items-center hover:bg-green-primary-600"}>*/}
                {/*        <div className={"text-4xl font-semibold flex-1 rounded-md p-8 bg-green-primary-400 text-green-primary-50 flex justify-center items-center"}>*/}
                {/*            Spectacle*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}

            </div>
        </>
    );
}

export default SellTicket;
