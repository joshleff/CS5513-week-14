import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import localFont from 'next/font/local';

const myFont = localFont({ src: "./JetBrainsMono-Regular.ttf" });




export default function MyApp( {Component, pageProps}) {
    return (
        <Layout>
            <main className={myFont.className}>
            <Component {...pageProps} />
            </main>
        </Layout>
    )
}
