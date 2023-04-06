import { AppContext, AppInitialProps } from 'next/app';
import '../styles/global/globals.css';

export const metadata = {
    title: "Chen Zadik's Portfolio",
    authors: [{ name: "Chen Zadik" }]
}

export default function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
    return <Component {...pageProps} />
}
