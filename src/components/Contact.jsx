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
        <div id="contact" className="w-screen min-h-fit h-fit bg-zinc-950 flex flex-col gap-30 pt-15 items-center">

            <div className=" lg:w-1/2 md:w-3/4 w-11/12 flex flex-col gap-5 border border-gray-800 rounded-xl p-10">

                <h2 className="pb-10 text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-300">Contactez-moi</h2>

                <div className="flex flex-col gap-5">
                    {contact.map((c) =>
                        <ContactInfo key={c.id} {...c} />
                    )}
                </div>

                <div>
                    <Localisation />
                </div>
            </div>

            <div className="w-screen">
                <Footer></Footer>
            </div>
        </div>
    )
}