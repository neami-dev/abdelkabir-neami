import { useState } from "react";
import "./qualification.css";
export default function Qualification() {
    const [toggleState, setToggleState] = useState<number>(1);
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => setToggleState(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => setToggleState(2)}
                    >
                        <i className="uil uil-briefcase qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-avtive"
                                : "qualification__content"
                        }
                    >
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Web design
                                </h3>
                                <span className="qualification__subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt qualification__icon"></i>{" "}
                                    2022 - personal
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Art director
                                </h3>
                                <span className="qualification__subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>{" "}
                                    2022 - personal
                                </div>
                            </div>
                        </div> */}

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Specialized Technician in Full Stack
                                    Development
                                </h3>
                                <span className="qualification__subtitle">
                                    ISTA NTIC SAFI
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt qualification__icon"></i>{" "}
                                    2022 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Scientific Baccalaureate in Life and Earth
                                    Sciences,
                                </h3>
                                <span className="qualification__subtitle">
                                    Ibn khaldoun
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt qualification__icon"></i>{" "}
                                    2021 - 2022
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-avtive"
                                : "qualification__content"
                        }
                    >
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Product Designer
                                </h3>
                                <span className="qualification__subtitle">
                                    Microsoft - Spain
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt qualification__icon"></i>{" "}
                                    2022 - personal
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Full stack developer
                                </h3>
                                <span className="qualification__subtitle">
                                    SALVIA
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt qualification__icon"></i>{" "}
                                    December 2024 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Full Stack Developer Trainee – Wenear
                                    Services
                                </h3>
                                <span className="qualification__subtitle">
                                    Safi, Morocco
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt qualification__icon"></i>{" "}
                                    March 2024 - Junuary 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
