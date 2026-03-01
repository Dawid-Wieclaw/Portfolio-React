export default function Hero() {

    const scrollToSection = (id) => {
        
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center relative bg-linear-to-br from-gray-950 via-gray-900 to-black">

            <div className="flex md:text-9xl text-5xl font-bold">
                <h2 className="text-gray-300">Dawid&nbsp;</h2>
                <h2 className="text-gray-500">Wieclaw</h2>
            </div>

            <p className="text-2xl text-gray-600 ">Full Stack Web Developer</p>

            <div className="flex flex-col text-gray-300 items-center mt-10">
                <p className="md:text-5xl text-xl md:mt-10">RECHERCHE ALTERNANCE</p>
                <p className="md:text-4xl mt-2">Septembre 2026 / 14 mois</p>
            </div>

            <div className="mt-20 text-black md:text-xl text-xs flex">
                <button className="bg-gray-500 hover:bg-gray-300 md:p-3  md:px-7 rounded-lg p-2 mx-6"
                    type="button"
                    onClick={() => scrollToSection("Projects")}>Voir mes projets</button>

                <button className="bg-gray-500 hover:bg-gray-300 md:p-3 md:px-10 rounded-lg p-2 px-4 mx-6"
                    onClick={() => scrollToSection("Contact")}>Me contacter</button>
            </div>

        </div>
    )
}