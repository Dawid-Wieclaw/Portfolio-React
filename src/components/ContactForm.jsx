import { AuroraText } from "./ui/aurora-text";
import { Send } from 'lucide-react';


export default function ContactForm() {
    return (
        <div className="flex flex-col text-white mt-10 rounded-xl bg-zinc-950 border-zinc-800 hover:border-zinc-700 border pt-10 pb-2 px-5">

            <AuroraText className="px-6 text-4xl">Envoyez-moi un message</AuroraText>

            <form className="flex flex-col p-5 px-5 gap-6 text-white text-xl">
                <input className="border border-gray-700 hover:border-zinc-500 rounded-md p-2" placeholder="Votre nom"></input>
                <input className="border border-gray-700 hover:border-zinc-500 rounded-md p-2" placeholder="Votre email"></input>

                <textarea className="border border-gray-700 hover:border-zinc-500 rounded-md p-2 h-36" placeholder="Votre message"></textarea>

                <button><Send className="text-zinc-500 hover:text-zinc-300 mx-2" /></button>
            </form>

        </div>
    )
}