import React from 'react'
import { AanmeldForm } from "./AanmeldForm";


const Button = ({title, slug}) => {
  function openPopup(){
    document.getElementById('orderForm').style.visibility = 'visible';
    document.getElementById('orderForm').style.opacity = '1';
  }
  return(
    <>
    <div className="aanmelden order" onClick={openPopup}>Aanmelden</div><br/>
    <AanmeldForm title={title} slug={slug}/>
    </>
  )
}

export default Button