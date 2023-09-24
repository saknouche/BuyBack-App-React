import React from 'react';
import SportPurchasedTicketList from "./SportPurchasedTicketList";
import SpectaclePurchasedTicketList from "./SpectaclePurchasedTicketList";
import Tab from "../../../../components/ui/Tab";

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
            <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5 h-full">
                <Tab data={tabData} defaultValue={"sports"} />
            </div>
        </>
    );
}

export default Purchased;


