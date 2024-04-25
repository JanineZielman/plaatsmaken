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
  return (
    <div className='item' >
     {(variation === 'default' ||  variation === 'default1') &&
        <>
          <div className="square square-12"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {title ?
            <div className='square square-11' >
              <h2>{title}</h2>
            </div>
          :
            <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className="square square-11-2"  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {date &&
            <div className='square square-7' >
              <p>{date}</p>
            </div>
          }
          <div className='square square-5'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-4'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5-2'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2'  style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1'></div>
          <div className='square square-2'></div>
        </>
      }
      {variation === 'default2' &&
        <>
          <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {title ?
            <div className='square square-11-2'>
              <h2>{title}</h2>
            </div>
            :
            <div className='square square-11-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          {date &&
            <div className='square square-7'>
              <p>{date}</p>
            </div>
          }
          <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1-2'></div>
          <div className='square square-2-2'></div>
        </>
      }
      {variation === 'default3' &&
        <>
         <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
         {title ?
            <div className='square square-11-2'>
              <h2>{title}</h2>
            </div>
            :
            <div className='square square-11-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          {date &&
            <div className='square square-11'>
              <p>{date}</p>
            </div>
          }
           <div className='square square-7' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-5' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1'></div>
          <div className='square square-2'></div>
        </>
      }
      {variation === 'default4' &&
        <>
          <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {title ?
            <div className='square square-11'>
              <h2>{title}</h2>
            </div>
            :
            <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className='square square-11-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-7' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {date &&
            <div className='square square-5'>
              <p>{date}</p>
            </div>
          }
           <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1'></div>
          <div className='square square-2'></div>
        </>
      }
      {variation === 'default5' &&
        <>
          {title ?
            <div className='square square-12'>
              <h2>{title}</h2>
            </div>
            :
            <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-11-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {date &&
            <div className='square square-7'>
              <p>{date}</p>
            </div>
          }
          <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1-2'></div>
          <div className='square square-2-2'></div>
        </>
      }
      {variation === 'default6' &&
        <>
          {title ?
            <div className='square square-12'>
              <h2>{title}</h2>
            </div>
            :
            <div className='square square-12' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          }
          <div className='square square-11' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          {date &&
            <div className='square square-11-2'>
              <p>{date}</p>
            </div>
          }
           <div className='square square-7' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
           <div className='square square-4' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-3-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-5-2' style={{backgroundImage: bgUrl, backgroundColor: 'transparent'}}></div>
          <div className='square square-1'></div>
          <div className='square square-2'></div>
        </>
      }
      {preview_video?.url &&
        <video muted autoPlay loop playsInline class="bg-vid">
          <source src={preview_video.url} type="video/mp4"/>
        </video>
      }
    </div>
  );
};
