import { AppProps } from "next/app";
import "../style.css";
import { Fira_Sans, Fira_Sans_Condensed, Noto_Sans, Playfair_Display } from 'next/font/google';

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

export default function MyApp({  }: AppProps) {
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

      
    </>);
}
