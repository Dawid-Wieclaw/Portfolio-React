import { Github, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion"



export default function ProjectCard({ id, img, type, title, description, tech, github, index }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}

            className=" text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:border-2 transition"
            onClick={() => window.open(github, "_blank")}>

            <img src={img}
                className="w-full rounded-t-xl opacity-75 object-cover"></img>


            <div className="p-5 flex flex-col justify-between">
                <h1 className="md:text-4xl text-3xl md:mt-5">{title}</h1>

                <span>{type}</span>

                <p className="md:text-lg text-xs mt-5">{description}</p>

                <div className="flex mt-3 md:p-2 md:text-md text-xs gap-5">
                    {tech.map(t =>
                        <p className="border border-white rounded-full px-3">{t}</p>
                    )}
                </div>

            </div>

        </motion.div>
    )
}