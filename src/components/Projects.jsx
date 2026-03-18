import ProjectCard from "@/components/ProjectCard"
import Technos from "@/components/Technos"

import { Link } from "react-router-dom"
import { ArrowDown, ArrowUp, Plus } from "lucide-react"


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
            "alt": "Page d'accueil du site Klivio permettant d'acheter des formations. Version tailwind gris et orange",
            "type": "Individuel",
            "description": "Klivio, un site de vente de formations, Klivio — design libre réalisé en HTML et Tailwind.",
            "tech": ["HTML", "TAILWIND"],
            "github": "https://github.com/Dawid-Wieclaw/klivio-2",
        },

        {
            "id": 2,
            "title": "CV Maker",
            "img": "img/cv-generator.png",
            "alt": "Interface avec formulaire a remplir a gauche et cv completé dynamiquement a droite",
            "type": "Individuel",
            "description": "CV Maker — Générateur de CV en PHP/JS avec deux templates, formulaire dynamique et export PDF sécurisé via HTMLPurifier.",
            "tech": ["PHP", "JavaScript", "HTML", "BOOTSTRAP"],
            "github": "https://github.com/Dawid-Wieclaw/cv-generator",
        },

        {
            "id": 3,
            "title": "Nexus Platform",
            "img": "img/Connectin.png",
            'alt': "Interface de Nexus Platform, réseau social d'entreprise",
            "type": "Groupe (2)",
            "description": "Nexus Platform — Projet de groupe, mini réseau social destiné aux entreprises pour faciliter la communication interne entre employés. Première découverte des frameworks Laravel et React, avec une API REST côté back-end et une interface dynamique côté front-end.",
            "tech": ["React", "Laravel", "TAILWIND"],
            "github": "https://github.com/Dawid-Wieclaw/Connect-in",
        }
    ]

    return (
        <div id="Projects" className="bg-zinc-950 h-fit  flex flex-col items-center pb-50">

            <h2 className="mt-10  text-5xl font-bold text-gray-300">Projets récents</h2>

            <div className="max-w-screen py-5">
                <Technos></Technos>
            </div>


            <div className=" flex-1 xl:mx-50 md:mx-15 mx-5 items-center align-middle gap-10 xl:flex xl:flex-row">
                <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-30 lg:gap-10 gap-5">
                    {projects.reverse().map((p, index) => (
                        <ProjectCard key={p.id} {...p} index={index} />
                    ))}
                    <div className="text-white flex justify-center items-center 2xl:hidden">
                        <Link to='/AllProjects'
                            aria-label="Aller vers tous mes projets"
                            onClick={() => window.scrollTo({ top : 0 })}>
                            <Plus></Plus>
                        </Link>
                    </div>
                </div>

                <div className="text-white justify-center items-center hidden 2xl:block">
                    <Link to={'/AllProjects'}>
                        <Plus></Plus>
                    </Link>
                </div>

            </div>


            <div className="mt-10 flex-col gap-5 hidden 2xl:flex">
                <a className=" md:text-4xl text-xl text-center font-bold text-gray-500 hover:text-gray-300"
                    href="#Hero"
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('Hero')
                    }}
                    aria-label="Aller vers la section hero"
                >
                    <ArrowUp aria-hidden="true"></ArrowUp>
                </a>

                <a className=" md:text-4xl text-xl text-center font-bold text-gray-500 hover:text-gray-300"
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('contact')
                    }}
                    aria-label="Aller vers la section contact"
                >
                    <ArrowDown aria-hidden="true"></ArrowDown>
                </a>
            </div>

        </div>
    )
}