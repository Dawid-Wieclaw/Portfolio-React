import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

export default function Projects() {
    return (
        <div className="h-screen bg-neutral-950 py-10">
            <ScrollVelocityContainer>
                <ScrollVelocityRow baseVelocity={3} className="text-6xl font-bold">
                    DAWID WIECLAW  •  FULL STACK DEVELOPER  •
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={-3} className="text-6xl font-bold text-gray-500">
                    RECHERCHE ALTERNANCE  •  SEPTEMBRE 2026  •
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        </div>
    )
}