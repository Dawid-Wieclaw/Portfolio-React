import { Github, Mail, Linkedin } from 'lucide-react';


export default function Footer() {
    return (
        <div className="text-gray-600">
            <hr></hr>

            <div className="flex justify-between py-10 px-10">
                <div>
                    <h1 className="md:text-3xl text-2xl">Dawid Wieclaw</h1>
                    <p className='md:text-lg text-xs'>Développeur Web Full Stack</p>
                </div>

                <div className='flex gap-5 items-center'>
                    <a href='https://github.com/Dawid-Wieclaw' target='_blank' className='hover:text-white'><Github></Github></a>
                    <Mail href="mailto:dawid.wieclaw@epitech.eu" target='_blank' className='hover:text-white'></Mail>
                    <Linkedin href='' target='_blank' className='hover:text-white'></Linkedin>
                </div>
            </div>


        </div>
    )
}