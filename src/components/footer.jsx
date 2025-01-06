import { InstagramIcon, TwitterIcon, TwitchIcon, TiktokIcon, FacebookIcon, DiscordIcon, SpotifyIcon, YoutubeIcon, AppleIcon, SoundcloudIcon, MusicIcon, RightArrowIcon } from "./icons";

let links = [
    "About Monstercat",
    "Contact Us",
    "Careers",
    "News",
    "Press",
    "Terms Of Service",
    "Privacy Policy",
]

let logos = [
    <YoutubeIcon />,
    <InstagramIcon />,
    <TiktokIcon />,
    <TwitterIcon />,
    <SpotifyIcon />,
    <AppleIcon />,
    <TwitchIcon />,
    <FacebookIcon />,
    <DiscordIcon />,
    <SoundcloudIcon />,
    <MusicIcon />,

]

function Footer() {
    return (
        <>
            <footer className="px-5 mt-25 lg:w-auto lg:px-35 lg:mt-15">
                <div className='border-t border-b border-foreground md:flex md:justify-between md:pb-10'>
                    <ul className='mt-10 flex flex-col xl:hidden'>
                        {links.map((link) => (
                            <li key={link}><a href="" className='uppercase md:text-lg'>{link}</a></li>
                        ))}
                    </ul>
                    
                    <ul className='mt-10 hidden xl:flex xl:flex-col xl:gap-4'>
                        {links.slice(0, -2).map((link) => (
                            <li key={link}><a href="" className='uppercase md:text-lg'>{link}</a></li>
                        ))}
                    </ul>
                    <ul className='mt-10 hidden xl:flex xl:flex-col xl:gap-4'>
                        {links.slice(-2).map((link) => (
                            <li key={link}><a href="" className='uppercase md:text-lg'>{link}</a></li>
                        ))}
                    </ul>

                    <div className='my-10 md:mb-0 md:flex md:flex-col md:justify-between'>
                        <div className='md:flex md:flex-col md:gap-4'>
                            <h3 className='uppercase text-gray text-lg'>Monstercat News</h3>
                            <p className='text-lightgray italic font-sans text-sm mt-2 w-80'>Don't miss a thing, stay up to date with the latest news from us.</p>
                        </div>
                        <div className='relative rounded-none'>
                            <input className='border-b border-b-gray w-full py-2 pl-2 text-gray bg-none mt-4 font-sans' type="text" placeholder='Enter email' />
                            <button className='group absolute rounded-none right-0 bottom-0 px-3 py-2 text-foreground flex justify-center items-center bg-none border-none hover:bg-foreground hover:text-background cursor-pointer'>
                                <RightArrowIcon className="transition-all duration-300" />
                            </button>
                        </div>
                    </div>

                </div>
                <div className='my-10 block md:flex md:justify-between md:items-center'>
                    <p className='text-lightgray italic font-sans text-sm'>2011 - 2024 © Monstercat, All Rights Reserved</p>
                    <ul className='flex justify-start mt-5 flex-wrap gap-3 md:justify-end md:mt-0'>
                        {logos.map((logo) => (
                            <li><a className='font-normal' href="">{logo}</a></li>
                        ))}
                    </ul>
                </div>

                <div className='text-center md:pt-8 md:w-3/4 md:mx-auto'>
                    <p className='text-xs italic text-lightgray text-center font-sans font-thin'>We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.</p>
                    <p className='text-xs italic text-lightgray text-center mt-5 mb-10 font-sans font-thin'>We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;