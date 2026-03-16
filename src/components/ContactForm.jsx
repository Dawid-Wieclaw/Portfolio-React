import { AuroraText } from "./ui/aurora-text";

export default function ContactForm(){
    return (
        <div className="flex flex-col text-white mt-10 rounded-xl bg-zinc-950 border-zinc-800 border hover:border-zinc-800 hover:border-2 transition pt-10 px-5">
            
            <AuroraText className="px-6 text-4xl">Contactez-moi</AuroraText>

            <form className="flex flex-col p-5 px-5 gap-6 text-white text-xl">
                <input className="border border-gray-700 hover:border-zinc-500 rounded-md p-2" placeholder="Votre nom"></input>
                <input className="border border-gray-700 hover:border-zinc-500 rounded-md p-2" placeholder="Votre email"></input>

                <textarea className="border border-gray-700 hover:border-zinc-500 rounded-md p-2 h-36" placeholder="Votre message"></textarea>
            </form>

        </div>
    )
}