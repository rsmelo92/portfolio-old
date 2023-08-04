import React, { useState } from "react";

import { translations } from "./context"

import { LanguageContext } from "./context"

export const LanguageProvider = ({ children }) => {
  const getLanguageContext = () => {
    const lang = navigator.language
    if(!translations) return
    if(lang.includes("fr")) return translations.FR
    if(lang.includes("pt")) return translations.PT
    return translations.EN
  }
  const updateLanguage = (value) => {
    const lang = translations[value]
    setLanguage(lang)
  }
  const [language, setLanguage] = useState(getLanguageContext());

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
