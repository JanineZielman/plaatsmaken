import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.PageContentSlice} PageContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PageContentSlice>} PageContentProps
 * @param { PageContentProps }
 */
const PageContent = ({ slice }) => {
  return(
    <section className='content'>
      <h2>{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.intro}/>
      {slice.items.map((item, i) => {
        return(
          <div>
            {item.text && <PrismicRichText field={item.text}/>}
            {item.image && <PrismicNextImage field={item.image}/>}
          </div>
        )
      })}
    </section>
  )
}

export default PageContent