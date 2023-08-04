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
  const [language, setLanguage] = useState(getLanguageContext());
  console.log({language});
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
