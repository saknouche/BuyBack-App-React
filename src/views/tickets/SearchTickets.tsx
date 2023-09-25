import React from 'react';
import Tab from "../../components/ui/Tab";
import SpectacleAllTicketList from "./SpectacleAllTicketList";
import SportAllTicketList from "./SportAllTicketList";

const tabData = [
    {
        label: "Sports",
        value: "sports",
        body: <SportAllTicketList/>,
    },
    {
        label: "Spectacles",
        value: "spectacles",
        body: <SpectacleAllTicketList />,
    }
];
const SearchTickets = () => {
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5">
                <Tab data={tabData} defaultValue={"sports"} />
            </div>
        </>
    );
}

export default SearchTickets;
