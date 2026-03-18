import ProjectCard from "@/components/ProjectCard"
import Technos from "@/components/Technos"

import { Link } from "react-router-dom"
import { ArrowDown, ArrowRight } from "lucide-react"


export default function Projects() {

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const projects = [

        {
            "id": 1,
            "title": "Klivio",
            "img": "img/Klivio2.png",
            "type": "Individuel",
            "description": "Klivio, un site de vente de formations, Klivio — design libre réalisé en HTML et Tailwind.",
            "tech": ["HTML", "TAILWIND"],
            "github": "https://github.com/Dawid-Wieclaw/klivio-2",
        },

        {
            "id": 2,
            "title": "CV Maker",
            "img": "img/cv-generator.png",
            "type": "Individuel",
            "description": "CV Maker — Générateur de CV en PHP/JS avec deux templates, formulaire dynamique et export PDF sécurisé via HTMLPurifier.",
            "tech": ["PHP", "JavaScript", "HTML", "BOOTSTRAP"],
            "github": "https://github.com/Dawid-Wieclaw/cv-generator",
        },

        {
            "id": 3,
            "title": "Nexus Platform",
            "img": "img/Connectin.png",
            "type": "Groupe (2)",
            "description": "Nexus Platform — Projet de groupe, mini réseau social destiné aux entreprises pour faciliter la communication interne entre employés. Première découverte des frameworks Laravel et React, avec une API REST côté back-end et une interface dynamique côté front-end.",
            "tech": ["React", "Laravel", "TAILWIND"],
            "github": "https://github.com/Dawid-Wieclaw/Connect-in",
        }
    ]

    return (
        <div id="Projects" className="bg-zinc-950 h-fit flex flex-col items-center pb-50">

            <h2 className="mt-10  text-5xl font-bold text-gray-400">Projets récents</h2>

            <div className="max-w-screen py-5">
                <Technos></Technos>
            </div>


            <div className=" flex-1 xl:mx-50 md:mx-15 mx-5">
                <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-30 lg:gap-10 gap-5">
                    {projects.reverse().map((p, index) => (
                        <ProjectCard key={p.id} {...p} index={index} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-10 items-center mt-5">
                <div className="w-full h-full flex justify-center">
                <Link to='/AllProjects'
                onClick={() => window.scrollTo(0,0)}>
                    <button className="rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:border-2 transition px-5 p-3 md:text-2xl text-lg text-gray-400 flex gap-3 items-center">Tous mes projets <ArrowRight /></button>
                </Link>
                </div>

                <div className="">
                    <a className=" md:text-4xl text-xl text-center font-bold text-gray-500 hover:text-gray-300"
                        onClick={() => scrollToSection("contact")}
                    >
                        <ArrowDown></ArrowDown>
                    </a>
                </div>
            </div>

        </div>
    )
}