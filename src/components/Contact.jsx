import ContactInfo from "@/components/ContactInfo";
import Localisation from "@/components/Localisation";
import Footer from "@/components/Footer";
import { Phone, MailOpen, Github, ArrowUp, Linkedin } from 'lucide-react';


export default function Contact() {

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }


    const contact = [
        {
            "id": 1,
            "Icon": Phone,
            "type": "Téléphone :",
            "info": "+33 7 83 05 57 28",
            "href": "tel:+33 7 83 05 57 28"
        },

        {
            "id": 2,
            "Icon": MailOpen,
            "type": "Email :",
            "info": "dawid.wieclaw@epitech.eu",
            "href": "mailto:dawid.wieclaw@epitech.eu"
        },

        {
            "id": 3,
            "Icon": Github,
            "type": "GitHub :",
            "info": "Dawid-Wieclaw",
            "href": "https://github.com/Dawid-Wieclaw"
        },

        {
            "id": 4,
            "Icon": Linkedin,
            "type": "Linkedin",
            "info": "Dawid Wieclaw",
            "href": "https://www.linkedin.com/in/dawid-wieclaw/"
        }
    ]


    return (
        <div id="contact" className=" h-screen bg-zinc-950 flex flex-col justify-between pt-15 items-center ">

            <div className=" xl:w-1/2 md:w-10/12 w-11/12 flex flex-col gap-5 border border-gray-800 rounded-xl p-5">
                <h2 className="pb-10 pt-5 text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-300">Contactez-moi</h2>


                <div className="flex flex-col gap-5">
                    {contact.map((c) =>
                        <ContactInfo key={c.id} {...c} />
                    )}
                </div>

                <div>
                    <Localisation />
                </div>
            </div>


            <div className="">
                <a className=" md:text-4xl text-xl text-center font-bold text-gray-500 hover:text-gray-300 hidden 2xl:flex"
                    href="#Hero"
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('Hero')
                    }}
                    aria-label="Retour en haut de la page"
                >
                    <ArrowUp aria-hidden="true"></ArrowUp>
                </a>
            </div>

            <div className="w-screen">
                <Footer></Footer>
            </div>
        </div>
    )
}