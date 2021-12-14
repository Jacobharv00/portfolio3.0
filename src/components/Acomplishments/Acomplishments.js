import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 10, text: 'Projects Built in 2021.' },
  { number: 300, text: 'Github commits in 2021', },
  { number: 1, text: "Graduated Flatiron School.", },
  { number: 4, text: 'Pair programing projects', }
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      { data.map( ( card, index ) => (
        <Box key={ index }>
          <BoxNum>{ card.number }+</BoxNum>
          <BoxText>{ card.text }</BoxText>
        </Box>
      ) ) }
    </Boxes>
    <SectionDivider />
  </Section>
)

export default Acomplishments
