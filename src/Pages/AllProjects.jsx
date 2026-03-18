import Footer from "@/components/Footer"
import ProjectCard from "@/components/ProjectCard"
import Technos from "@/components/Technos"

import { ArrowBigLeft, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"



export default function AllProjects() {

    const navigate = useNavigate();

    const projects = [
        {
            "id": 1,
            "title": "Klivio",
            "img": "img/Klivio.png",
            "alr": "Page d'accueil du site Klivio permettant d'acheter des formations",
            "type": "Individuel",
            "description": "Klivio, un site de vente de formations. Premier projet de la première année de formation a la Web Academie de Epitech réalisé avec HTML et CSS",
            "tech": ["HTML", "CSS"],
            "github": "https://github.com/Dawid-Wieclaw/lblrs.github.io",
        },

        {
            "id": 2,
            "title": "Klivio 2",
            "img": "img/Klivio2.png",
            "alt": "Page d'accueil du site Klivio permettant d'acheter des formations. Version tailwind gris et orange",
            "type": "Individuel",
            "description": "Deuxième partie du premier projet de la formation, Klivio 2 — design libre réalisé en HTML et Tailwind.",
            "tech": ["HTML", "Tailwind"],
            "github": "https://github.com/Dawid-Wieclaw/klivio-2",
        },

        {
            "id": 3,
            "title": "Portfolio",
            "img": "img/Portfolio.png",
            "alt": "Page hero de portfolioavec photo et liens de contact",
            "type": "Individuel",
            "description": "Portfolio personnel réalisé avec Jekyll, un générateur de sites statiques en Ruby. Déployé sur GitHub Pages avec un design minimaliste et responsive.",
            "tech": ["JEKYLL"],
            "github": "https://github.com/Dawid-Wieclaw/Portfolio",
        },

        {
            "id": 4,
            "title": "CV Maker",
            "img": "img/cv-generator.png",
            "alt": "Interface avec formulaire a remplir a gauche et cv completé dynamiquement a droite",
            "type": "Individuel",
            "description": "CV Maker — Générateur de CV en PHP/JS avec deux templates, formulaire dynamique et export PDF sécurisé via HTMLPurifier.",
            "tech": ["PHP", "JavaScript", "HTML", "Bootstrap"],
            "github": "https://github.com/Dawid-Wieclaw/cv-generator",
        },

        {
            "id": 5,
            "title": "Snake",
            "img": "img/Snake.png",
            "alt": "Jeu Snake en JavaScript avec score affiché",
            "type": "Personnel",
            "description": "Snake — Mini jeu classique développé en JavaScript vanilla pour pratiquer la manipulation du DOM, la gestion des événements clavier et la logique de jeu.",
            "tech": ["JavaScript"],
            "github": "https://github.com/Dawid-Wieclaw/TheSnakeGame",
        },

        {
            "id": 6,
            "title": "My Cinema",
            "img": "img/MyCinema.png",
            "alt": "Dashboard de My Cinema avec liste des films",
            "type": "Individuel",
            "description": "MyCinema - Application web de gestion de cinéma en PHP vanilla et JavaScript. Architecture MVC avec une API REST, requêtes PDO préparées et frontend dynamique via fetch() pour administrer films, salles et séances.",
            "tech": ["PHP", "JavaScript", "HTML", "CSS"],
            "github": "https://github.com/Dawid-Wieclaw/my-cinema",
        },

        {
            "id": 7,
            "title": "Nexus Platform",
            "img": "img/Connectin.png",
            "alt": "Interface de Nexus Platform, réseau social d'entreprise",
            "type": "Groupe (2)",
            "description": "Nexus Platform — Projet de groupe, mini réseau social destiné aux entreprises pour faciliter la communication interne entre employés. Première découverte des frameworks Laravel et React, avec une API REST côté back-end et une interface dynamique côté front-end.",
            "tech": ["React", "Laravel", "Tailwind"],
            "github": "https://github.com/Dawid-Wieclaw/Connect-in",
        }
    ]

    return (
        <div id="AllProjects" className="bg-zinc-950  flex flex-col items-center relative">

            <h2 className="mt-10 text-5xl font-bold text-gray-300 text-center">Tous mes projets</h2>

            <div className="max-w-screen py-5">
                <Technos></Technos>
            </div>


            <div className=" flex-1 xl:mx-50 md:mx-15 mx-5">
                <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-30 lg:gap-10 gap-5">
                    {projects.reverse().map((p, index) => (
                        <ProjectCard key={p.id} {...p} index={index} />
                    ))}

                    <div className="flex justify-center items-center">
                        <Link to='/'
                            aria-label="Retour vers la page d'accueil"
                            onClick={() => {
                                setTimeout(() => {
                                    document.getElementById('Projects')?.scrollIntoView({ behavior: "smooth" })
                                }, 100)
                            }}>
                            <button className="flex gap-1 items-center rounded-lg bg-zinc-950 border hover:bg-zinc-800 border-zinc-800 hover:border-zinc-700 hover:border-2 transition mt-10 p-2 md:text-xl text-lg text-gray-400">
                                <ArrowLeft className="w-6 h-6" /> Retour
                            </button>
                        </Link>

                    </div>

                </div>
            </div>

            <div className="w-screen pt-20">
                <Footer></Footer>
            </div>

        </div>
    )
}