import { createContext } from 'react';

import translationsPT from '../../translations_pt.json';
import translationsEN from '../../translations_en.json';
import translationsFR from '../../translations_fr.json';

export const translations = {
  EN: translationsEN,
  PT: translationsPT,
  FR: translationsFR,
}

export const LanguageContext = createContext(translations)
