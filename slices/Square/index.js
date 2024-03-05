import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.SquareSlice} SquareSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SquareSlice>} SquareProps
 * @param { SquareProps }
 */
const Square = ({ slice }) => {
  console.log(slice)
  // style={{backgroundImage: `url(${slice.primary.agenda_item.data.image.url})`}}
  return(
    <section className='item' style={{backgroundImage: `url(${slice.primary.agenda_item.data.image.url})`}} >
      {slice.variation === 'default' &&
        <>
          <div className='square square-11'>
            <h2>{slice.primary.agenda_item.data.title}</h2>
          </div>
          <div className='square square-7'>
            <p>{slice.primary.agenda_item.data.date}</p>
          </div>
          <div className='square square-5'></div>
          <div className='square square-3'></div>
          <div className='square square-1'></div>
          <div className='square square-2'></div>
        </>
      }
      {slice.variation === 'default2' &&
        <>
          <div className='square square-11-2'>
            <h2>{slice.primary.agenda_item.data.title}</h2>
          </div>
          <div className='square square-7'>
            <p>{slice.primary.agenda_item.data.date}</p>
          </div>
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
          <div className='square square-11'>
            <p>{slice.primary.agenda_item.data.date}</p>
          </div>
          <div className='square square-3-2'></div>
          <div className='square square-4'></div>
          <div className='square square-3'></div>
          <div className='square square-1'></div>
          <div className='square square-2'></div>
        </>
      }
          {/* // <div className={`square ${item.position}`}>
          //   {item.type == 'title' && 
          //     <h2>{slice.primary.title}</h2>
          //   }
          //   {item.type == 'date' &&
          //     <p>{slice.primary.date}</p>
          //   }
          //   {item.type == 'image' &&
          //     <PrismicNextImage field={slice.primary.image}/>
          //   }
          // </div> */}

    </section>
  )
}

export default Square