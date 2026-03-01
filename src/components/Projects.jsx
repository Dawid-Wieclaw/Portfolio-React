import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

export default function Projects() {

    return (
        <div id="Projects" className="h-screen bg-black py-10">
            <ScrollVelocityContainer className="opacity-50">
                <ScrollVelocityRow baseVelocity={3}>
                    <div className="flex gap-20">
                        <img src="public/img/html-5.svg" className="h-15"></img>
                        <img src="public/img/react.svg" className="h-15"></img>
                        <img src="public/img/tailwindcss-icon.svg" className="h-15"></img>
                        <img src="public/img/php.svg" className="h-15"></img>
                        <img src="public/img/javascript.svg" className="h-15"></img>
                        <img src="public/img/css-3.svg" className="h-15"></img>
                        <img src="public/img/laravel.svg" className="h-15"></img>
                        <img src="public/img/bootstrap.svg" className="h-15 mr-15"></img>
                    </div>
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        </div>
    )
}