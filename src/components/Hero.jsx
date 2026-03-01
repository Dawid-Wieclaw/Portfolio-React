import { AuroraText } from "./ui/aurora-text";
import { TypingAnimation } from "./ui/typing-animation";
import { DotPattern } from "./ui/dot-pattern";
import { Github, Mail, Linkedin } from 'lucide-react';
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"



export default function Hero() {

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (

        <div className="min-h-screen text-white flex flex-col items-center justify-center relative bg-black">

            <div className="flex md:text-9xl text-5xl font-bold">
                <AuroraText>Dawid&nbsp;</AuroraText>
                <h2 className="text-gray-400">Wieclaw</h2>
            </div>

            <p className="md:text-4xl text-2xl text-gray-600 ">Web Developer</p>


            <div className="flex flex-col text-gray-400 items-center md:mt-20 mt-5">
                <AuroraText className="md:text-4xl text-xl ">RECHERCHE ALTERNANCE</AuroraText>
                <TypingAnimation className="md:text-3xl text-lg">Septembre 2026 / 14 mois</TypingAnimation>
            </div>


            <div className="mt-5 md:gap-7 gap-4.5 flex">
                <a className="text-gray-500 hover:text-gray-300"
                    href="https://github.com/lblrs"
                    target="_blank">
                    <Github></Github>
                </a>

                <a className="text-gray-500 hover:text-gray-300"
                    href=""
                    target="_blank">
                    <Linkedin></Linkedin>
                </a>

                <a className="text-gray-500 hover:text-gray-300"
                    href="mailto:dawid.wieclaw@epitech.eu"
                    target="_blank">
                    <Mail></Mail>
                </a>

                <a className=" md:text-2xl text-xl text-center text-gray-500 hover:text-gray-300"
                    href="/Dawid-Wieclaw-CV.pdf"
                    target="_blank">
                    CV
                </a>
            </div>

            <div>
                <button className="bg-slate-900 md:px-15 px-10 md:py-2 py-0.5 mt-15 text-gray-400 md:text-2xl rounded-md hover:bg-slate-800"
                    type="button"
                    onClick={() => scrollToSection('Projects')}>Projets</button>
            </div>


        </div>
    )
}