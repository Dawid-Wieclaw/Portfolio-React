import { Github, ExternalLink } from 'lucide-react';


export default function ProjectCard({ id, img, title, description, tech, github, demo }) {

    return (
        <div className=" text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition">

            <img src={img}
                className="w-full rounded-t-xl opacity-75 object-cover"></img>

            <div className='p-5'>
                <h1 className="md:text-5xl text-3xl md:mt-5">{title}</h1>

                <p className="md:text-lg text-xs mt-5">{description}</p>

                <div className="flex mt-3 md:p-2 text-xs gap-5">
                    {tech.map(t =>
                        <p className="border border-white rounded-full px-3">{t}</p>
                    )}
                </div>

                <div className="md:py-5 mt-5 flex justify-around">
                    <button className="rounded-lg px-1 border border-white w-5/12 p-1 flex justify-center items-center text-xs"
                        onClick={() => window.open(github, "_blank")}><Github className='h-4' /> GitHub</button>

                    <button className="rounded-lg px-1 border border-white w-5/12 p-1 flex justify-center items-center text-xs"
                        onClick={() => window.open(demo, "_blank")}> <ExternalLink className=' h-4' />Demo</button>
                </div>
            </div>

        </div >
    )
}