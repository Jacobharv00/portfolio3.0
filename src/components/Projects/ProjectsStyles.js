import styled from 'styled-components'

export const Img = styled.img`
  max-width:100%;
  height:auto;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
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
  box-shadow: 4px 3px 20px rgba(60, 78, 88, 0.5);
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
  text-decoration: 1.5px solid underline #984B43;
  color: #126069;
  font-weight: 700;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #126069;
  padding: .5rem 0;
  font-size: 3rem;
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
  color: #fdf5e6;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  margin-bottom: 20px;
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
color:#fdf5e6;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #126069;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #EAC67A;
  color: #984B43;

}
`

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #fdf5e6;
font-size: 1.5rem;
`