export const SquareItem = ({
  variation,
  bgImg,
  title,
  date
}) => {
  return (
    <div className='item' >
     {(variation === 'default' ||  variation === 'default1') &&
        <>
          <div className="square square-12"  style={{backgroundImage: `url(${bgImg})`}}></div>
          {title &&
            <div className='square square-11' >
              <h2>{title}</h2>
            </div>
          }
          <div className="square square-11-2"  style={{backgroundImage: `url(${bgImg})`}}></div>
          {date &&
            <div className='square square-7' >
              <p>{date}</p>
            </div>
          }
          <div className='square square-5'  style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-4'  style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-5-2'  style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3'  style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3-2'  style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-1'></div>
          <div className='square square-2'><div className='play'></div></div>
        </>
      }
      {variation === 'default2' &&
        <>
          <div className='square square-12' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-11' style={{backgroundImage: `url(${bgImg})`}}></div>
          {title &&
            <div className='square square-11-2'>
              <h2>{title}</h2>
            </div>
          }
          {date &&
            <div className='square square-7'>
              <p>{date}</p>
            </div>
          }
          <div className='square square-5-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-5' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-4' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-1-2'></div>
          <div className='square square-2-2'></div>
        </>
      }
      {variation === 'default3' &&
        <>
         <div className='square square-12' style={{backgroundImage: `url(${bgImg})`}}></div>
         {title &&
            <div className='square square-11-2'>
              <h2>{title}</h2>
            </div>
          }
          {date &&
            <div className='square square-11'>
              <p>{date}</p>
            </div>
          }
           <div className='square square-7' style={{backgroundImage: `url(${bgImg})`}}></div>
           <div className='square square-5' style={{backgroundImage: `url(${bgImg})`}}></div>
           <div className='square square-5-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-4' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-1'></div>
          <div className='square square-2'><div className='mail'></div></div>
        </>
      }
      {variation === 'default4' &&
        <>
          <div className='square square-12' style={{backgroundImage: `url(${bgImg})`}}></div>
          {title &&
            <div className='square square-11'>
              <h2>{title}</h2>
            </div>
          }
          <div className='square square-11-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-7' style={{backgroundImage: `url(${bgImg})`}}></div>
          {date &&
            <div className='square square-5'>
              <p>{date}</p>
            </div>
          }
           <div className='square square-5-2' style={{backgroundImage: `url(${bgImg})`}}></div>
           <div className='square square-4' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-1'></div>
          <div className='square square-2'><div className='play'></div></div>
        </>
      }
      {variation === 'default5' &&
        <>
          {title &&
            <div className='square square-12'>
              <h2>{title}</h2>
            </div>
          }
          <div className='square square-11' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-11-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          {date &&
            <div className='square square-7'>
              <p>{date}</p>
            </div>
          }
          <div className='square square-5-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-5' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-4' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-1-2'></div>
          <div className='square square-2-2'></div>
        </>
      }
      {variation === 'default6' &&
        <>
          {title &&
            <div className='square square-12'>
              <h2>{title}</h2>
            </div>
          }
          <div className='square square-11' style={{backgroundImage: `url(${bgImg})`}}></div>
          {date &&
            <div className='square square-11-2'>
              <p>{date}</p>
            </div>
          }
           <div className='square square-7' style={{backgroundImage: `url(${bgImg})`}}></div>
           <div className='square square-4' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-3-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-5' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-5-2' style={{backgroundImage: `url(${bgImg})`}}></div>
          <div className='square square-1'></div>
          <div className='square square-2'></div>
        </>
      }
    </div>
  );
};
