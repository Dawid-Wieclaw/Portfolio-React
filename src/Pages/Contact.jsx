import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Localisation from "@/components/Localisation";
import Footer from "@/components/Footer";
import { Phone, MailOpen, MapPinned, Github } from 'lucide-react';


export default function Contact() {

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
    ]


    return (
        <div className="w-full min-h-screen pt-10 bg-black flex flex-col">

            <h2 className="pt-10 text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-400">Contactez-moi</h2>

            <div className="flex-1">
                <div className="lg:mx-50 md:mx-16 mx-15 mt-10 flex flex-col xl:flex-row justify-center items-start gap-5 xl:gap-10">

                    <div className="w-full xl:w-1/3 flex flex-col gap-5">
                        {contact.map((c) =>
                            <ContactInfo key={c.id} {...c} />
                        )}
                    </div>

                    <div className="w-full xl:w-1/3">
                        <Localisation />
                    </div>

                </div>
            </div>

        </div>
    )
}