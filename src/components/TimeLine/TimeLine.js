import React, { useState, useRef, useEffect } from "react";

import {
    CarouselButton,
    CarouselButtonDot,
    CarouselButtons,
    CarouselContainer,
    CarouselItem,
    CarouselItemText,
    CarouselItemTitle,
    CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: "smooth" });
    };

    const handleClick = (e, i) => {
        e.preventDefault();

        if (carouselRef.current) {
            const scrollLeft = Math.floor(
                carouselRef.current.scrollWidth *
                    0.7 *
                    (i / TimeLineData.length)
            );

            scroll(carouselRef.current, scrollLeft);
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round(
                (carouselRef.current.scrollLeft /
                    (carouselRef.current.scrollWidth * 0.7)) *
                    TimeLineData.length
            );

            setActiveItem(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
        };
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <Section id="about">
            <SectionDivider />
            <SectionTitle style={{ marginTop: "20px" }}>About Me</SectionTitle>
            <SectionText>
                I bring over 2+ years of experience developing innovative web
                and mobile applications for Mahalo Banking leveraging TypeScript
                and React Native. I've specialized in understanding complex
                requirements for neurodiverse users and translating them into
                intuitive digital experiences. Crafting creative but accessible
                UI/UX is my passion. I particularly enjoy collaborating with
                stakeholders and development teams on ambitious green field
                projects to conceive solutions from the ground up. In my
                day-to-day work, I aim to balance simplicity with depth in both
                design and technical implementation. My goal is for the user
                journey to be frictionless while I solve complex problems behind
                the scenes through clean, modular code. I believe my specialized
                experience and passion for accessibility can add value to
                customer-focused development teams pushing the boundaries.
            </SectionText>
            <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
                <>
                    {TimeLineData.map((item, index) => (
                        <CarouselMobileScrollNode
                            key={item + index}
                            final={index === TOTAL_CAROUSEL_COUNT - 1}
                        >
                            <CarouselItem
                                index={index}
                                id={`carousel__item-${index}`}
                                active={activeItem}
                                onClick={(e) => handleClick(e, index)}
                            >
                                <CarouselItemTitle>
                                    {`${item.year}`}
                                </CarouselItemTitle>
                                <CarouselItemText>{item.text}</CarouselItemText>
                            </CarouselItem>
                        </CarouselMobileScrollNode>
                    ))}
                </>
            </CarouselContainer>
            <CarouselButtons>
                {TimeLineData.map((item, index) => {
                    return (
                        <CarouselButton
                            key={item + index}
                            index={index}
                            active={activeItem}
                            onClick={(e) => handleClick(e, index)}
                            type="button"
                        >
                            <CarouselButtonDot active={activeItem} />
                        </CarouselButton>
                    );
                })}
            </CarouselButtons>
            <SectionDivider />
        </Section>
    );
};

export default Timeline;
