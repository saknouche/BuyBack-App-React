import React, {useCallback, useEffect, useState} from 'react';
import TicketCard from "../../../components/ui/TicketCard";
import moment from "moment";
import {TicketService} from "../../../services/Ticket";
import {toast} from "react-toastify";
import {SpectacleTicketResponse, SportTicketResponse} from "../../../models/TicketModel";
// import {Tab, TabPanel, Tabs, TabsBody, TabsHeader, TabsProps } from "@material-tailwind/react";
import SportPurchasedTicketList from "./SportPurchasedTicketList";
import SpectaclePurchasedTicketList from "./SpectaclePurchasedTicketList";
import Tab from "../../../components/ui/Tab";

const tabData = [
    {
        label: "Sports",
        value: "sports",
        body: <SportPurchasedTicketList/>,
    },
    {
        label: "Spectacles",
        value: "spectacles",
        body: <SpectaclePurchasedTicketList />,
    }
];
const Purchased = () => {
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5">
                <Tab data={tabData} />
            </div>
        </>
    );
}

export default Purchased;


