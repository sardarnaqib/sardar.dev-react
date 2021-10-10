import React from "react";
import BootstrapMultiStepForm from "./BootstrapMultiStepForm";
import { GoBackHome, WhiteBG } from "./Examples";

export default function MultiStepForms() {
    return (
        <WhiteBG className="px-5 py-5">
            <GoBackHome />
            <BootstrapMultiStepForm />
        </WhiteBG>
    );
}
