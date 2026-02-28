export default function Hero() {

    const scrollToSection = (id) => {
        
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <div className="min-h-screen text-white  font-semibold flex flex-col items-center justify-center relative bg-linear-to-br from-gray-950 via-gray-900 to-black">

            <div className="flex md:text-9xl text-5xl font-bold">
                <h2 className="text-gray-400">Dawid&nbsp;</h2>
                <h2 className="text-gray-600">Wieclaw</h2>
            </div>

            <p className="text-2xl text-gray-600 font-semibold">Full Stack Web Developer</p>

            <div className="flex flex-col text-gray-400 items-center mt-10 font-bold">
                <p className="md:text-5xl text-2xl md:mt-10">RECHERCHE ALTERNANCE</p>
                <p className="md:text-4xl text-xl mt-2">Septembre 2026 / 14 mois</p>
            </div>

            <div className="mt-20 text-black md:text-xl flex">
                <button className="bg-gray-500 hover:bg-gray-300  md:px-7 rounded-xl w-1/2 border-black mx-6"
                    type="button"
                    onClick={() => scrollToSection("About")}>Voir mes projets</button>

                <button className="bg-gray-500 hover:bg-gray-300  md:px-10 rounded-xl w-1/2 border-black mx-6"
                    onClick={() => scrollToSection("contact")}>Me contacter</button>
            </div>

        </div>
    )
}