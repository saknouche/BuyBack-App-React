import React, {ReactElement} from 'react';
import {TabPanel, Tabs, TabsBody, TabsHeader, Tab as TabMtr} from "@material-tailwind/react";

export type TabProps = {
    data: {
            label: string,
            value:string,
            body: ReactElement | ReactElement[],
    }[],
}

const Tab = ({data}: TabProps) => {
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex justify-center items-center">
                <Tabs value="html" className={"flex-1"}>
                    <TabsHeader
                        className={"flex-1 bg-green-primary-200 "}
                        indicatorProps={{
                            className: "bg-green-primary-300",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <TabMtr key={value} value={value} className={"font-semibold"}>
                                {label}
                            </TabMtr>
                        ))}
                    </TabsHeader>
                    <TabsBody className={"flex-1"}>
                        {data.map(({ value, body }) => (
                            <TabPanel key={value} value={value}>
                                {body}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </>
    );
}

export default Tab;
