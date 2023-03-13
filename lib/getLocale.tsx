import "server-only";

const langs = {
    en: () => import("../locales/en.json").then((module) => module.default),
    pt: () => import("../locales/pt.json").then((module) => module.default),
};

export const getLocale = async (locale = "en") => langs[locale]();
