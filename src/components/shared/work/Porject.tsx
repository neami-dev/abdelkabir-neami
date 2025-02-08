import "./work.css";
interface ProjectCardProps {
    imgSrc: string;
    title: string;
    tags: string[];
    projectLink: string;
    classes?: string;
}
export default function Porject({
    imgSrc,
    title,
    tags,
    projectLink
}: ProjectCardProps) {
    return (
        <div className="project-card">
            <figure className="img-box">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="img-cover"
                />
            </figure>

            <div className="">
                <div>
                    <h3 className="project-card-title">{title}</h3>
                    <div className="project-card-tags">
                        {tags.map((label, key) => (
                            <span key={key} className="project-card-tag">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <a
                    href={projectLink}
                    target="_blank"
                    className="project-card-btn"
                >
                    Demo
                    <i className="uil uil-arrow-right project-card-icon"></i>
                </a>
            </div>
        </div>
    );
}
