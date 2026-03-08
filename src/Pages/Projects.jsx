import ProjectCard from "@/components/ProjectCard"
import Technos from "@/components/Technos"

export default function Projects() {

    const projects = [
        {
            "id": 1,
            "title": "Klivio",
            "img": "img/project-img/Klivio.png",
            "type": "Individuel",
            "description": "Klivio, un site de vente de formations. Premier projet de la première année de formation a la Web Academie de Epitech réalisé avec HTML et CSS",
            "tech": ["HTML", "CSS"],
            "github": "https://github.com/lblrs/lblrs.github.io",
        },

        {
            "id": 2,
            "title": "CV Maker",
            "img": "img/project-img/cv-generator.png",
            "type": "Individuel",
            "description": "CV Maker — Générateur de CV en PHP/JS avec deux templates, formulaire dynamique et export PDF sécurisé via HTMLPurifier.",
            "tech": ["PHP", "JavaScript"],
            "github": "https://github.com/lblrs/cv-generator",
        },

        {
            "id": 3,
            "title": "My Cinema",
            "img": "img/project-img/MyCinema.png",
            "type": "Individuel",
            "description": "MyCinema - Application web de gestion de cinéma en PHP vanilla et JavaScript. Architecture MVC avec une API REST, requêtes PDO préparées et frontend dynamique via fetch() pour administrer films, salles et séances.",
            "tech": ["PHP", "JavaScript"],
            "github": "https://github.com/lblrs/cv-generator",
        },

        {
            "id": 4,
            "title": "Nexus Platform",
            "img": "img/project-img/Connectin.png",
            "type": "Groupe (2)",
            "description": "MyCinema - Application web de gestion de cinéma en PHP vanilla et JavaScript. Architecture MVC avec une API REST, requêtes PDO préparées et frontend dynamique via fetch() pour administrer films, salles et séances.",
            "tech": ["React", "Laravel"],
            "github": "https://github.com/lblrs/Connect-in",
        }
    ]

    return (
        <div id="Projects" className="bg-black min-h-screen flex flex-col items-center">


            <div className="max-w-screen pt-5">
                <Technos></Technos>
            </div>

            <div className=" flex-1 md:m-30">
                <div className="grid md:grid-cols-2 gap-20">
                    {projects.reverse().map((p, index) => (
                        <ProjectCard key={p.id} {...p} index={index}/>
                    ))}
                </div>
            </div>

        </div>
    )
}