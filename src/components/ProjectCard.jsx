import { Github, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion"



export default function ProjectCard({ id, img, type, title, description, tech, github, index }) {

    return (
        <div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}

            className=" text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:border-2 transition flex flex-col justify-between"
            onClick={() => window.open(github, "_blank")}>

            <div className="flex flex-col self-start">
                <img src={img}
                    className="w-full rounded-t-xl opacity-75 object-cover h-full"></img>
                <div className='p-5'>
                    <h1 className="md:text-4xl text-3xl md:mt-5">{title}</h1>
                    <span>{type}</span>
                    <p className="md:text-lg text-xs mt-5">{description}</p>
                </div>
            </div>

            <div className="p-5 flex flex-col">
                <div className="flex mt-3 md:p-2 md:text-md text-md gap-5 text-gray-300 flex-wrap ">
                    {tech.map(t =>
                        <p className="border border-gray-300 rounded-full px-3">{t}</p>
                    )}
                </div>

            </div>

        </div>
    )
}