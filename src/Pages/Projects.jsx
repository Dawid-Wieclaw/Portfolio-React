import ProjectCard from "@/components/ProjectCard"
import Technos from "@/components/Technos"


export default function Projects() {

    const projects = [
        {
            "id": 1,
            "title": "Klivio",
            "img": "img/Klivio.png",
            "type": "Individuel",
            "description": "Klivio, un site de vente de formations. Premier projet de la première année de formation a la Web Academie de Epitech réalisé avec HTML et CSS",
            "tech": ["HTML", "CSS"],
            "github": "https://github.com/lblrs/lblrs.github.io",
        },

        {
            "id": 2,
            "title": "Klivio 2",
            "img": "img/Klivio2.png",
            "type": "Individuel",
            "description": "Deuxième partie du premier projet de la formation, Klivio 2 — design libre réalisé en HTML et Tailwind.",
            "tech": ["HTML", "TAILWIND"],
            "github": "https://github.com/lblrs/klivio-2",
        },

        {
            "id": 3,
            "title": "Portfolio",
            "img": "img/Portfolio.png",
            "type": "Individuel",
            "description": "Portfolio personnel réalisé avec Jekyll, un générateur de sites statiques en Ruby. Déployé sur GitHub Pages avec un design minimaliste et responsive.",
            "tech": ["JEKYLL"],
            "github": "https://github.com/lblrs/Portfolio",
        },

        {
            "id": 4,
            "title": "CV Maker",
            "img": "img/cv-generator.png",
            "type": "Individuel",
            "description": "CV Maker — Générateur de CV en PHP/JS avec deux templates, formulaire dynamique et export PDF sécurisé via HTMLPurifier.",
            "tech": ["PHP", "JavaScript", "HTML", "BOOTSTRAP"],
            "github": "https://github.com/lblrs/cv-generator",
        },

        {
            "id": 5,
            "title": "Snake",
            "img": "img/Snake.png",
            "type": "Personnel",
            "description": "Snake — Mini jeu classique développé en JavaScript vanilla pour pratiquer la manipulation du DOM, la gestion des événements clavier et la logique de jeu.",
            "tech": ["JavaScript"],
            "github": "https://github.com/lblrs/TheSnakeGame",
        },

        {
            "id": 6,
            "title": "My Cinema",
            "img": "img/MyCinema.png",
            "type": "Individuel",
            "description": "MyCinema - Application web de gestion de cinéma en PHP vanilla et JavaScript. Architecture MVC avec une API REST, requêtes PDO préparées et frontend dynamique via fetch() pour administrer films, salles et séances.",
            "tech": ["PHP", "JavaScript", "HTML", "CSS"],
            "github": "https://github.com/lblrs/my-cinema",
        },

        {
            "id": 7,
            "title": "Nexus Platform",
            "img": "img/Connectin.png",
            "type": "Groupe (2)",
            "description": "Nexus Platform — Projet de groupe, mini réseau social destiné aux entreprises pour faciliter la communication interne entre employés. Première découverte des frameworks Laravel et React, avec une API REST côté back-end et une interface dynamique côté front-end.",
            "tech": ["React", "Laravel", "TAILWIND"],
            "github": "https://github.com/lblrs/Connect-in",
        }
    ]

    return (
        <div id="Projects" className="bg-black min-h-screen flex flex-col items-center">


            <div className="max-w-screen pt-5">
                <Technos></Technos>
            </div>

            <h2 className="mt-10 mb-16 text-5xl font-bold text-gray-300">Projets</h2>

            <div className=" flex-1 lg:mx-50 md:mx-16 mx-5">
                <div className="grid 2xl:grid-cols-3 grid-cols-1 md:gap-30 gap-16">
                    {projects.reverse().map((p, index) => (
                        <ProjectCard key={p.id} {...p} index={index} />
                    ))}
                </div>
            </div>

            <hr className="w-screen mt-10 text-gray-700"></hr>
        </div>
    )
}