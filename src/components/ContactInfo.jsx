import { AuroraText } from "./ui/aurora-text";

export default function ContactInfo({ id, Icon, type, info }) {

    return (
        <div className="flex items-center rounded-xl text-gray-400 text-lg p-3 gap-10 bg-zinc-950 border border-zinc-800 hover:border-zinc-500 hover:border-2 transition">
                <Icon size={40} className="text-gray-600" />

            <div className="flex flex-col gap-3">
                <AuroraText>{type}</AuroraText>
                <p className="2xl:text-2xl md:text-xl">{info}</p>
            </div>
        </div>
    )
}