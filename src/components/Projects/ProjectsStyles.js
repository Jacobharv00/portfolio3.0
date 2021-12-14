import styled from 'styled-components'

export const Img = styled.img`
  max-width:100%;
  height:auto;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${( props ) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${( props ) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 5px;
  text-decoration: 1.5px solid underline red;

`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: green;
  padding: .5rem 0;
  font-size: ${( props ) => props.title ? '3rem' : '2rem'};
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`

export const CardInfo = styled.p`
  width: 100%;
  height: auto;
  padding: 0 50px;
  color: red;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${( props ) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
color:blue;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: white;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: green;

}
`

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: red;
font-size: 1.5rem;
`