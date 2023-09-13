import React, {useEffect} from 'react';
import {TestService} from "../services/Test";

const TestView = () => {

    useEffect(() => {
        const testService = new TestService();

        testService.testUser()
            ?.then((e) => {
                console.log(e.data)
            })
            .catch((error) => {
                console.log(error.response);
            });

        testService.testAdmin()
            ?.then((e) => {
                console.log(e.data)
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-col justify-center items-center">
                <div className={"text-2xl font-bold"}>PAGE DE TEST</div>
            </div>
        </>
    );
}

export default TestView;
