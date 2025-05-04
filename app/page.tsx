import Image from "next/image"
import Logo from "@/components/logo.webp"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
    return (
        <div className="min-h-full flex flex-col max-w-[1024px]">
            <div className="min-h-full px-2 pt-16">
                <header className="w-full py-0 px-4">
                    <div className="container mx-auto flex justify-center max-w-[700px]">
                        <Image src={Logo} alt="" className="invert-[100%]" />

                    </div>
                </header>

                <main className="flex-grow container mx-auto px-2 py-8 ">
                    <section className="mb-12">
                        <h1>About Nexus</h1>

                        <p className="text-white">
                        Armada Nexus is a community-driven initiative that emerged as an extension of the Legacy team, dedicated to fostering innovation and creativity within the Star Wars: Armada homebrew community. Its primary objective is to provide a collaborative platform where players can contribute to the development of high-quality, well-balanced content tailored for casual and thematic gameplay. Within Armada Nexus, nearly any ship concept can be explored and refined, with the potential for integration into our custom Star Forge Fleet Builder and Tabletop Simulator mod, ensuring accessibility and playability for the broader community.
                        </p>
                    </section>

                    <section>
                        <h1>Frequently Asked Questions</h1>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1 ">
                                <AccordionTrigger>What is the difference between Armada Nexus and Armada Legacy?</AccordionTrigger>
                                <AccordionContent> 
                                While Nexus focuses on casual content, Armada Legacy focuses on rigorous balance and competitive organized play that you would find in a tournament setting. Community-created content from Nexus may be included by Legacy after further refinement and balancing, making it more ideal for stricter game settings. Nexus and Legacy work together to bring the best of both worlds to the Armada community! Learn more about the Armada Legacy project on their site: <a href="https://www.armadalegacy.com/" style={{ color: 'var(--logoColor)' }}>https://www.armadalegacy.com/</a>.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>Star Wars Armada production has been discontinued, how can I play now? </AccordionTrigger>
                                <AccordionContent>
                                The easiest way to play is using Tabletop Simulator and the Armada Nexus mod. This mod is free to use and includes all the ships, squadrons, and upgrades from the base game along with new Nexus and Legacy content. You can find the mod on the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3281524362" style={{ color: 'var(--logoColor)' }}>Steam Workshop here</a>. If you prefer physical play, you can use the <a href="https://star-forge.tools/" style={{ color: 'var(--logoColor)' }}>Star Forge Fleet Builder</a> to print out cards and a 3D printer or vendor to play with your own ships. You can find links to vendors and free 3D printing files hosted in our <a href="/resources/sw" style={{ color: 'var(--logoColor)' }}>resource tab on the left</a> as well as on the <a href="https://www.armadalegacy.com/resources/" style={{ color: 'var(--logoColor)' }}>Armada Legacy site resources</a>.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>Where can I find Armada Nexus content? </AccordionTrigger>
                                <AccordionContent>
                                Most of our newest content can be found on the Nexus Discord server, within the Star Forge Fleet Builder or in the Tabletop Simulator mod. Make sure to enable Nexus content and custom factions in the top right menu of Star Forge for it to show up. You can find the Nexus Discord server here: <a href="https://discord.gg/gyCxmDDdJH" style={{ color: 'var(--logoColor)' }}>https://discord.gg/gyCxmDDdJH</a>, the <a href="https://star-forge.tools/" style={{ color: 'var(--logoColor)' }}>Star Forge Fleet Builder here</a>, and the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3281524362" style={{ color: 'var(--logoColor)' }}>Tabletop Simulator mod here</a>.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger>What are dev cycles and how to they work? </AccordionTrigger>
                                <AccordionContent>
                                On the Nexus Discord server, we have created a system to facilitate server-wide development focus for homebrew. Each month, we focus on adding new ships, squadrons, and/or upgrades to expand the Armada Nexus library for casual play. The process includes a fixed faction, ship/squadron rotation and a community poll to decide on relevant units for that cycle. Upgrades are handpicked by the dev team from community suggestions to ensure balance and variety. This collaborative effort keeps Nexus content fresh, engaging, and perfectly suited to our community. Learn more on the Nexus Discord server here: <a href="https://discord.gg/gyCxmDDdJH" style={{ color: 'var(--logoColor)' }}>https://discord.gg/gyCxmDDdJH</a>.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger>How do I enter to win prizes in the monthly raffle? </AccordionTrigger>
                                <AccordionContent>
                                On the Nexus Discord server, we have created a Playtest Incentivization Program to encourage people to test out content that may be unbalanced and help fix it. Each month, for every verified playtest that is submitted, both players earn one entry into a raffle. More entries mean better odds of winning one of our incredible prizes. For a playtest report to qualify, both players must follow certain Nexus playtesting guidelines which are outlined on the Discord. At the start of each month we do a drawing to determine the winners for that previous month. Learn more on the Nexus Discord server here: <a href="https://discord.gg/gyCxmDDdJH" style={{ color: 'var(--logoColor)' }}>https://discord.gg/gyCxmDDdJH</a>.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </main>
                <footer className="w-full py-4 px-4">
                    <div className="container mx-auto text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Armada Nexus. All rights reserved.</p>
                        <p className="mt-2">
                            Disclaimer: Armada Nexus is a free, unofficial modification for Star Wars: Armada.
                        </p>
                    </div>
                </footer>
            </div>

        </div>
    );
}
