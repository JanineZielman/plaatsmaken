import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ImgSlice} ImgSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImgSlice>} ImgProps
 * @param { ImgProps }
 */
const Img = ({ slice }) => {
  return (
    <section className='content img-block'>
      {slice.primary.image?.url && <img src={slice.primary.image.url} alt={slice.primary.image.alt || ''} />}
      <div className='caption'><PrismicRichText className='caption' field={slice.primary.caption} /></div>
    </section>
  )
}

export default Img