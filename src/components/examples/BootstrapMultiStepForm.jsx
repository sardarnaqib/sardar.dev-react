import React from "react";
import { Formik, Form as FormiForm, useField } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export default function BootstrapMultiStepForm() {
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({});

    const InputGroup = ({ helperText, label, ...props }) => {
        // @ts-ignore
        const [field, meta] = useField(props);

        return (
            <div>
                <div className="form-group mb-3">
                    <div className="form-label">{label}</div>
                    <input
                        className={
                            meta.touched && meta.error
                                ? "is-invalid form-control"
                                : "form-control"
                        }
                        {...field}
                        {...props}
                    />
                    <div
                        className={
                            meta.touched && meta.error
                                ? "invalid-feedback"
                                : "form-text"
                        }
                    >
                        {meta.touched && meta.error ? meta.error : helperText}
                    </div>
                </div>
            </div>
        );
    };
    const handleSubmit = (values, helpers) => {
        setShowResult(true);
        setResult(values);
    };

    return (
        <div className="container pt-5">
            <div className="h1">Bootstrap MultiStep Form</div>
            <p>
                Bootstap Multi steps form with help of formik and yup validation
            </p>
            <div className="row">
                <div className="cold-md-6 mx-auto">
                    <FormikStepper
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phoneNumber: "",
                        }}
                        onSubmit={handleSubmit}
                    >
                        <FormikStep
                            // @ts-ignore
                            validationSchema={Yup.object().shape({
                                firstName: Yup.string().required(
                                    "First name is required!"
                                ),
                                lastName: Yup.string().required(
                                    "Last name is required!"
                                ),
                            })}
                        >
                            <InputGroup
                                placeholder="Your first name"
                                name="firstName"
                                type="text"
                                label="First Name"
                                helperText="Please write your first name"
                            />
                            <InputGroup
                                placeholder="Your last name"
                                name="lastName"
                                type="text"
                                label="Last Name"
                                helperText="Please write your last name"
                            />
                        </FormikStep>
                        <FormikStep
                            // @ts-ignore
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email("Your shoud write a valid email")
                                    .required("Email is required!"),
                                phoneNumber: Yup.string()
                                    .required("Phone number is required")
                                    .matches(
                                        /^\d+$/,
                                        "You shoul write a valid number"
                                    ),
                            })}
                        >
                            <InputGroup
                                name="email"
                                placeholder="Your email"
                                label="Email"
                                type="email"
                                helperText="Please write your email"
                            />
                            <InputGroup
                                name="phoneNumber"
                                placeholder="Your phone number"
                                label="Phone Number"
                                type="text"
                                helperText="Please write your phone number"
                            />
                        </FormikStep>
                    </FormikStepper>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    {showResult && (
                        <pre>
                            <code>{JSON.stringify(result, undefined, 4)}</code>
                        </pre>
                    )}
                </div>
            </div>
        </div>
    );
}

const FormikStep = ({ children }) => {
    return <>{children}</>;
};

const FormikStepper = ({ children, ...props }) => {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);

    const isLastStep = step === childrenArray.length - 1;
    const currentStep = childrenArray[step];

    const handleSubmit = async (values, helpers) => {
        console.log(values);
        if (isLastStep) {
            await props.onSubmit(values, helpers);
        } else {
            setStep((prev) => prev + 1);
            helpers.setTouched({});
        }
    };
    const handleBack = () => {
        setStep((prev) => prev - 1);
    };
    return (
        <Formik
            {...props}
            initialValues={props.initialValues}
            onSubmit={handleSubmit}
            // @ts-ignore
            validationSchema={currentStep.props.validationSchema}
        >
            <FormiForm className="needs-validation" noValidate>
                {currentStep}
                <div className="d-flex justify-content-between">
                    <button
                        onClick={handleBack}
                        className="btn btn-primary"
                        disabled={step === 0}
                    >
                        Back
                    </button>
                    <button type="submit" className="btn btn-primary">
                        {isLastStep ? "Submit" : "Next"}
                    </button>
                </div>
            </FormiForm>
        </Formik>
    );
};
