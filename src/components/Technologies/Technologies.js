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
                        CSS, HTML JavaScript, Next JS, React Native, React,
                        TypeScript,
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiRubyRough size="4rem" style={{ color: "#126069" }} />
                <br />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        C#, DOTNET Web API, Entity Framework, Microsoft SQL
                        Server, Ruby On Rails, Ruby, Solidity SQL,
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <FaTools size="3rem" style={{ color: "#126069" }} />
                <br />
                <ListContainer>
                    <ListTitle>Tools</ListTitle>
                    <ListParagraph>
                        Alchemy API, Android Studio, AutoMapper, Azure, Bash
                        Scripts, Bitrise, ethers.js, Expo, Figma, Git, Hardhat,
                        Native Base, PostgreSQL, PostMan, React Native Debugger,
                        React Native MMKV, Redux, Redux Took Kit, SQLite3,
                        Styled Components, Swagger, Tamagui, XCode,
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
