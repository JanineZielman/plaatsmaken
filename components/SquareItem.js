import { useEffect } from "react";

export const SquareItem = ({
  variation,
  bgImg,
  title,
  date,
  preview_video
}) => {
  let bgUrl = `url(${bgImg})`

  if (preview_video?.url){
    bgUrl = ''
  }

  useEffect(() => {
    let random = Math.floor(Math.random() * document.querySelectorAll(".square-5, .square-7, .square-5-2, .square-1, .square-2, .square-1-2, .square-2-2, .square-3, .square-3-2 ").length);
    let selected = document.querySelectorAll(".square-5, .square-7, .square-5-2, .square-1, .square-2, .square-1-2, .square-2-2, .square-3, .square-3-2")[random]
    selected.classList.add('hide-bg');
    setTimeout(function() {
      selected.classList.remove('hide-bg');
    }, 5000);
    setInterval(function() {
      let random = Math.floor(Math.random() * document.querySelectorAll(".square-5, .square-7, .square-5-2,  .square-1, .square-2, .square-1-2, .square-2-2, .square-3, .square-3-2 ").length);
      let selected = document.querySelectorAll(".square-5, .square-7, .square-5-2,  .square-1, .square-2, .square-1-2, .square-2-2, .square-3, .square-3-2 ")[random];
      selected.classList.add('hide-bg');
      setTimeout(function() {
        selected.classList.remove('hide-bg');
      }, 5000);
    }, 5000);
  }, [])
  return (
    <div className='item' >
     {(variation === 'default' ||  variation === 'default1') &&
        <>
          <div className="square square-12"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {title ?
            <div className='square square-11' >
              <h2>{title}</h2>
              {date &&<p>{date}</p>}
            </div>
          :
            <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className="square square-11-2"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className="square square-7"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-4'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5-2'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
        </>
      }
      {variation === 'default2' &&
        <>
          <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {title ?
            <div className='square square-11-2'>
              <h2>{title}</h2>
              {date &&<p>{date}</p>}
            </div>
            :
            <div className='square square-11-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className="square square-7"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
        </>
      }
      {variation === 'default3' &&
        <>
         <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
         {title ?
            <div className='square square-11-2'>
              <h2>{title}</h2>
              {date &&<p>{date}</p>}
            </div>
            :
            <div className='square square-11-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className="square square-11"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-7' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-5' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
        </>
      }
      {variation === 'default4' &&
        <>
          <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {title ?
            <div className='square square-11'>
              <h2>{title}</h2>
              {date &&<p>{date}</p>}
            </div>
            :
            <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className='square square-11-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-7' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className="square square-5"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
        </>
      }
      {variation === 'default5' &&
        <>
          {title ?
            <div className='square square-12'>
              <h2>{title}</h2>
              {date &&<p>{date}</p>}
            </div>
            :
            <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-11-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className="square square-7"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
        </>
      }
      {variation === 'default6' &&
        <>
          {title ?
            <div className='square square-12'>
              <h2>{title}</h2>
              {date &&<p>{date}</p>}
            </div>
            :
            <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className="square square-11-2"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-7' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-2-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
        </>
      }
      {preview_video?.url &&
        <video muted autoPlay loop playsInline className="bg-vid">
          <source src={preview_video.url} type="video/mp4"/>
        </video>
      }
    </div>
  );
};
