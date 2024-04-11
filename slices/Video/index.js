import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @param { VideoProps }
 */
const Video = ({ slice }) => {
  return(
    <section className='content embed'>
      <iframe src={slice.primary.embed}/>
      <div className='caption'><PrismicRichText className='caption' field={slice.primary.caption}/></div>
    </section>
  )
}

export default Video