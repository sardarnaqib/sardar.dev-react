import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledToast = styled.div`
    .toast-header {
        color: #fff;
        display: flex;
        justify-content: space-between;
        .bi-x {
            color: #fff;
            background: none;
            border: none;
            font-size: 1.5rem;
        }
    }
    &.error {
        .toast-header {
            background-color: rgba(220, 53, 69);
        }
        .toast-body {
            background-color: rgba(220, 53, 69, 0.7);
        }
    }
    &.success {
        .toast-header {
            background-color: #198754;
        }
        .toast-body {
            background-color: rgba(25, 135, 84, 0.7);
        }
    }
`;

export const widthToast = (Toast) => {
    return (props) => {
        const [open, setOpen] = React.useState(false);
        const [message, setMessage] = useState("I'm a custom snackbar");
        const [duration, setDuration] = useState(2000);
        const [severity, setSeverity] = useState(
            "success"
        ); /** error | warning | info */

        const showMessage = (
            message,
            severity = "success",
            duration = 2000
        ) => {
            setMessage(message);
            setSeverity(severity);
            setDuration(duration);
            setOpen(true);
        };
        const handleClose = (event, reason) => {
            if (reason === "clickaway") {
                return;
            }
            setOpen(false);
        };
        useEffect(() => {
            setTimeout(() => {
                setOpen(false);
            }, duration);
        }, [open, duration]);
        return (
            <>
                <Toast {...props} toastShowMessage={showMessage} />
                <div
                    className="toast-container position-absolute p-3"
                    style={{
                        bottom: "40px",
                        right: 0,
                    }}
                >
                    <StyledToast
                        className={`toast ${severity} ${open ? "show" : ""}`}
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                    >
                        <div className="toast-header">
                            <small>Just now</small>
                            <button
                                type="button"
                                className="bi bi-x"
                                onClick={handleClose}
                            ></button>
                        </div>
                        <div className="toast-body">{message}</div>
                    </StyledToast>
                </div>
            </>
        );
    };
};
