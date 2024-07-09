import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    // output: 'server', // Pendiente de revisar
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        fallback : {
            en : 'es'
        },
        routing: {
            includeDefaultLocale: false, // Remove the default locale from the URL: es => / y en => /en
            //strategy: 'prefix', // Lo que hace es que si la ruta es /en/about, se carga la página en inglés.
        }
    },
});