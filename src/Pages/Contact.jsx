import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import { Phone, MailOpen, MapPinned } from 'lucide-react';


export default function Contact() {

    const contact = [
        {
            "id": 1,
            "Icon": Phone,
            "type": "Telephone :",
            "info": "+33 7 83 05 57 28",
        },

        {
            "id": 2,
            "Icon": MailOpen,
            "type": "Email :",
            "info": "dawid.wieclaw@epitech.eu",
        },

        {
            "id": 3,
            "Icon": MapPinned,
            "type": "Localisation :",
            "info": "Paris",
        },
    ]


    return (
   <div className="w-full min-h-screen pt-10 bg-black flex flex-col">

    <h2 className="pt-10 text-center text-5xl font-bold text-gray-300">Contact</h2>

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