import { AuroraText } from "./ui/aurora-text";
import { RainbowButton, rainbowButtonVariants } from "./ui/rainbow-button";
import { ShimmerButton } from "./ui/shimmer-button";
import { TypingAnimation } from "./ui/typing-animation";

export default function Hero() {

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center relative bg-linear-to-br from-gray-950 via-gray-900 to-black">

            <div className="flex md:text-9xl text-5xl font-bold">
                <AuroraText>Dawid&nbsp;</AuroraText>
                <h2 className="text-gray-400">Wieclaw</h2>
            </div>

            <p className="md:text-4xl text-2xl text-gray-600 ">Web Developer</p>

            <div className="flex flex-col text-gray-400 items-center mt-10">
               <p className="md:text-5xl text-2xl ">RECHERCHE ALTERNANCE</p>
               <TypingAnimation className="md:text-3xl text-xl">Septembre 2026 / 14 mois</TypingAnimation>
                
            </div>

            <div className="mt-15 text-black md:text-xl text-xs flex">
                <ShimmerButton className="bg-gray-500 hover:bg-gray-300 md:p-3 text-xl  md:px-10 rounded-lg p-2 mx-3"
                    type="button"
                    onClick={() => scrollToSection("Projects")}>Voir mes projets</ShimmerButton>

                <ShimmerButton className="bg-gray-500 hover:bg-gray-300 md:p-3 text-xl md:px-10 rounded-lg p-2 px-4 mx-3"
                    onClick={() => scrollToSection("Contact")}>Me contacter</ShimmerButton>
            </div>
        </div>
    )
}