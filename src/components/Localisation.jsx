import { AuroraText } from "./ui/aurora-text";
import { Send, MapPinned } from 'lucide-react';


export default function ContactForm() {
    return (
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-500 hover:border-2 transition">
            <a href="https://www.google.com/maps/place/Paris/@48.8589384,2.2644631,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank">
                <div className="absolute inset-0 bg-[url('img/Paris(modification).jpg')] bg-cover bg-center opacity-50"></div>

                <div className="absolute inset-0 from-transparent via-zinc-950/60 to-zinc-950"></div>

                <div className="relative z-10 flex flex-col p-5 gap-3 mt-20">

                    <div className=" rounded-2xl p-3 w-fit">
                        <MapPinned size={32} className="text-gray-300" />
                    </div>

                    <h2 className="text-gray-300 text-2xl font-bold mt-2">Localisation</h2>
                    <p className="text-gray-300 font-semibold">Paris, France</p>

                </div>
            </a>
        </div>
    )
}