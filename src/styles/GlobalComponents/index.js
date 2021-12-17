import styled from 'styled-components'

export const Section = styled.section`
  display: ${( props ) => props.grid ? "grid" : "flex"};
  flex-direction: ${( props ) => props.row ? "row" : "column"};
  padding: ${( props ) => props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${( props ) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${( props ) => props.theme.breakpoints.sm} {
    padding: ${( props ) => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${( props ) => props.main ? '65px' : '56px'};
  line-height: ${( props ) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(6deg, #984B43 18.77%, rgba(255, 255, 255, 0.7) 55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${( props ) => props.main ? '58px 0 16px' : '0'};
  

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${( props ) => props.main ? '56px' : '48px'};
    line-height: ${( props ) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${( props ) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${( props ) => props.main ? '28px' : '32px'};
    line-height: ${( props ) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${( props ) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: #FDF5E6; 

  @media ${( props ) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${( props ) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`
  width: 100px;
  height: 5px;
  border-radius: 30px;
  background-color: #fff;
  background: ${( props ) => props.colorAlt ?
    'linear-gradient(270deg, #EAC67A 0%, #984B43 90%)' :
    'linear-gradient(270deg, #EAC67A 0%, #984B43 90%)'};
    margin: ${( props ) => props.divider ? "4rem 0" : ""};

  @media ${( props ) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
    margin-bottom: -12px;
  }

  @media ${( props ) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${( props ) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${( props ) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${( { large } ) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${( props ) => props.theme.breakpoints.md} {
    margin-left: ${( { large } ) => large ? '16px' : '8px'};

  }
  @media ${( props ) => props.theme.breakpoints.sm} {
    margin-left: ${( { large } ) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${( { large } ) => large ? '32px' : '24px'};

  @media ${( props ) => props.theme.breakpoints.md} {
    height: ${( { nav } ) => nav ? '16px' : '24px'};
  }

  @media ${( props ) => props.theme.breakpoints.sm} {
    height: ${( { large } ) => large ? '32px' : '16px'};
  }
`
