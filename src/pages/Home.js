import { Auction, Creators, Hero, NFT, Steps, Wallets } from '../components/home/index'

export default function Home() {
    return (
        <>
            <Hero />
            <Wallets />
            <Auction />
            <NFT />
            <Steps />
            <Creators />
        </>
    )
}