import React from 'react';
import TicketCard from "../../components/ui/TicketCard";
import moment from "moment";
const Purchased = () => {
    moment("2023-07-11", "YYYY-MM-DD")
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-wrap gap-3 p-5">
                <TicketCard
                    id={"1"}
                    label={"Match France-Allemagne"}
                    price={"150"}
                    type={"sport"}
                    category={"Football"}
                    date={moment("2023-07-11", "YYYY-MM-DD")}
                    city={"Paris"}
                    seller={"Robin"}
                    edit
                    del
                />
                <TicketCard id={"1"} label={"Match France-Allemagne"} type={"sport"}/>
                <TicketCard id={"1"} label={"Match France-Allemagne"} type={"sport"}/>
            </div>
        </>
    );
}

export default Purchased;
