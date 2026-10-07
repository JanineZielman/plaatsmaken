import { AanmeldForm } from "./AanmeldForm";


const Button = ({ title, slug, lang, settings }) => {
  function openPopup() {
    document.getElementById('orderForm').style.visibility = 'visible';
    document.getElementById('orderForm').style.opacity = '1';
  }
  return (
    <>
      <div className="aanmelden order" onClick={openPopup}>{settings.aanmeld_knop}</div><br />
      <AanmeldForm title={title} slug={slug} settings={settings} />
    </>
  )
}

export default Button