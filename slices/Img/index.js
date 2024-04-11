import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.ImgSlice} ImgSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImgSlice>} ImgProps
 * @param { ImgProps }
 */
const Img = ({ slice }) => {
  return(
    <section className='content img-block'>
      <PrismicNextImage field={slice.primary.image}/>
      <div className='caption'><PrismicRichText className='caption' field={slice.primary.caption}/></div>
    </section>
  )
}

export default Img