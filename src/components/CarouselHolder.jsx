import React, { useEffect, useRef } from "react";
import { withTranslation } from "react-i18next";
import CarouselItem from "./CarouselItem";
import Skeleton from "./Skeleton";

const CarouselHolder = ({ t, tReady }) => {
    const whatIdo = useRef();
    const items = [
        {
            id: 1,
            icon: <i className="bi bi-pencil-square"></i>,
        },
        {
            id: 2,
            title: "Ecommerce",
            description: `Integration of eCommerce platforms, payment gateways, custom product templates, and
                more.`,
            icon: <i className="bi bi-cart3"></i>,
        },
        {
            id: 3,
            title: "Analytics",
            description: `Get insights into who is browsing your site so that you can make smarter business
                decisions.`,
            icon: <i className="bi bi-graph-up"></i>,
        },
        {
            id: 4,
            title: "Mobile-friendly",
            description: `A responsive design makes your website accessible to all users, regardless of their
                device.`,
            icon: <i className="bi bi-phone"></i>,
        },
        {
            id: 5,
            title: "Website Audits",
            description: `Looking to improve your page performance, or user experience? get in touch.`,
            icon: <i className="bi bi-speedometer2"></i>,
        },
        {
            id: 6,
            title: "Content managment system",
            description: `Want to have CMS Content Management System to create, manage your contents and optimize your customers digital experiance `,
            icon: <i className="bi bi-gear-fill"></i>,
        },
    ];

    useEffect(() => {
        // get index of a child
        function indexInParent(node) {
            var children = node.parentNode.childNodes;
            var num = 0;
            for (var i = 0; i < children.length; i++) {
                if (children[i] === node) return num;
                if (children[i].nodeType === 1) num++;
            }
            return -1;
        }
        const carouselItems = document.querySelectorAll(
            ".carousel-inner .carousel-item"
        );
        // @ts-ignore
        // Event is triggered with carousel slide
        whatIdo.current.addEventListener("slide.bs.carousel", (el) => {
            let element = el.relatedTarget;
            let itemsPerSlide = 4;
            let index = indexInParent(element);

            if (index >= carouselItems.length - (itemsPerSlide - 1)) {
                let it = itemsPerSlide - (carouselItems.length - index);
                for (let i = 0; i < it; i++) {
                    if (el.direction === "left") {
                        let currentElement = document.querySelectorAll(
                            ".carousel-item"
                        )[i];
                        currentElement.parentElement.appendChild(
                            currentElement
                        );
                    } else {
                        let currentElement = document.querySelectorAll(
                            ".carousel-item"
                        )[0];
                        currentElement.parentElement.appendChild(
                            currentElement
                        );
                    }
                }
            }
        });
    }, []);
    const WhatIdoSkeleton = (props) => {
        return (
            <div {...props}>
                <Skeleton
                    className="d-flex flex-column justify-centent-center align-items-center py-5"
                    width="100%"
                    height="100%"
                >
                    <div style={{ marginBottom: "10px" }}>
                        <Skeleton width="50px" height="50px" />
                    </div>
                    <Skeleton width="80%" height="40px" />
                    <div style={{ marginTop: "20px" }}>
                        {[...Array(6)].map((_, index) => (
                            <Skeleton
                                key={index}
                                width="300px"
                                height="10px"
                                className="mb-2"
                            />
                        ))}
                    </div>
                </Skeleton>
            </div>
        );
    };
    return (
        <div
            ref={whatIdo}
            id="what-i-do"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner row w-100 mx-auto text-center">
                {!tReady
                    ? items.map((item, index) => (
                          <WhatIdoSkeleton
                              key={index}
                              className={`carousel-item col-12 col-md-6 col-lg-4 ${
                                  item.id === 1 ? "active" : ""
                              }`}
                          />
                      ))
                    : items.map((item, index) => (
                          <CarouselItem
                              key={item.id}
                              title={
                                  t(`what_i_do`, {
                                      returnObjects: true,
                                  }).can_do[index].title
                              }
                              description={
                                  t(`what_i_do`, {
                                      returnObjects: true,
                                  }).can_do[index].description
                              }
                              icon={item.icon}
                              className={`carousel-item col-12 col-md-6 col-lg-4 ${
                                  item.id === 1 ? "active" : ""
                              }`}
                          />
                      ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#what-i-do"
                data-bs-slide="prev"
            >
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#what-i-do"
                data-bs-slide="next"
            >
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default withTranslation()(CarouselHolder);
