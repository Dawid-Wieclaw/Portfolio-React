import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import { Phone, MailOpen, MapPinned } from 'lucide-react';


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
            "Icon": MapPinned,
            "type": "Localisation :",
            "info": "Paris",
            "href": "https://www.google.com/maps/place/Paris/@48.8589385,2.2646341,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
        },
    ]


    return (
   <div className="w-full min-h-screen pt-10 bg-black flex flex-col">

    <h2 className="pt-10 text-center text-5xl font-bold text-gray-400">Contactez-moi</h2>

    <div className="flex-1 w-screen">
        <div className="lg:mx-50 md:mx-16 mx-5 mt-10 flex flex-col gap-5 xl:flex-row justify-center xl:gap-10">
            <div className="xl:mt-10 2xl:w-1/3 flex flex-col gap-5">
                {contact.map((c) =>
                    <ContactInfo key={c.id} {...c}></ContactInfo>
                )}
            </div>

            <div className="2xl:w-1/3">
                <ContactForm></ContactForm>
            </div>
        </div>
    </div>


    <Footer></Footer>

</div>
    )
}