import React from "react";
import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, Img } from "./HeroStyles";

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Jacob Harvey
            </SectionTitle>
            <SectionText>
                Innovative software developer modernizing banking experiences.
                Currently I have been building a cutting-edge typescript & react
                native banking app from scratch that is now relied upon by 500K+
                members across 10 live production apps. I blend strategic
                vision, UI mastery, and robust coding to embed enduring systems.
                Passionate to push technological boundaries & transform complex
                landscapes into seamless user experiences. I love solving
                immense backend complexity with simplified UI/UX to provide a
                smooth mobile/web experiences.
            </SectionText>
        </LeftSection>
        <Img src="https://i.postimg.cc/0j1vKrKm/myself.jpg" alt="jacob" />
    </Section>
);

export default Hero;
