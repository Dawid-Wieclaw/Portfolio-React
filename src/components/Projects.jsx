import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

export default function Projects() {

    return (
        <div id="Projects" className="bg-black h-screen pt-25">
            <div className=" bg-black py-10 ">
                <ScrollVelocityContainer className="opacity-50">
                    <ScrollVelocityRow baseVelocity={5}>
                        <div className="flex md:gap-20 gap-10">
                            <img src="/img/javascript.svg" className="md:h-15 h-10"></img>
                            <img src="/img/react.svg" className="md:h-15 h-10"></img>
                            <img src="/img/tailwindcss-icon.svg" className="md:h-15 h-10"></img>
                            <img src="/img/bootstrap.svg" className="md:h-15 h-10"></img>
                            <img src="/img/php.svg" className="md:h-15 h-10"></img>
                            <img src="/img/laravel.svg" className="md:h-15 h-10 md:mr-20 mr-10"></img>
                        </div>
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            </div>
        </div>
    )
}