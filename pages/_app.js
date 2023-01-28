import "@/styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"

//we add the Header here above Component im assuming so that independent of the page we are, the header is always above

//initializeOnMount is false because we're not using the server yet
export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <Header />
            <Component {...pageProps} />
        </MoralisProvider>
    )
}
