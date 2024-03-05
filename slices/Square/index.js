import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import React, { useEffect, useState } from 'react';

/**
 * @typedef {import("@prismicio/client").Content.SquareSlice} SquareSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SquareSlice>} SquareProps
 * @param { SquareProps }
 */
const Square = ({ slice}) => {

  return(
    <section className='item' style={{backgroundImage: `url(${slice.primary.agenda_item.data.image.url})`}} >
      {slice.variation === 'default' &&
        <>
          <div className='square square-11'>
            <h2>{slice.primary.agenda_item.data.title}</h2>
          </div>
          {slice.primary.agenda_item.data.date &&
            <div className='square square-7'>
              <p>{slice.primary.agenda_item.data.date}</p>
            </div>
          }
          <div className='square square-5'></div>
          <div className='square square-3'></div>
          <div className='square square-1'></div>
          <div className='square square-2'><div className='play'></div></div>
        </>
      }
      {slice.variation === 'default2' &&
        <>
          <div className='square square-11-2'>
            <h2>{slice.primary.agenda_item.data.title}</h2>
          </div>
          {slice.primary.agenda_item.data.date &&
            <div className='square square-7'>
              <p>{slice.primary.agenda_item.data.date}</p>
            </div>
          }
          <div className='square square-5-2'></div>
          <div className='square square-4'></div>
          <div className='square square-1-2'></div>
          <div className='square square-2-2'></div>
        </>
      }
      {slice.variation === 'default3' &&
        <>
          <div className='square square-11-2'>
            <h2>{slice.primary.agenda_item.data.title}</h2>
          </div>
          {slice.primary.agenda_item.data.date &&
            <div className='square square-11'>
              <p>{slice.primary.agenda_item.data.date}</p>
            </div>
          }
          <div className='square square-3-2'></div>
          <div className='square square-4'></div>
          <div className='square square-3'></div>
          <div className='square square-1'></div>
          <div className='square square-2'><div className='mail'></div></div>
        </>
      }
      {slice.variation === 'default4' &&
        <>
          <div className='square square-11'>
            {slice.primary.agenda_item.data.title ?
              <h2>{slice.primary.agenda_item.data.title}</h2>
            :
              <video autoPlay muted loop>
                <source src="./logo.mov" type="video/mp4"/>
              </video>
            }
          </div>
          {slice.primary.agenda_item.data.date &&
            <div className='square square-5'>
              <p>{slice.primary.agenda_item.data.date}</p>
            </div>
          }
          <div className='square square-3'></div>
          <div className='square square-1'></div>
          <div className='square square-2'><div className='play'></div></div>
        </>
      }
      {slice.variation === 'default5' &&
        <>
          <div className='square square-12'>
            <h2>{slice.primary.agenda_item.data.title}</h2>
          </div>
          {slice.primary.agenda_item.data.date &&
            <div className='square square-7'>
              <p>{slice.primary.agenda_item.data.date}</p>
            </div>
          }
          <div className='square square-5-2'></div>
          <div className='square square-3-2'></div>
          <div className='square square-1-2'></div>
          <div className='square square-2-2'></div>
        </>
      }
      {slice.variation === 'default6' &&
        <>
          <div className='square square-12'>
            <h2>{slice.primary.agenda_item.data.title}</h2>
          </div>
          {slice.primary.agenda_item.data.date &&
            <div className='square square-11-2'>
              <p>{slice.primary.agenda_item.data.date}</p>
            </div>
          }
          <div className='square square-3'></div>
          <div className='square square-5'></div>
          <div className='square square-1'></div>
          <div className='square square-2'></div>
        </>
      }
    </section>
  )
}

export default Square