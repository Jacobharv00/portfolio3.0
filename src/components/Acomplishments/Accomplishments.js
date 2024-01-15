import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const data = [
    { number: 10, text: "Projects Built in 2021." },
    { number: 1, text: "Graduated Flatiron School 2021." },
    { number: 3, text: "Pair programing projects" },
    {
        number: 12,
        text: "Multi-Tennant production web/mobile banking apps used by over 500k members.",
    },
];

const Accomplishments = () => (
    <Section>
        <SectionTitle>Personal Achievements</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{card.number}+</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Accomplishments;
