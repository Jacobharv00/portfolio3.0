import styled from "styled-components";

export const LeftSection = styled.div`
    width: 100%;

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 80%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
`;

export const Img = styled.img`
    height: auto;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    margin-top: 7vh;

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        display: flex;
        flex: 1
        flex-direction: row;
        margin-bottom: 20px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 20vw;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        height: auto;
        width: 40vw;
        display: flex;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        height: auto;
        width: 50vw;
        display: flex;
        flex-direction: column;
    }
`;
