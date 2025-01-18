import React, { useCallback } from 'react'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './embala-carousel.css'
import { delay } from 'framer-motion'

export default function EmblaCarousel({ slides }: { slides: string[]} ) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 6000})])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className='embla__slide__img'/>
            </div>
          ))}
        </div>
      </div>
      <div className='button_container'>
        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  )
}
