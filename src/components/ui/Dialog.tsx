import React, {ReactElement} from "react";
import {
    Dialog as DialogMtr,
} from "@material-tailwind/react";

export type DialogProps = {
    button: ReactElement | ReactElement[],
    children: ReactElement | ReactElement[],
}

type ChildWithSetOpenProps = {
    onClick: () => void;
};

export function Dialog({button, children }: DialogProps) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    // Pass setOpen and closeModal as props to children
    const buttonWithProps = React.Children.map(button, (child) => {
        if (React.isValidElement(child)) {
            const childProps: ChildWithSetOpenProps = {onClick: handleOpen};
            return React.cloneElement(child, childProps);
        }
        return child;
    });


    return (
        <>
            {buttonWithProps}
            <DialogMtr open={open} handler={handleOpen} className={""}>
                {children}
            </DialogMtr>
        </>
    );
}

export default Dialog;