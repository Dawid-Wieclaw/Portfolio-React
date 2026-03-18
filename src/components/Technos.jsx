import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

export default function Technos() {
    return (
        <>
            <div className=" bg-zinc-950 md:py-5">
                <ScrollVelocityContainer className="opacity-50">
                    <ScrollVelocityRow baseVelocity={3}>
                        <div className="flex md:gap-16 gap-8 text-white">
                            <p className="flex items-center md:text-xl gap-2 font-semibold md:ml-14 ml-7"><img src="img/laravel.svg" className="md:h-5 h-5" alt="Icone Laravel"></img>Laravel</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/css-3.svg" className="md:h-5 h-5" alt="Icone CSS"></img>CSS</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/php.svg" className="md:h-5 h-5" alt="Icone PHP"></img>PHP</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold "><img src="img/bootstrap.svg" className="md:h-5 h-5" alt="Icone Bootstrap"></img>Bootstrap</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold "><img src="img/html-5.svg" className="md:h-5 h-5" alt="Icone HTML"></img>HTML</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/javascript.svg" className="md:h-5 h-5" alt="Icone JavaScript"></img>JavaScript</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/react.svg" className="md:h-5 h-5" alt="Icone React"></img>React</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/tailwindcss-icon.svg" className="md:h-5 h-5" alt="Icone Tailwind CSS"></img>TailwindCss</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/docker.svg" className="md:h-5 h-5" alt="Icone Docker"></img>Docker</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/github-icon.svg" className="md:h-7 h-5 bg-white rounded-full border border-white" alt="Icone GitHub"></img>GitHub</p>
                        </div>
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>

            </div>
        </>
    )
}