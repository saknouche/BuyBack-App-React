import React from 'react';
import Tab from "../../../../components/ui/Tab";
import SportSoldTicketList from "./SportSoldTicketList";
import SpectacleSoldTicketList from "./SpectacleSoldTicketList";

const tabData = [
    {
        label: "Sports",
        value: "sports",
        body: <SportSoldTicketList/>,
    },
    {
        label: "Spectacles",
        value: "spectacles",
        body: <SpectacleSoldTicketList />,
    }
];

const Sold = () => {
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5">
                <Tab data={tabData} defaultValue={"sports"} />
            </div>
        </>
    );
}

export default Sold;
