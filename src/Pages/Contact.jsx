import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Phone, Mail, MapPinned } from 'lucide-react';


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
            "Icon": Mail,
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
        <div className="w-full h-screen pt-10 bg-black">

            <h2 className="pt-10 text-center text-5xl font-bold text-gray-300">Contact</h2>


            <div className="max-h-screen w-screen">

                <div className="lg:mx-50 md:mx-16 mx-5 mt-10 flex flex-col gap-5 xl:flex-row justify-center xl:gap-10">
                    <div className="xl:mt-10 xl:w-1/3 xl:flex xl:flex-col xl:gap-5">
                        {contact.map((c) =>
                            <ContactInfo key={c.id} {...c}></ContactInfo>
                        )}
                    </div>

                    <div className="xl:w-1/3">
                        <ContactForm></ContactForm>
                    </div>

                </div>
            </div>



        </div>
    )
}