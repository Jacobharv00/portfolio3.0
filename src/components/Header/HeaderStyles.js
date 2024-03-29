import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem;
    margin-left: 1vw;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 60px);
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
    }
`;

export const Span = styled.span`
    font-size: 3rem;
    color: #fdf5e6;
    transition: 0.4s ease;

    &:hover {
        color: #984b43;
    }
`;

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-area: 1 / 1 / 2 / 3;
    }
`;
export const Div2 = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    margin-left: 1vw;
    justify-content: space-around;

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-area: 2 / 2 / 3 / 5;
    }
`;
export const Div3 = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.sm} {
        align-items: center;
        grid-area: 1 / 4 / 2 / 6;
    }
`;

export const NavLink = styled.a`
    font-size: 2.5rem;
    line-height: 32px;
    color: #fdf5e6;
    transition: 0.4s ease;
    &:hover {
        color: #984b43;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

export const SocialIcons = styled.a`
    transition: 0.4s ease;
    color: #fdf5e6;
    border-radius: 50px;
    padding: 8px;

    &:hover {
        color: #984b43;
        background-color: #eac67a;
        padding: 6px;
        justify-content: center;
        transform: scale(1.1);
        cursor: pointer;
    }
`;
