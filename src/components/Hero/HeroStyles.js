import styled from 'styled-components'

export const LeftSection = styled.div`
  width: 100%;
  @media ${( props ) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${( props ) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`

export const Img = styled.img`
  /* max-width:100%; */
  height:auto; 
  object-fit: cover;
  overflow: hidden;
  border-radius: 50px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

  @media ${( props ) => props.theme.breakpoints.sm} {
    width: 80%;
    align-self: center;
    display: flex;
    /* flex-direction: column; */
  }

  @media ${( props ) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  @media ${( props ) => props.theme.breakpoints.lg} {
    height: auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
  }

    @media ${( props ) => props.theme.breakpoints.xl} {
      width: 40vw;
      margin-right: 60vw;
      display: flex;
      flex-direction: column;
  }

  `
