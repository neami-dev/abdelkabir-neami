export interface data {
    imgSrc: string;
    title: string;
    tags: string[];
    projectLink: string;
}
import countryip_img from "../../../assets/countryip_img.png";
import evently_img from "../../../assets/evently_img.png";

export const data: data[] = [
    {
        imgSrc: countryip_img,
        title: "countryip",
        tags: ["React js", "TypeScript", "Tailwind","Express js","Mongoose"],
        projectLink: "https://countryip.com",
    },
    {
        imgSrc: evently_img,
        title: "Events App",
        tags: ["Next js", "TypeScript", "Tailwind","Mongoose","Clerk"],
        projectLink: "https://events-platform-psi.vercel.app",
    },
    {
        imgSrc: "https://events-platform-psi.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F549b86e7-4572-4046-9d92-d91d4024e024-6vd2az.png&w=1080&q=75",
        title: "Book Rent App",
        tags: ["React", "Laravel", "API","email: kaido@hotmail.com","password: 12345678"],
        projectLink: "https://system-employee-evaluation.vercel.app/employee/dashboard",
    },
    // {
    //     imgSrc: "https://media.licdn.com/dms/image/v2/D5612AQHBT82XZYHkcQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1726155874629?e=1738195200&v=beta&t=PltiWrMjgyWL-fAtALairn2hyrEMT8dxgbZCJqeKCTw",
    //     title: "Driver License App",
    //     tags: ["C#", "MVC", ".NET"],
    //     projectLink: "https://github.com/DEV-GROUPE/online-store-api",
    // }
];