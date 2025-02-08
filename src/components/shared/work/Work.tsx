import "./work.css";
import Porject from "./Porject.tsx";
import { data } from "./data.ts";
export default function Work() {
    return (
        <section className="work section" id="portfolio">
            <h3 className="section__title">Projects</h3>
            <span className="section__subtitle">Most recent works</span>

            <div className="work__container container grid">
                <div className="work__content">
                    {data.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <Porject
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes={"reveal-up"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
