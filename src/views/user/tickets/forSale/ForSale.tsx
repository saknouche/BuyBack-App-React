import React from 'react';
import Tab from "../../../../components/ui/Tab";
import SportForSaleTicketList from "./SportForSaleTicketList";
import SpectacleForSaleTicketList from "./SpectacleForSaleTicketList";

const tabData = [
    {
        label: "Sports",
        value: "sports",
        body: <SportForSaleTicketList/>,
    },
    {
        label: "Spectacles",
        value: "spectacles",
        body: <SpectacleForSaleTicketList />,
    }
];
const ForSale = () => {
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5">
                <Tab data={tabData} defaultValue={"sports"} />
            </div>
        </>
    );
}

export default ForSale;
