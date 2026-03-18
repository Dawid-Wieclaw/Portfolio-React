import { AuroraText } from "../components/ui/aurora-text";
import { Github, Mail, Linkedin, ArrowDown } from 'lucide-react';



export default function Hero() {

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (

        <div className="h-screen w-full overflow-x-hidden text-white flex flex-col items-center justify-center relative bg-zinc-950">

            <div className="flex md:text-9xl text-5xl font-bold">
                <AuroraText>Dawid&nbsp;</AuroraText>
                <h1 className="text-gray-300">Wieclaw</h1>
            </div>

            <p className="md:text-4xl text-2xl text-gray-400 ">Web Developer</p>


            <div className="flex flex-col text-gray-400 items-center md:mt-20 mt-5">
                <AuroraText className="md:text-4xl text-lg font-bold">RECHERCHE ALTERNANCE</AuroraText>
                <p className="md:text-3xl text-sm font-semibold">Septembre 2026 / 14 mois</p>
            </div>


            <div className="md:mt-10 mt-5 md:gap-7 gap-4.5 flex">
                <a className="text-gray-400 hover:text-gray-300"
                    href="https://github.com/lblrs"
                    target="_blank">
                    <Github className="md:w-10 w-5" aria-label="Github"></Github>
                </a>

                <a className="text-gray-400 hover:text-gray-300"
                    href="mailto:dawid.wieclaw@epitech.eu"
                    target="_blank">
                    <Mail className="md:w-10 w-5" aria-label="Mail"></Mail>
                </a>

                <a className=" md:text-2xl text-lg m-auto font-bold text-gray-400 hover:text-gray-300 md:w-10 "
                    href="img/Dawid-Wieclaw-CV.pdf"
                    target="_blank">
                    CV
                </a>
            </div>

            <div className="mt-25">
                <a className=" md:text-4xl text-xl text-center font-bold text-gray-500 hover:text-gray-300"
                href="#Projects"
                    onClick={() => scrollToSection("Projects")}
                    aria-label="Aller vers la section projets"
                >
                    <ArrowDown aria-hidden="true"></ArrowDown>
                </a>
            </div>


        </div>
    )
}