import { PrismicRichText } from "@prismicio/react";

export const SquareItemShop = ({
  variation,
  title,
  artist,
  prijs,
  oplage,
  afmeting,
  info,
  techniek,
  jaar
}) => {
  return (
    <div className='left-info' >
     {(variation === 'default' ||  variation === 'default1') &&
        <>
          <div className="square square-12">
            <h2>{title}</h2>
            <p>{artist}</p>
            <div className="shop-info-text">
              <PrismicRichText field={info}/>     
              <div className="shop-info">
                <p>Jaar: {jaar}</p>
                <p>Techniek: {techniek}</p>
                <p>Afmeting: {afmeting}</p>
                <p>Oplage: {oplage}</p>
                <p>Prijs: €{prijs},-</p>
              </div>
              <div className="order">Bestel</div> 
            </div>   
          </div>
        </>
      }
    </div>
  );
};
