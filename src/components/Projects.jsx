import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"
import { BorderBeam } from "./ui/border-beam"

export default function Projects() {

    return (
        <div id="Projects" className="bg-black h-screen w-screen">
            <div className=" bg-black md:py-15">
                <ScrollVelocityContainer className="opacity-50">
                    <ScrollVelocityRow baseVelocity={5}>
                        <div className="flex md:gap-20 gap-8 text-white">
                            <p className="flex items-center md:text-xl text-sm gap-2 font-semibold"><img src="img/javascript.svg" className="md:h-15 h-5"></img>JavaScript</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/react.svg" className="md:h-15 h-5"></img>React</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/tailwindcss-icon.svg" className="md:h-15 h-5"></img>TailwindCss</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold md:mr-18 mr-10"><img src="img/bootstrap.svg" className="md:h-15 h-5"></img>Bootstrap</p>
                        </div>
                    </ScrollVelocityRow>

                    <ScrollVelocityRow baseVelocity={-4} className="md:pt-10 pt-5">
                        <div className="flex md:gap-20 gap-8 text-white">
                            <p className="flex items-center md:text-xl gap-2 font-semibold"><img src="img/php.svg" className="md:h-15 h-5"></img>PHP</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold "><img src="img/html-5.svg" className="md:h-15 h-5"></img>HTML</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold "><img src="img/laravel.svg" className="md:h-15 h-5"></img>Laravel</p>
                            <p className="flex items-center md:text-xl gap-2 font-semibold md:mr-18 mr-8"><img src="img/css-3.svg" className="md:h-15 h-5"></img>CSS</p>
                        </div>
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>

            </div>


            {/* <div className="flex justify-center items-center">
                <div className="relative h-250 bg-zinc-800 m-50 w-full overflow-hidden">
                    <BorderBeam />
                </div>

            </div> */}
        </div>
    )
}