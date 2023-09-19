import React from 'react';
import {Link} from "react-router-dom";

const SellTicket = () => {
    return (
        <>
            <div className="flex-1 w-full bg-green-primary-50 flex p-5 gap-3 flex-wrap">

                <Link to={"sport/new"}>
                    <div className={"p-2 rounded-lg bg-green-primary-500 flex justify-center items-center hover:bg-green-primary-600"}>
                        <div className={"text-4xl font-semibold flex-1 rounded-md p-8 bg-green-primary-400 text-green-primary-50 flex justify-center items-center"}>
                            Sport
                        </div>
                    </div>
                </Link>

                <Link to={"spectacle/new"}>
                    <div className={"p-2 rounded-lg bg-green-primary-500 flex justify-center items-center hover:bg-green-primary-600"}>
                        <div className={"text-4xl font-semibold flex-1 rounded-md p-8 bg-green-primary-400 text-green-primary-50 flex justify-center items-center"}>
                            Spectacle
                        </div>
                    </div>
                </Link>

            </div>
        </>
    );
}

export default SellTicket;
