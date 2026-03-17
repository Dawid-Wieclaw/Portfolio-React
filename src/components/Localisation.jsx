import { AuroraText } from "./ui/aurora-text";
import { Send, MapPinned } from 'lucide-react';


export default function ContactForm() {
    return (
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition">

            <div className="absolute inset-0 bg-[url('/img/Paris(modification).jpg')] bg-cover bg-center opacity-50"></div>

            <div className="absolute inset-0 from-transparent via-zinc-950/60 to-zinc-950"></div>

            <div className="relative z-10 flex flex-col p-5 gap-3 mt-20">

                <div className=" rounded-2xl p-3 w-fit">
                    <MapPinned size={32} className="text-white" />
                </div>

                <h2 className="text-white text-2xl font-bold mt-2">Localisation</h2>
                <p className="text-gray-400">Basé à Paris</p>
                <p className="text-white font-semibold">Paris, France</p>

            </div>
        </div>
    )
}