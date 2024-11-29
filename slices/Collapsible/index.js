import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import ReactCollapsible from 'react-collapsible';

/**
 * @typedef {import("@prismicio/client").Content.CollapsibleSlice} CollapsibleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollapsibleSlice>} CollapsibleProps
 * @param { CollapsibleProps }
 */
const Collapsible = ({ slice }) => {
  return(
    <section className='content collapsible-wrapper'>
      <ReactCollapsible trigger={prismicH.asText(slice.primary.title)}>
        {slice.primary.image?.url &&<img src={slice.primary.image.url}/>}
        <PrismicRichText field={slice.primary.content}/>
      </ReactCollapsible>
    </section>
  )
}

export default Collapsible