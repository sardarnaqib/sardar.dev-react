import React, { useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";

export default function CarouselHolder() {
    const whatIdo = useRef();
    const items = [
        {
            id: 1,
            title: "Design + Development",
            description: `Clean, modern designs - optimized for performance, and converting users to
                customers.`,
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

    return (
        <div
            ref={whatIdo}
            id="what-i-do"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner row w-100 mx-auto text-center">
                {items.map((item) => (
                    <CarouselItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
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
}
