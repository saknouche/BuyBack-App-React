import React from 'react';
import {useForm} from "react-hook-form";
import {UserAuth} from "../models/UserModel";
import classNames from "classnames";
import SearchAutocomplete from "../components/views/home/SearchAutocomplete";

const Home = () => {
    const form = useForm<UserAuth>()

    const submit = (data: UserAuth) => {}

    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-col">
                <div className={"py-20 bg-green-primary-400 flex flex-col justify-center items-center gap-10"}>
                    <div className={"flex-1 flex flex-col justify-end items-center gap-3 px-5"}>
                        <div className="text-5xl sm:text-5xl font-bold select-none flex flex-col justify-center items-center">
                            <div>Welcome to BUY<span className="text-green-primary-50">BACK</span></div>
                        </div>
                        <div className="text-xl flex justify-center items-center">
                            The best app for reselling or buying event tickets.
                        </div>
                    </div>

                    <div
                        onSubmit={form.handleSubmit(submit)}
                        className={classNames("flex-1 w-full bg-green-primary-400 flex flex-col justify-center items-center",
                            "px-4 sm:px-16 md:px-28 lg:px-60 xl:px-80 2xl:px-96"
                        )}
                    >
                        <SearchAutocomplete />
                    </div>
                </div>

                <div className="py-20 bg-green-primary-50 flex flex-col">

                </div>
                <div className="py-20 bg-green-primary-50 flex flex-col">

                </div>
                <div className="py-20 bg-green-primary-50 flex flex-col">

                </div>
                <div className="py-20 bg-green-primary-50 flex flex-col">

                </div>
            </div>
        </>
    );
}

export default Home;
