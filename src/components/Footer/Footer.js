import React from "react";
import { AiFillMediumCircle, AiFillLinkedin, AiFillFile } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call Me</LinkTitle>
                    <LinkItem href="tel: 719-293-5195">719-293-5195</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto: jacobharv00@gmail.com">
                        jacobharv00@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>
                        If you are looking for an experienced software developer
                        reach out by phone, email or social media to see how we
                        can build amazing things together.
                    </Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons
                        href="https://github.com/Jacobharv00"
                        target="_blank"
                    >
                        <FaGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons
                        href="https://www.linkedin.com/in/jacobharvey19"
                        target="_blank"
                    >
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons
                        href="https://jacobharv00.medium.com"
                        target="_blank"
                    >
                        <AiFillMediumCircle size="3rem" />
                    </SocialIcons>
                    <SocialIcons
                        href="https://postimg.cc/HrhKCfc9"
                        target="_blank"
                    >
                        <AiFillFile size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
