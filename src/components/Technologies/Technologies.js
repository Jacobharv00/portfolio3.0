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
      I am experienced in using multiple different Front-End languages, Back-End languages, frameworks and tools.
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
            Git/Github, Styled-Components, Material UI, Heroku, Netlify, NPM, Commerce.js, Stripe.js, Figma, dbdiagram, email.js, Selenium WebDriver
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
