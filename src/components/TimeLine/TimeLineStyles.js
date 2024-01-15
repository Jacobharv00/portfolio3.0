import styled from "styled-components";

export const CarouselContainer = styled.ul`
    max-width: 1040px;
    background: #0e161b;
    padding: 0rem;
    list-style: none;
    display: flex;
    flex: 1;
    justify-content: space-between;
    overflow-x: hidden;

    margin-left: 32px;
    &:first-of-type {
        margin-left: 0px;
    }

    margin-bottom: 80px;

    //remove scrollbar
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        touch-action: pan-x;
        justify-content: initial;
        margin-bottom: 8px;
    }
`;

export const CarouselMobileScrollNode = styled.div`
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex: 1;
        min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
    }
`;

export const CarouselItem = styled.div`
    background: #0e161b;
    box-shadow: inset 2px 2px 2px rgba(60, 78, 88, 0.5);
    border-radius: 3px;
    max-width: 200px;
    padding: 6px;
    margin-left: 10px;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 124px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin-left: 32px;
        min-width: 120px;
        background: #0e161b;
        box-shadow: inset 2px 2px 2px rgba(60, 78, 88, 0.5);
        padding: 4px;
        align-content: start;
        scroll-snap-align: start;
        border-radius: 3px;
        overflow: visible;
        position: relative;
        height: fit-content;

        ${(props) =>
            props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
    }
`;

export const CarouselItemTitle = styled.h4`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.02em;
    display: flex;
    background: linear-gradient(
        30deg,
        #984b43 10%,
        rgba(255, 255, 255, 0.66) 30.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 4px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const CarouselItemText = styled.p`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #fdf5e6;
    padding-right: 16px;
    padding-left: 8px;
    font-weight: bold;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 12px;
        line-height: 18px;
        padding-right: 32px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 16px;
        padding-right: 0;
    }
`;

export const CarouselButtons = styled.div`
    width: 288px;
    display: none;
    visibility: hidden;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        visibility: visible;
        margin-bottom: 48px;
    }
`;

export const CarouselButton = styled.button`
    box-sizing: border-box;
    background: none;
    padding: 4px;
    border: none;
    cursor: pointer;
    margin-right: 4px;
    opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
    transform: ${(props) =>
        props.active === props.index ? `scale(1.6)` : `scale(1)`};

    &:focus {
        outline: none;
    }
`;

export const CarouselButtonDot = styled.div`
    background-color: #eac67a;
    border-radius: 10px;
    margin: auto;
    width: 10px;
    height: 10px;
`;
