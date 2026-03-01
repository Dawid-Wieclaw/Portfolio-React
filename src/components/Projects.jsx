import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

export default function Projects() {

    return (
        <div id="Projects" className="bg-black h-screen pt-25">
            <div className=" bg-black py-10 ">
                <ScrollVelocityContainer className="opacity-50">

                    <ScrollVelocityRow baseVelocity={5}>
                        <div className="flex md:gap-20 gap-10 text-white">
                            <p className="flex items-center text-xl gap-4 font-semibold"><img src="img/javascript.svg" className="md:h-15 h-10"></img>JavaScript</p>
                            <p className="flex items-center text-xl gap-4 font-semibold"><img src="img/react.svg" className="md:h-15 h-10"></img>React</p>
                            <p className="flex items-center text-xl gap-4 font-semibold"><img src="img/tailwindcss-icon.svg" className="md:h-15 h-10"></img>TailwindCss</p>
                            <p className="flex items-center text-xl gap-4 font-semibold mr-18"><img src="img/bootstrap.svg" className="md:h-15 h-10"></img>Bootstrap</p>
                        </div>
                    </ScrollVelocityRow>

                    <ScrollVelocityRow baseVelocity={-3} className="pt-10">
                        <div className="flex md:gap-20 gap-10 text-white">
                            <p className="flex items-center text-xl gap-4 font-semibold"><img src="img/php.svg" className="md:h-15 h-10"></img>PHP</p>
                            <p className="flex items-center text-xl gap-4 font-semibold "><img src="img/html-5.svg" className="md:h-15 h-10"></img>HTML</p>
                            <p className="flex items-center text-xl gap-4 font-semibold "><img src="img/laravel.svg" className="md:h-15 h-10"></img>Laravel</p>
                            <p className="flex items-center text-xl gap-4 font-semibold mr-15"><img src="img/css-3.svg" className="md:h-15 h-10"></img>CSS</p>
                        </div>
                    </ScrollVelocityRow>

                </ScrollVelocityContainer>

            </div>
        </div>
    )
}