import React, { useEffect, useRef, useState } from "react";
import "./scss/App.scss";
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import { dark, GlobalStyles, light } from "./theme";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { getCookie } from "./components/Language";

const StyledApp = styled.div`
    color: ${(props) => props.theme.color};
`;
// const StyledChatBot = styled.div`
//     position: fixed;
//     bottom: 50px;
//     right: 50px;
//     z-index: 999999;
// `;
// const chatBotTheme = {
//     background: "#f5f8fb",
//     // fontFamily: "Helvetica Neue",
//     headerBgColor: "#ff6f61",
//     headerFontColor: "#fff",
//     headerFontSize: "15px",
//     botBubbleColor: "#ff6f61",
//     botFontColor: "#fff",
//     userBubbleColor: "#fff",
//     userFontColor: "#4a4a4a",
// };
// TODO before making it to produce change email settings (headers) in php file
function App() {
    const sections = useRef([]);
    sections.current = [];

    const addToRef = (el) => {
        if (el && !sections.current.includes(el)) {
            sections.current.push(el);
        }
    };
    let currentTheme = getCookie("theme") || "dark";
    const [theme, setTheme] = React.useState(currentTheme);
    const themeToggler = () => {
        // set theme cookie to light or dark
        document.cookie = `theme=${theme === "light" ? "dark" : "light"}`;
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    useEffect(() => {
        // add class to all ref elements
        document.cookie = `theme=${theme}`;
        const sectionOptions = {
            root: null,
            threshold: 0.25,
            rootMargin: "-80px",
        };
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("fadeInUp");
                }
            });
        }, sectionOptions);
        sections.current.forEach((section) => {
            sectionObserver.observe(section);
        });
    }, []);
    // function validateEmail(email) {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }

    // const chatBotSteps = [
    //     {
    //         id: "1",
    //         message: "Thank you for visiting!",
    //         trigger: "2",
    //         waitAction: true,
    //     },
    //     {
    //         id: "2",
    //         message: "Can i know about you?",
    //         trigger: "3",
    //     },
    //     {
    //         id: "3",
    //         options: [
    //             { value: "yes", label: "Yes", trigger: "name" },
    //             { value: "no", label: "No", trigger: "sorry" },
    //         ],
    //     },
    //     {
    //         id: "sorry",
    //         message:
    //             "Sorry to hear that you can close the chat have a nice time!",
    //         trigger: "changed",
    //     },
    //     {
    //         id: "changed",
    //         message:
    //             "If you have changed your mind You can click Yes Or you can close the chat",
    //         trigger: "3",
    //     },
    //     {
    //         id: "name",
    //         message: "What is your name?",
    //         trigger: "resName",
    //     },
    //     {
    //         id: "resName",
    //         user: true,
    //         trigger: "4",
    //     },
    //     {
    //         id: "4",
    //         message: "Hi {previousValue}, nice to meet you!",
    //         trigger: "email",
    //     },
    //     {
    //         id: "email",
    //         message: "What's your email?",
    //         trigger: "resEmail",
    //     },
    //     {
    //         id: "resEmail",
    //         user: true,
    //         validator: (value) => {
    //             if (validateEmail(value)) {
    //                 return true;
    //             }
    //             return "Please write a valid email.";
    //         },
    //         trigger: "message",
    //     },
    //     {
    //         id: "message",
    //         message: "Please leave your message to Sardar",
    //         trigger: "resMessage",
    //     },
    //     // {
    //     //     id: "yesNoOptions",
    //     //     options: [
    //     //         { value: "yes", label: "Yes", trigger: "resMessage" },
    //     //         { value: "no", label: "No", trigger: "endChat" },
    //     //     ],
    //     // },
    //     {
    //         id: "resMessage",
    //         user: true,
    //         inputAttributes: {
    //             type: "textarea",
    //             rows: 10,
    //         },
    //         trigger: "endChat",
    //     },
    //     {
    //         id: "endChat",
    //         message: "Thanks Your message has been submitted successfully!",
    //         end: true,
    //     },
    // ];

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}>
            <GlobalStyles />
            <StyledApp>
                <Header toggle_button={themeToggler} theme={theme} />
                <Home add_to_ref={addToRef} />
                <About add_to_ref={addToRef} />
                <Skills add_to_ref={addToRef} />
                <Portfolio add_to_ref={addToRef} />
                <Contact add_to_ref={addToRef} />
                <Footer />
                {/* <ThemeProvider theme={chatBotTheme}>
                    <StyledChatBot>
                        <ChatBot steps={chatBotSteps} floating />
                    </StyledChatBot>
                </ThemeProvider> */}
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
