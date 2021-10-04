import React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import { StyledAnchor } from "./Header";
import Skeleton from "./Skeleton";
import { withToast } from "./Toast";

function validateEmail(email) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(String(email).toLowerCase());
}
const InvalidMessage = styled.div`
    font-size: 14px;
    color: #8a8a8a;
    &.error {
        color: ${(props) => {
            // @ts-ignore
            return props.theme.error;
        }};
    }
`;
const StyledInput = styled.input`
    border: 2px solid #ced4da;
    &.is-invalid {
        border: 2px solid
            ${(props) => {
                // @ts-ignore
                return props.theme.error;
            }};
    }
`;
const StyledTextArea = styled.textarea`
    border: 2px solid #ced4da;
    &.is-invalid {
        border: 2px solid
            ${(props) => {
                // @ts-ignore
                return props.theme.error;
            }};
    }
`;

const Contact = ({ add_to_ref: addToRef, t, tReady, ...props }) => {
    const [form, setForm] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = React.useState([]);
    const [formSubmitting, setFormSubmitting] = React.useState(false);
    const hasError = (key) => {
        return errors.indexOf(key) !== -1;
    };
    const handleOnBlur = (event) => {
        validateOnTouchAndBlur(event);
    };
    const validateOnTouchAndBlur = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            if (!validateEmail(value)) {
                setErrors([...errors, name]);
            } else {
                setErrors(errors.filter((e) => e !== name));
            }
        } else if (value === "") {
            setErrors([...errors, name]);
        } else {
            setErrors(errors.filter((e) => e !== name));
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        validateOnTouchAndBlur(e);
        let obj = { ...form };
        obj[name] = value;
        setForm(obj);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitting(true);
        let errors = [];
        if (form.firstName === "") errors.push("firstName");
        if (form.lastName === "") errors.push("lastName");
        if (!validateEmail(form.email)) errors.push("email");
        if (form.message === "") errors.push("message");
        setErrors(errors);

        if (errors.length > 0) {
            setFormSubmitting(false);
            return false;
        } else {
            let url = "./contact.php";
            fetch(url, {
                method: "POST",
                body: JSON.stringify(form),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (!data.emailSended) {
                        props.toastShowMessage(
                            t("contact_me.helper_text.email_send_error"),
                            "error",
                            5000
                        );
                    } else {
                        props.toastShowMessage(
                            t("contact_me.helper_text.email_send_success"),
                            "success",
                            5000
                        );
                    }
                    setForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        message: "",
                    });
                    setFormSubmitting(false);
                })
                .catch((error) => {
                    console.log(error);
                    props.toastShowMessage(
                        t("contact_me.helper_text.email_send_error"),
                        "error",
                        5000
                    );
                    setForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        message: "",
                    });
                    setFormSubmitting(false);
                });
        }
    };
    return (
        <section className="nq-contact" id="nq-contact">
            <div className="container">
                <div className="row">
                    <div className="w-100 py-3 text-center position-relative">
                        <h1 className="title text-uppercase">
                            {!tReady ? (
                                <Skeleton
                                    width="150px"
                                    height="40px"
                                    style={{ margin: "auto" }}
                                />
                            ) : (
                                t("contact_me.title")
                            )}
                        </h1>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <form className="row g-3 needs-validation" noValidate>
                            <div className="col-md-6">
                                <label
                                    htmlFor="firstName"
                                    className="form-label"
                                >
                                    {!tReady ? (
                                        <Skeleton width="100px" height="20px" />
                                    ) : (
                                        t("contact_me.first_name")
                                    )}
                                </label>
                                <StyledInput
                                    type="text"
                                    className={
                                        hasError("firstName")
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="firstName"
                                    value={form.firstName}
                                    name="firstName"
                                    required
                                    onChange={handleOnChange}
                                    onBlur={handleOnBlur}
                                />
                                {/* <div className="valid-feedback">Looks good!</div> */}
                                <InvalidMessage
                                    className={hasError("firstName") && "error"}
                                >
                                    {hasError("firstName") ? (
                                        t(
                                            "contact_me.helper_text.first_name_error"
                                        )
                                    ) : !tReady ? (
                                        <Skeleton
                                            width="50%"
                                            height="10px"
                                            style={{ marginTop: "5px" }}
                                        />
                                    ) : (
                                        t("contact_me.helper_text.first_name")
                                    )}
                                </InvalidMessage>
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="lastName"
                                    className="form-label"
                                >
                                    {!tReady ? (
                                        <Skeleton width="100px" height="20px" />
                                    ) : (
                                        t("contact_me.last_name")
                                    )}
                                </label>
                                <StyledInput
                                    type="text"
                                    className={
                                        hasError("lastName")
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    onBlur={handleOnBlur}
                                    id="lastName"
                                    name="lastName"
                                    value={form.lastName}
                                    required
                                    onChange={handleOnChange}
                                />
                                <InvalidMessage
                                    className={hasError("lastName") && "error"}
                                >
                                    {hasError("lastName") ? (
                                        t(
                                            "contact_me.helper_text.last_name_error"
                                        )
                                    ) : !tReady ? (
                                        <Skeleton
                                            width="50%"
                                            height="10px"
                                            style={{ marginTop: "5px" }}
                                        />
                                    ) : (
                                        t("contact_me.helper_text.last_name")
                                    )}
                                </InvalidMessage>
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="email" className="form-label">
                                    {!tReady ? (
                                        <Skeleton width="100px" height="20px" />
                                    ) : (
                                        t("contact_me.email")
                                    )}
                                </label>
                                <StyledInput
                                    type="email"
                                    className={
                                        hasError("email")
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    onBlur={handleOnBlur}
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    required
                                    onChange={handleOnChange}
                                />
                                <InvalidMessage
                                    className={hasError("email") && "error"}
                                >
                                    {hasError("email") ? (
                                        t("contact_me.helper_text.email_error")
                                    ) : !tReady ? (
                                        <Skeleton
                                            width="50%"
                                            height="10px"
                                            style={{ marginTop: "5px" }}
                                        />
                                    ) : (
                                        t("contact_me.helper_text.email")
                                    )}
                                </InvalidMessage>
                            </div>
                            <div className="col-12">
                                <label
                                    className="form-check-label"
                                    htmlFor="message"
                                >
                                    {!tReady ? (
                                        <Skeleton width="100px" height="20px" />
                                    ) : (
                                        "Message"
                                    )}
                                </label>
                                <StyledTextArea
                                    className={
                                        hasError("message")
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    placeholder={
                                        !tReady
                                            ? "Loading...."
                                            : t(
                                                  "contact_me.helper_text.message_place_holder"
                                              )
                                    }
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    required
                                    onChange={handleOnChange}
                                    onBlur={handleOnBlur}
                                    rows={5}
                                    cols={30}
                                />
                                <InvalidMessage
                                    className={hasError("message") && "error"}
                                >
                                    {hasError("message") ? (
                                        t(
                                            "contact_me.helper_text.message_error"
                                        )
                                    ) : !tReady ? (
                                        <Skeleton
                                            width="50%"
                                            height="10px"
                                            style={{ marginTop: "5px" }}
                                        />
                                    ) : (
                                        t("contact_me.helper_text.message")
                                    )}
                                </InvalidMessage>
                            </div>
                            <div className="col-12">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                    disabled={formSubmitting}
                                >
                                    {formSubmitting && (
                                        <div
                                            className="spinner-border spinner-border-sm me-3"
                                            role="status"
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    )}
                                    <span>
                                        {!tReady
                                            ? "Loading..."
                                            : t(
                                                  "contact_me.helper_text.button_text"
                                              )}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12 col-lg-6 pt-4">
                        <div className="px-3">
                            <div
                                ref={addToRef}
                                className="icon-holder d-flex justify-content-between align-items-center animated"
                            >
                                <i className="bi bi-envelope-fill"></i>
                                <StyledAnchor href="mailto:">
                                    sarkhan.naqib@gmail.com
                                </StyledAnchor>
                            </div>
                            <div
                                ref={addToRef}
                                className="icon-holder d-flex justify-content-between align-items-center animated"
                            >
                                <i className="bi bi-phone-fill"></i>
                                <p>+33 7 78 05 84 48</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withTranslation()(withToast(Contact));
