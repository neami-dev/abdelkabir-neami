export default function Info() {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experince</h3>
                <span className="about__subtitle">+1 Year</span>
            </div>
            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">12+ Projects</span>
            </div>
            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Availability</h3>
                <span className="about__subtitle">Remote / Freelance</span>
            </div>
        </div>
    );
}
