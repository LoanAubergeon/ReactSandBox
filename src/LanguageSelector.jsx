import React, {useState} from 'react'

import 'bulma/css/bulma.css'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {

  const [buttonText, setButtonText] = useState();

  const changeText = () => {
    if (buttonText === "fr") {
      i18n.changeLanguage("fr");
      setButtonText("en");
    } else {
      i18n.changeLanguage("en");
      setButtonText("fr");
    }
  }
  
  const { i18n } = useTranslation()

  const str2logo = (buttonText === "fr") ? "🇫🇷" : "🇬🇧";

  return (
    <div>
      <button
        value={buttonText}
        class="button" 
        onClick={() => {
        changeText();
      }}>
        {str2logo}
      </button>
    </div>
  )
}

export default LanguageSelector