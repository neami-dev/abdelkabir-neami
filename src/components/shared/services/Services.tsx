import { useState } from "react";
import "./services.css";

export default function Services() {
    const [toggleState, setToggleState] = useState<number>(0);

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
                                I specialize in building high-quality,
                                user-friendly, and responsive web applications
                                tailored to your business needs — from frontend
                                design to backend logic.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Developing fast, responsive websites
                                        optimized for all devices and browsers.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Building secure and scalable backends
                                        with RESTful APIs using modern stacks.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integrating frontend and backend
                                        smoothly for seamless and intuitive UX.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            API Development & Integration
                        </h3>
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
                                API Development & Integration
                            </h3>
                            <p className="services__modal-description">
                                Designing and building RESTful APIs optimized
                                for performance and scalability, such as
                                CountryIP.com public API.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creating APIs that provide detailed
                                        geo-location, languages, and currency
                                        data.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Ensuring high availability and low
                                        latency for public-facing services
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integrating third-party services and
                                        APIs to enrich functionality.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-comments-alt services__icon"></i>
                        <h3 className="services__title">
                            Corporate Website & SEO
                        </h3>
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
                                Corporate Website & SEO
                            </h3>
                            <p className="services__modal-description">
                                Building responsive, SEO-friendly corporate
                                websites that enhance brand presence and client
                                engagement, such as ABX Group.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creating responsive layouts optimized
                                        for all devices.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Optimizing content and structure for
                                        better search engine rankings.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Improving user experience and
                                        accessibility.
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
