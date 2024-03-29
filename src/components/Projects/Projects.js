import React from "react";
import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from "./ProjectsStyles";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map(
                ({ id, image, title, description, tags, source, visit }) => (
                    <BlogCard key={id}>
                        <Img src={image} alt="project" />
                        <TitleContent>
                            <HeaderThree>{title}</HeaderThree>
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        <div>
                            <TitleContent>Stack & Tools</TitleContent>
                            <TagList>
                                {tags.map((tag, index) => (
                                    <Tag key={index}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={source} target="_blank">
                                Website
                            </ExternalLinks>
                            <ExternalLinks href={visit} target="_blank">
                                Github
                            </ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                )
            )}
        </GridContainer>
    </Section>
);

export default Projects;
