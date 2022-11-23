import { Auction, Hero, NFT, Wallets } from '../components/home/index'

export default function Home() {
    return (
        <>
            <Hero />
            <Wallets />
            <Auction />
            <NFT />
        </>
    )
}