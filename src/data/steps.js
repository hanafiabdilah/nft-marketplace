import { BsWallet2 } from 'react-icons/bs'
import { ImDownload } from 'react-icons/im'
import { MdOutlineCollections } from 'react-icons/md'
import { MdSell } from 'react-icons/md'

const steps = [
    {
        icon: <BsWallet2 size="2em" />,
        title: 'Setup Your Wallet',
        description: 'Once You\'ve Setup Your Wallet of Choice. Connect it to OpenSea by Clicking the Wallet Icon in the Top Right Corner.'
    },
    {
        icon: <ImDownload size="2em" />,
        title: 'Create Your Collection',
        description: 'Set Up Your Collection. Add Social Links, a Description, Profile & Banner Images, and Set a Secondary Sales Fee'
    },
    {
        icon: <MdOutlineCollections size="2em" />,
        title: 'Add Your NFT\'s',
        description: 'Upload Your Work Add a Title and Description, and Customize Your NFTs With Properties, Stats, and Unlockable Content.'
    },
    {
        icon: <MdSell size="2em" />,
        title: 'List Them For Sale',
        description: 'Choose Between Auctions, Price Listings. You Choose How You Want to Sell Your NFTs & We Help You!',
    }
]

export default steps;