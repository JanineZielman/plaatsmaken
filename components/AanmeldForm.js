import { useEffect, useRef } from "react";

export const AanmeldForm = ({ title, slug }) => {
  const formLoadedAt = useRef(Date.now());

  useEffect(() => {
    window.handleCaptchaResponse = () => {
      document.getElementById('sib-captcha')?.dispatchEvent(new Event('captchaChange'));
    };

    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.LOCALE = 'en';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "De verstrekte informatie is ongeldig. Controleer uw gegevens en probeer het opnieuw.";

    window.REQUIRED_ERROR_MESSAGE = "Veld kan niet leeg blijven ";

    window.GENERIC_INVALID_MESSAGE = "De verstrekte informatie is ongeldig. Controleer uw gegevens en probeer het opnieuw.";




    window.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected'
      }
    };

    var AUTOHIDE = Boolean(0);

    return () => {
      delete window.handleCaptchaResponse;
    };
  }, [])

  function closePopup() {
    document.getElementById('orderForm').style.visibility = 'hidden';
    document.getElementById('orderForm').style.opacity = '0';
  }

  function preventSpam(event) {
    const formData = new FormData(event.currentTarget);

    if (formData.get('website') || Date.now() - formLoadedAt.current < 2000) {
      event.preventDefault();
    }
  }

  return (
    <div className="sib-form popup-form" id="orderForm">
      <div className="close" onClick={closePopup}>x</div>
      <div id="sib-form-container" className="sib-form-container">
        <div id="error-message" className="sib-form-message-panel">
          <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
              <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
            </svg>
            <span className="sib-form-message-panel__inner-text">
              Uw bericht kon helaas niet worden verstuurd, probeer het later nog eens.
            </span>
          </div>
        </div>
        <div></div>
        <div id="success-message" className="sib-form-message-panel" >
          <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
            </svg>
            <span className="sib-form-message-panel__inner-text">
              E-mail is verstuurd!
            </span>
          </div>
        </div>
        <div></div>
        <div id="sib-container" className="sib-container--large sib-container--vertical">
          <form id="sib-form" method="POST" action="https://dc539d8a.sibforms.com/serve/MUIFANzSlAdOmeOnRRpn9P6bHFdbLq421cmWE5geiYI7GOBFzcydUHZRFcdBFTAQVymkVY7wMCaYVYi8JrqKnybPNHcyyr90jl3Rw4gV7Vmb1PHevaotsvtBZisxMxVg_4QtCxLK5vHOsVXYHKDP8tjw8zNZvzVBQc8STMWOOaoPFy9aoJBTXkHPkH1eGAUNN3YhiH_hsu6IKuQ9" data-type="subscription" onSubmit={preventSpam}>
            <div >
              <div className="sib-form-block">
                <h2>Aanmelden {title}</h2>
              </div>
            </div>
            <div>
              <div className="sib-captcha sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <div className="g-recaptcha sib-visible-recaptcha" id="sib-captcha" data-sitekey="6LfsB38tAAAAANluEFMgu9V4IrIxTgSGLji07_fJ" data-callback="handleCaptchaResponse"></div>
                  </div>
                  <label className="entry__error entry__error--primary"></label>
                </div>
              </div>
            </div>
            <div>
              <div className="sib-form-block">
                <div className="sib-text-form-block">
                  <p>Als u het formulier instuurt neemt Plaatsmaken contact met u op.<br /></p>
                </div>
              </div>
            </div>
            <div>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row ">

                    <div className="entry__field">
                      <input className="input " maxlength="200" type="text" id="FULLNAME" name="FULLNAME" autocomplete="off" placeholder="Naam" data-required="true" required />
                    </div>
                  </div>

                  <label className="entry__error entry__error--primary">
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row ">

                    <div className="entry__field">
                      <input className="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="E-mail" data-required="true" required />
                    </div>
                  </div>

                  <label className="entry__error entry__error--primary">
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row ">

                    <div className="entry__field">
                      <input className="input " maxlength="200" type="text" id="ADRES" name="ADRES" autocomplete="off" placeholder="Adres" data-required="true" required />
                    </div>
                  </div>

                  <label className="entry__error entry__error--primary">
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row ">

                    <div className="entry__field">
                      <input className="input " maxlength="200" type="text" id="POSTCODE" name="POSTCODE" autocomplete="off" placeholder="Postcode" data-required="true" required />
                    </div>
                  </div>

                  <label className="entry__error entry__error--primary">
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row ">

                    <div className="entry__field">
                      <input className="input " maxlength="200" type="text" id="WOONPLAATS" name="WOONPLAATS" autocomplete="off" placeholder="Woonplaats" data-required="true" required />
                    </div>
                  </div>

                  <label className="entry__error entry__error--primary">
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">

                    <div class="entry__field">
                      <input class="input " maxlength="200" type="text" id="PHONE" name="PHONE" autocomplete="off" placeholder="Telefoonnummer" data-required="true" required />
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary">
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row ">

                    <div className="entry__field">
                      <input className="input " maxlength="200" type="text" id="OPMERKING" name="OPMERKING" autocomplete="off" placeholder="Opmerking / vraag" data-required="true" required />
                    </div>
                    <div className="entry__field">
                      <input className="input hide" maxlength="200" type="text" id="WORKSHOP" name="WORKSHOP" autocomplete="off" data-required="true" value={slug} required />
                    </div>
                  </div>

                  <label className="entry__error entry__error--primary">
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="sib-form-block">
                <button className="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
                  <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                    <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                  </svg>
                  Bestellen
                </button>
              </div>
            </div>

            <input type="text" name="email_address_check" value="" className="input--hidden" />
            <div className="spam-trap" aria-hidden="true">
              <label htmlFor="website">Laat dit veld leeg</label>
              <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" />
            </div>
            <input type="hidden" name="locale" value="en" />
          </form>
        </div>
      </div>
    </div>
  );
};
