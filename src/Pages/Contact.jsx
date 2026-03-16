import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";


export default function Contact() {

    const contact = [
        {
            "id": 1,
            "logo": "",
            "type": "qsdqsd",
            "info": "qsdqsd",
        },
    ]


    return (
        <div className="min-h-screen w-full bg-black">

            <h2 className="pt-10 text-center text-5xl font-bold text-gray-300">Contact</h2>


            <div className="flex">
                <ContactForm></ContactForm>

                {contact.map((c) => 
                    <ContactInfo key={c.id} {...c}></ContactInfo>
                )}

            </div>



        </div>
    )
}