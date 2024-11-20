import { useState } from "react";
import "./services.css";

export default function Services() {
    const [toggleState, setToggleState] = useState<Number>(0);

    return (
        <section className="services section " id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Web Development</h3>
                    </div>
                    <span
                        className="services__button"
                        onClick={() => setToggleState(1)}
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div
                        className={
                            toggleState === 1
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => setToggleState(0)}
                            ></i>
                            <h3 className="services__modal-title">
                                Web Development
                            </h3>
                            <p className="services__modal-description">
                                I have experience providing high-quality web
                                development services. I focus on creating
                                interactive, user-friendly, and responsive web
                                applications that meet your business needs.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Developing responsive and interactive
                                        websites that are optimized for all
                                        devices.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Building robust backend systems and
                                        RESTful APIs using the latest
                                        technologies.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Ensuring smooth integration between the
                                        front-end and back-end, creating
                                        seamless user experiences.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UI/UX Design</h3>
                    </div>
                    <span
                        className="services__button"
                        onClick={() => setToggleState(2)}
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div
                        className={
                            toggleState === 2
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => setToggleState(0)}
                            ></i>
                            <h3 className="services__modal-title">
                                UI/UX Design
                            </h3>
                            <p className="services__modal-description">
                                I specialize in creating beautiful,
                                user-centered designs that improve usability and
                                provide delightful experiences for users.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Designing user interfaces that are both
                                        aesthetically pleasing and easy to
                                        navigate.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Conducting user research to ensure
                                        designs meet the needs and expectations
                                        of the target audience.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creating wireframes, prototypes, and
                                        interactive mockups to showcase design
                                        ideas effectively.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-comments-alt services__icon"></i>
                        <h3 className="services__title">Consulting</h3>
                    </div>
                    <span
                        className="services__button"
                        onClick={() => setToggleState(3)}
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div
                        className={
                            toggleState === 3
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => setToggleState(0)}
                            ></i>
                            <h3 className="services__modal-title">
                                Consulting
                            </h3>
                            <p className="services__modal-description">
                                I provide expert advice and strategy to help
                                businesses leverage technology for better
                                performance and growth.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Offering guidance on technology stack
                                        selection and system architecture
                                        design.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Advising on digital transformation
                                        strategies and helping businesses adapt
                                        to the digital landscape.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Providing solutions for performance
                                        optimization, scalability, and security
                                        of web applications.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
