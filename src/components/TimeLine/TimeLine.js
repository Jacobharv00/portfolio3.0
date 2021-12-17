import React, { useState, useRef, useEffect } from 'react'

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { TimeLineData } from '../../constants/constants'

const TOTAL_CAROUSEL_COUNT = TimeLineData.length

const Timeline = () => {
  const [ activeItem, setActiveItem ] = useState( 0 )
  const carouselRef = useRef()

  const scroll = ( node, left ) => {
    return node.scrollTo( { left, behavior: 'smooth' } )
  }

  const handleClick = ( e, i ) => {
    e.preventDefault()

    if ( carouselRef.current ) {
      const scrollLeft = Math.floor( carouselRef.current.scrollWidth * 0.7 * ( i / TimeLineData.length ) )

      scroll( carouselRef.current, scrollLeft )
    }
  }

  const handleScroll = () => {
    if ( carouselRef.current ) {
      const index = Math.round( ( carouselRef.current.scrollLeft / ( carouselRef.current.scrollWidth * 0.7 ) ) * TimeLineData.length )

      setActiveItem( index )
    }
  }

  useEffect( () => {
    const handleResize = () => {
      scroll( carouselRef.current, 0 )
    }
    window.addEventListener( 'resize', handleResize )
  }, [] )

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle style={ { marginTop: '20px' } }>About Me</SectionTitle>
      <SectionText>
        I am what you would call a career changer. I have been a industry professional for the past 10+ years working at the same two companies. In the winters I worked for a large corporate conglomerate in the ski industry as a terrain park supervisor. In the summers I worked for a family owned landscape company as a maintenance manager. Now I have found a new passion that I love very much and spend everyday learning more and more. Below is a little timeline into my new journey!
      </SectionText>
      <CarouselContainer ref={ carouselRef } onScroll={ handleScroll }>
        <>
          { TimeLineData.map( ( item, index ) => (
            <CarouselMobileScrollNode
              key={ index }
              final={ index === TOTAL_CAROUSEL_COUNT - 1 }>
              <CarouselItem
                index={ index }
                id={ `carousel__item-${index}` }
                active={ activeItem }
                onClick={ ( e ) => handleClick( e, index ) }>
                <CarouselItemTitle>
                  { `${item.year}` }
                </CarouselItemTitle>
                <CarouselItemText>{ item.text }</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ) ) }
        </>
      </CarouselContainer>
      <CarouselButtons>
        { TimeLineData.map( ( item, index ) => {
          return (
            <CarouselButton
              key={ item }
              index={ index }
              active={ activeItem }
              onClick={ ( e ) => handleClick( e, index ) }
              type="button">
              <CarouselButtonDot active={ activeItem } />
            </CarouselButton>
          )
        } ) }
      </CarouselButtons>
      <SectionDivider />
    </Section>
  )
}

export default Timeline
