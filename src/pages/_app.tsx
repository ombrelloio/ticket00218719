import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import Bootstrap from 'src/Bootstrap';
import { Fira_Sans, Fira_Sans_Condensed, Noto_Sans, Playfair_Display } from 'next/font/google';


import 'assets/main.scss';

const noto = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
});

const firaSansCondensed = Fira_Sans_Condensed({
  weight: ['100', '200', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-firaSansCondensed',
  preload: false,
  display: 'swap',
});

const firaSans = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-firaSans',
  preload: false,
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-playfairDisplay',
  preload: false,
  display: 'swap',
});


function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    <>
      <style jsx global>{`
        :root {
          --font-noto: ${noto.style.fontFamily};
          --font-firaSansCondensed: ${firaSansCondensed.style.fontFamily};
          --font-firaSans: ${firaSans.style.fontFamily};
          --font-playfairDisplay: ${playfairDisplay.style.fontFamily};
        }
      `}</style>


      <Bootstrap {...pageProps} />
      {/*
        // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
        // Note Next.js does not (currently) provide anything for translation, only i18n routing.
        // If your app is not multilingual, next-localization and references to it can be removed.
      */}
      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        <Component {...rest} />
      </I18nProvider>
    </>
  );
}

export default App;
