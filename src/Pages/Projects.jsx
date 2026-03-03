import ProjectCard from "@/components/ProjectCard"
import Technos from "@/components/Technos"

export default function Projects() {

    const projects = [
        {
            "id": 1,
            "title": "Klivio",
            "img": "public/img/project-img/Klivio.png",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos assumenda alias pariatur ducimus enim, velit nulla saepe nesciunt architecto illo dolores rem nemo, cupiditate fugit provident reprehenderit aspernatur corporis!",
            "tech": ["HTML", "CSS"],
            "github": "https://github.com/dashboard",
            "demo": "https://lblrs.github.io/"
        },

        {
            "id": 2,
            "title": "Klivio",
            "img": "public/img/project-img/Klivio.png",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos assumenda alias pariatur ducimus enim, velit nulla saepe nesciunt architecto illo dolores rem nemo, cupiditate fugit provident reprehenderit aspernatur corporis!",
            "tech": ["HTML", "CSS"],
            "github": "https://github.com/dashboard",
            "demo": "https://lblrs.github.io/"
        },

        {
            "id": 3,
            "title": "Klivio",
            "img": "public/img/project-img/Klivio.png",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos assumenda alias pariatur ducimus enim, velit nulla saepe nesciunt architecto illo dolores rem nemo, cupiditate fugit provident reprehenderit aspernatur corporis!",
            "tech": ["HTML", "CSS"],
            "github": "https://github.com/dashboard",
            "demo": "https://lblrs.github.io/"
        }
    ]

    return (
        <div id="Projects" className="bg-black min-h-screen flex flex-col items-center">

            <Technos></Technos>

            <div className=" flex-1 m-10 mx-50">
                <div className="grid md:grid-cols-3 gap-50 p-10">
                    {projects.map(p => (
                        <ProjectCard key={p.id} {...p} />
                    ))}
                </div>
            </div>  

        </div>
    )
}