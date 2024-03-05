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
  return(
    <section className='item' style={{backgroundImage: `url(${slice.primary.image.url})`}}>
      {slice.items.map((item, i) => {
        console.log(item)
        return(
          <div className={`square ${item.position}`}>
            {item.type == 'title' && 
              <h2>{slice.primary.title}</h2>
            }
            {item.type == 'date' &&
              <p>{slice.primary.date}</p>
            }
            {item.type == 'image' &&
              <PrismicNextImage field={slice.primary.image}/>
            }
          </div>
        )
      })}
    </section>
  )
}

export default Square