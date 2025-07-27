import "./portfolio.css";
interface ProjectCardProps {
    imgSrc: string;
    title: string;
    tags: string[];
    projectLink: string;
}
function ProjectCard({ imgSrc, title, tags, projectLink }: ProjectCardProps) {
    return (
        <div className="portfolio__container">
            <figure className="img-box">
                <img src={imgSrc} alt={title} loading="lazy" />
            </figure>

            <div className="card">
                <div>
                    <h3>{title}</h3>
                    <div className="tags">
                        {tags.map((label, key) => (
                            <span key={key}>{label}</span>
                        ))}
                    </div>
                </div>

                <div className="arrow_outward">
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>

                <a
                    href={projectLink}
                    target="_blank"
                    className=""
                ></a>
            </div>
        </div>
    );
}

export default ProjectCard;
