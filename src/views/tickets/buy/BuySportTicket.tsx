import React from 'react';
import {useParams} from "react-router-dom";

const BuySportTicket = () => {
    const {id} = useParams();

    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex justify-center items-center flex-col">
                Buy Sport Ticket number {id}
            </div>
        </>
    );
}

export default BuySportTicket;
