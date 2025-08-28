import ProjectCard from "./ProjectCard";

interface Portfolio {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
}

const Portfolio: Portfolio[] = [
  {
    imgSrc: "/curepase-home.png",
    title: "Healthcare platform",
    tags: ["Next.js", "TypeScript", "appwrite CMS"],
    projectLink: "https://carepluse-jctv.vercel.app",
  },
  {
    imgSrc: "/abx_screenshot.png",
    title: "System mangement fishing",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    projectLink: "",
  },
  {
    imgSrc: "/abxgroup.png",
    title: "ABX Group Website",
    tags: ["Next.js", "Tailwind"],
    projectLink: "https://abxgroup.ma",
  },
  {
    imgSrc: "/rasd.png",
    title: "Rasd - Real Estate Platform",
    tags: ["Next.js", "Tailwind"],
    projectLink: "https://rasd.goto.ma",
  },
  {
    imgSrc: "/countryIp.png",
    title: "Country IP - IP Geolocation",
    tags: ["React", "MongoDB", "Express"],
    projectLink: "https://countryip.com",
  },
  {
    imgSrc: "/abdawater.png",
    title: "Abda Water Industry",
    tags: ["React.js", "Tailwind"],
    projectLink: "https://abdawaterindustry.com/",
  },
  {
    imgSrc: "/evently.png",
    title: "Evently - Events Platform",
    tags: ["Next.js", "mongoose", "Tailwind"],
    projectLink: "https://events-platform-psi.vercel.app/",
  },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section__title">My portfolio highlights</h2>
        <div className="portfolio__grid">
          {Portfolio.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
