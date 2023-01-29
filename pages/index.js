import Image from "next/image"
import styles from "@/styles/Home.module.css"

export default function Home() {
    //How do we show the recently listed NFTs?

    //We will index the listing events off-chain and then read from our database.
    //Setup a server to listen for those events to be fired, and we will add them to a database to query.
    return <div className={styles.container}>Hi!</div>
}

//this initial page from create next app was a bit different from patrick one due to a next.js update, but I rearranged it to be the same as patrick
//deleted the google font thing aswell that was giving error
