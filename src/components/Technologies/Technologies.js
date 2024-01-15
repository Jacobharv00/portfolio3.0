import React from "react";
import { DiJsBadge, DiRubyRough } from "react-icons/di";
import { FaTools } from "react-icons/fa";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Tech</SectionTitle>
        <SectionText>
            I possess extensive expertise building, optimizing and securing
            robust front-end apps, scalable back-end systems and full-stack
            solutions end-to-end leveraging diverse languages, frameworks and
            tools.
        </SectionText>
        <List>
            <ListItem>
                <DiJsBadge size="4rem" style={{ color: "#126069" }} />
                <br />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        TypeScript, React Native, JavaScript, React, Next JS,
                        CSS, HTML
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiRubyRough size="4rem" style={{ color: "#126069" }} />
                <br />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        C#, DOTNET, SQL, Ruby, Rails, Solidity
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <FaTools size="3rem" style={{ color: "#126069" }} />
                <br />
                <ListContainer>
                    <ListTitle>Tools</ListTitle>
                    <ListParagraph>
                        Android Studio, Expo Hardhat, Entity Framework, MS SQL
                        Azure, Bitrise, Git, Native Base, ethers.js, Alchemy,
                        Bash Scripts, Styled Components, Swagger, React Native
                        Debugger, XCode, Server, SQLite3, PostgreSQL, PostMan,
                        Tamagui
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
