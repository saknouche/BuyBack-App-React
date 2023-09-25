import React from 'react';
import {useParams} from "react-router-dom";

const BuySpectacleTicket = () => {
    const {id} = useParams();

    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex justify-center items-center flex-col">
                Buy Spectacle Ticket number {id}
            </div>
        </>
    );
}

export default BuySpectacleTicket;
