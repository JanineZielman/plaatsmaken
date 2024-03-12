import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import React, { useEffect, useState } from 'react';
import { SquareItem } from '../../components/SquareItem';

/**
 * @typedef {import("@prismicio/client").Content.SquareSlice} SquareSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SquareSlice>} SquareProps
 * @param { SquareProps }
 */
const Square = ({ slice}) => {
  let variation = slice.variation;
  let bgImg = slice.primary.agenda_item.data.image.url;
  let title =  slice.primary.agenda_item.data.title;
  let date = slice.primary.agenda_item.data.date;
  return(
    <a href={`agenda/${slice.primary.agenda_item.uid}`} className='item-wrapper'>
      <SquareItem variation={variation} bgImg={bgImg} title={title} date={date}/>
    </a>
  )
}

export default Square