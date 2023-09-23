import React, { ReactElement, memo } from "react";
import useExpiringState from "./useexpiringstate";
import {Alert as RBAlert} from "react-bootstrap";

interface alertProps {
    defaultValue?: string;
    delay?: number;
    variant?: string;
    dismissible?: boolean;
}

interface alertReturnType {
    message: string;
    setMessage: (message: string) => void;
    Alert: React.FC;
}

const useAlert = (props: alertProps): alertReturnType => {
    const [message, setMessage] = useExpiringState(
        props.defaultValue ?? "",
        props.delay || 4000
    );

    const DisplayAlert = (): ReactElement => {
        return (
            <RBAlert
                show={message !== ""}
                variant={props.variant ?? "danger"}
                transition={true}
                dismissible={props.dismissible ?? false}
            >
                {message}
            </RBAlert>
        );
    };

    const Alert = memo(DisplayAlert);

    return { message, setMessage, Alert };
};

export default useAlert;