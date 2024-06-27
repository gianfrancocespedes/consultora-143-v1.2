import english from '@/i18n/en.json';
import spanish from '@/i18n/es.json';
import { defaultLang, routes } from '@/i18n/ui';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({ currentLocale = defaultLang }) => {
    if (currentLocale === LANG.ENGLISH) return {...spanish, ...english}; // If the language is English, return the English translations and the Spanish translations as fallback
	return spanish;
}

// Get the translated path
export function useTranslatedPath (actualLang) {
    return function translatePath(path, lang = actualLang) {
        const hasTranslation = routes[lang][path] !== undefined; // Verify if the path has a translation
        //const translatedPath = hasTranslation ? `/${routes[lang][path]}` : `/${routes[lang]['notFound']}`; // If the path has a translation, return the translated path, otherwise, return the not found path
        const translatedPath = hasTranslation ? `/${routes[lang][path]}` : null; // If the path has a translation, return the translated path, otherwise, return null
        if (!translatedPath) return null; // If the path has no translation, return null
        if (translatedPath == '/') return lang == defaultLang ? translatedPath : `/${lang}`; // If the path is the root path, return the language prefix if it is not the default language
        return lang == defaultLang ? translatedPath : `/${lang}${translatedPath}`; // If the language is the default language, return the translated path, otherwise, return the path with the language prefix
    };
}

// Get the language from the URL
export function getLangFromUrl(url) {
	const [, lang] = url.pathname.split('/'); // Get the language prefix from the URL
	if (lang in routes) return lang; // If the language prefix is a valid language, return it
	return defaultLang;
}

