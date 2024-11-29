import { PrismicRichText } from "@prismicio/react";
import Head from "next/head";
import { OrderForm } from "./OrderForm";

export const SquareItemShop = ({
  slices,
  variation,
  title,
  artist,
  prijs,
  oplage,
  afmeting,
  info,
  techniek,
  jaar,
  image,
  slug
}) => {
  
  function openPopup(){
    document.getElementById('orderForm').style.visibility = 'visible';
    document.getElementById('orderForm').style.opacity = '1';
  }
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css"/>
      <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
    </Head>

    <div className='left-info' >
     {(variation === 'default' ||  variation === 'default1') &&
        <>
          <div className="square square-12">
            <h2>{title}</h2>
            <p>{artist}</p>
            <div className="shop-info-text">
              <img src={image}/>
              <div className="mobile-only">
                {slices.map((item, i) => {
                  return(
                    <img key={`shopimg${i}`} src={item.primary.image.url}/>
                  )
                })}
              </div>
              <PrismicRichText field={info}/>     
              <div className="shop-info">
                <p>Jaar: {jaar}</p>
                <p>Techniek: {techniek}</p>
                <p>Afmeting: {afmeting}</p>
                <p>Oplage: {oplage}</p>
                <p>Prijs: €{prijs},-</p>
              </div>
              <div className="order" onClick={openPopup}>Bestel</div> 
            </div>   
          </div>
        </>
      }
    </div>

    <OrderForm title={title} slug={slug}/>



      

    </>
  );
};

