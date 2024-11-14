import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import DeveloperTools from "./DeveloperTools";

export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <DeveloperTools/>
            </div>
        </section>
    );
}
