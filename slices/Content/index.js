import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param { ContentProps }
 */
const Content = ({ slice }) => (
  <section className='content'>
    {slice.primary.intro[0] && <div className="intro"><PrismicRichText field={slice.primary.intro}/></div>}
    <PrismicRichText field={slice.primary.text}/>
  </section>
)

export default Content