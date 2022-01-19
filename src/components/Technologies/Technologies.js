import React from 'react'
import { DiJsBadge, DiRubyRough } from 'react-icons/di'
import { FaTools } from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Tech</SectionTitle>
    <SectionText>
      I am experienced using multiple different Front-End languages, Back-End languages, frameworks, and different tools to help achieve a great end product.
    </SectionText>
    <List>
      <ListItem>
        <DiJsBadge size='4rem' style={ { color: '#126069' } } />
        <br />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript, React, CSS, HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRubyRough size='4rem' style={ { color: '#126069' } } />
        <br />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Ruby, Rails, SQLite3, PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaTools size='3rem' style={ { color: '#126069' } } />
        <br />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Git/Github, Chrome DevTools, Styled-Components, Material UI, Tailwind, Heroku, Netlify, Hostinger, NPM, Commerce.js, Stripe.js, email.js, Figma, dbdiagram, Selenium WebDriver, React Testing Library, Jest
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
