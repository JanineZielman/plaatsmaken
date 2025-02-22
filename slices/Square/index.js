import React from 'react';
import { SquareItem } from '../../components/SquareItem';

/**
 * @typedef {import("@prismicio/client").Content.SquareSlice} SquareSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SquareSlice>} SquareProps
 * @param { SquareProps }
 */
const Square = ({ slice}) => {
  let variation =  'default' + Math.floor(Math.random() * 6 + 1);
  let bgImg, title, date, preview_video, type, url;
  if (slice.primary.agenda_item.data){
    bgImg = slice.primary.agenda_item.data.image.url;
    title =  slice.primary.agenda_item.data.title;
    date = slice.primary.agenda_item.data.date ? slice.primary.agenda_item.data.date : slice.primary.agenda_item.data.artist;
    preview_video = slice.primary.agenda_item.data.preview_video;
    type = slice.primary.agenda_item.type;
    if (type == 'agenda_item'){
      url = `/${slice.primary.agenda_item.lang}/agenda/${slice.primary.agenda_item.uid}?variation=${variation}&home=true`
    } else {
      url = `/${slice.primary.agenda_item.lang}/webshop/${slice.primary.agenda_item.uid}?home=true`
    }
  }
  return(
    <>
    {slice.primary.agenda_item.data &&
      <a href={url} className='item-wrapper'>
        <SquareItem variation={variation} bgImg={bgImg} title={title} date={date} preview_video={preview_video}/>
      </a>
    }
    </>
  )
}

export default Square