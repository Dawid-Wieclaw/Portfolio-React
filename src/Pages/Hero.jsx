import { AuroraText } from "../components/ui/aurora-text";
import { TypingAnimation } from "../components/ui/typing-animation";
import { Github, Mail, Linkedin, ArrowDown } from 'lucide-react';



export default function Hero() {

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (

        <div className="h-screen w-full overflow-x-hidden text-white flex flex-col items-center justify-center relative bg-black">

            <div className="flex md:text-9xl text-5xl font-bold">
                <AuroraText>Dawid&nbsp;</AuroraText>
                <h2 className="text-gray-400">Wieclaw</h2>
            </div>

            <p className="md:text-4xl text-2xl text-gray-600 ">Web Developer</p>


            <div className="flex flex-col text-gray-500 items-center md:mt-20 mt-5">
                <AuroraText className="md:text-4xl text-lg font-bold">RECHERCHE ALTERNANCE</AuroraText>
                <TypingAnimation className="md:text-3xl text-sm font-semibold">Septembre 2026 / 14 mois</TypingAnimation>
            </div>


            <div className="md:mt-10 mt-5 md:gap-7 gap-4.5 flex">
                <a className="text-gray-500 hover:text-gray-300"
                    href="https://github.com/lblrs"
                    target="_blank">
                    <Github className="md:w-10 w-5"></Github>
                </a>

                <a className="text-gray-500 hover:text-gray-300"
                    href=""
                    target="_blank">
                    <Linkedin className="md:w-10 w-5"></Linkedin>
                </a>

                <a className="text-gray-500 hover:text-gray-300"
                    href="mailto:dawid.wieclaw@epitech.eu"
                    target="_blank">
                    <Mail className="md:w-10 w-5"></Mail>
                </a>

                <a className=" md:text-2xl text-lg m-auto font-bold text-gray-500 hover:text-gray-300 md:w-10 "
                    href="img/Dawid-Wieclaw-CV.pdf"
                    target="_blank">
                    CV
                </a>
            </div>

            <div className="mt-25">
                <a className=" md:text-2xl text-xl text-center font-bold text-gray-500 hover:text-gray-300"
                    onClick={() => scrollToSection("Projects")}
                    >
                    <ArrowDown></ArrowDown>
                </a>
            </div>


        </div>
    )
}