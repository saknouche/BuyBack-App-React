import React from 'react';
import LoadingIcon from "../../assets/svg/loading.svg";

const Loading = () => {
    return (
        <>
            <div className={"flex justify-center items-center w-full flex-1 h-full"}>
                <img src={LoadingIcon} alt={""} className={"animate-spin h-20"}/>
            </div>
        </>
    );
}

export default Loading;
