import React, {ReactElement} from 'react';
import {TabPanel, Tabs, TabsBody, TabsHeader, Tab as TabMtr} from "@material-tailwind/react";

export type TabProps = {
    data: {
            label: string,
            value:string,
            body: ReactElement | ReactElement[],
    }[],
    defaultValue: string;
}

const Tab = ({data, defaultValue}: TabProps) => {
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex justify-center items-center">
                <Tabs value={defaultValue} className={"flex-1"}>
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
                    <TabsBody
                        className={"flex-1"}
                        animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
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
