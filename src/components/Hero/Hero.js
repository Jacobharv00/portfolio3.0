import React from 'react'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Jacob Harvey
      </SectionTitle>
      <SectionText>
        Hello! My name is Jacob Harvey, I am Full Stack Software Engineer with enthusiasm for creating captivating web applications that can help ease end-users everyday life. When I am not having a blast programming I love to surf, snowboard, read, travel, and spend time with my family.
      </SectionText>
    </LeftSection>
  </Section>
)

export default Hero