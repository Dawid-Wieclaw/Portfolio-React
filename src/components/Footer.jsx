import { Github, Mail, Linkedin } from 'lucide-react';


export default function Footer() {
    return (
        <div className="text-gray-400">
            <hr className='border-zinc-700'></hr>

            <div className="flex justify-between py-8 px-5">
                <div>
                    <h1 className="md:text-3xl text-2xl">Dawid Wieclaw</h1>
                    <p className='md:text-lg text-xs'>Développeur Web Full Stack</p>
                </div>

                <div className='flex gap-5 items-center'>
                    <a href='https://github.com/Dawid-Wieclaw' target='_blank' className='hover:text-gray-500 transition' aria-label='Voir mon github'><Github></Github></a>
                    <a className="text-gray-400 hover:text-gray-300" href="https://www.linkedin.com/in/dawid-wieclaw/" target="_blank"><Linkedin className="md:w-10 w-5" aria-label="Github"></Linkedin></a>
                    <a href="mailto:dawid.wieclaw@epitech.eu" target='_blank'><Mail className='hover:text-gray-500 transition' aria-label='Contactez moi par mail'></Mail></a>
                    <a className=" md:text-2xl text-lg m-auto font-bold text-gray-400 hover:text-gray-500 transition md:w-10 " href="img/Dawid-Wieclaw-CV.pdf" target="_blank">CV</a>
                </div>
            </div>

            <hr className='mx-3 border-zinc-800'></hr>

            <p className='text-center py-5'>Développé avec React & Tailwind</p>


        </div>
    )
}