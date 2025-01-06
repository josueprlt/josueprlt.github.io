import { useEffect } from 'react';
import { InstagramIcon, TwitterIcon, TwitchIcon, TiktokIcon, FacebookIcon, DiscordIcon, SpotifyIcon, PlayIcon, ShareIcon, UsersIcon } from "../components/icons";
import Navbar from "./navbar";

let music = {
    firstname_music: 'Level Days',
    name_music: 'Conro',
    artists: [
        {
            image_profil: '/img/artist1.jpg'
        },
        {
            image_profil: '/img/artist2.webp'
        },
        {
            image_profil: '/img/artist3.jpg'
        }
    ],
    image_album: '/img/albumCover1.jpg',
    name_album: 'Instinct',
    date_album: 'May 22, 2020'
}

function Header() {
    useEffect(() => {
        const headerRef = document.getElementById('header');
        if (headerRef) {
            headerRef.style.position = 'relative';
        }
    }, []);

    return (
        <>
            <header id='header' className="h-auto lg:px-20 lg:py-5 md:h-[800px] after:w-full after:h-3/4 after:absolute after:left-0 after:-bottom-4 after:z-2 after:bg-gradient-to-b after:to-background">
                <div className="h-full relative z-20">
                    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-backgroundOpacity lg:bg-transparent px-4 py-2 z-50 lg:px-8 lg:py-4">
                        <a href="/"><img src="/img/monstercat-logo.webp" alt="Image de monstercat" className="w-9 cursor-pointer sm:w-12 lg:w-15" /></a>
                        <div className="hidden pr-4 sm:flex sm:gap-4 lg:absolute lg:top-30 lg:right-0 lg:flex lg:flex-col lg:gap-4 lg:z-20 lg:pr-8">
                            <a href="/"><InstagramIcon /></a>
                            <a href="/"><TiktokIcon /></a>
                            <a href="/"><TwitterIcon /></a>
                            <a href="/"><TwitchIcon /></a>
                            <a href="/"><FacebookIcon /></a>
                            <a href="/"><DiscordIcon /></a>
                            <a href="/"><SpotifyIcon /></a>
                        </div>
                        <Navbar />
                    </nav>

                    <section className="flex items-center flex-col mt-10 pt-10 px-5 lg:gap-20 lg:flex-row lg:pt-20 lg:pl-15 lg:z-20">
                        <div className="flex flex-col-reverse gap-10 lg:gap-2 lg:flex-row">
                            <p className="hidden lg:flex lg:gap-7 rotate-180 text-cover font-sans italic"><span className="relative text-primary after:absolute after:w-[1.5px] after:h-4 after:bg-white after:left-[8px] after:-bottom-[22.5px]">{music.name_album}</span>Released {music.date_album}</p>
                            <p className="text-base flex gap-7 lg:hidden font-sans italic"><span className="relative text-primary after:absolute after:w-4 after:h-[1px] after:bg-white after:left-[57px] after:bottom-[10px]">{music.name_album}</span>Released {music.date_album}</p>
                            <img src={music.image_album} alt="Image de la couverture d'album" className="w-full sm:w-[600px] lg:w-[400px] xl:w-[450px]" />
                        </div>
                        <div className='w-full sm:w-[600px] lg:w-auto mt-5'>
                            <p className='text-xl sm:text-5xl text-outline'>{music.firstname_music}</p>
                            <p className='text-xl sm:text-4xl font-bold mt-2'>{music.name_music}</p>

                            <div className='my-10 flex gap-5'>
                                {music.artists.map((artist, index) => (
                                    <>
                                        {index > 1 ? (
                                            index === 2 && (
                                                <div key={index} className='w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-lightgray'>
                                                    <UsersIcon className='text-gray w-8 h-8 mr-px' />
                                                    <span className='text-gray text-sm'>+{music.artists.length - 2}</span>
                                                </div>
                                            )
                                        ) : (
                                            <div key={index} className='w-20 h-20 rounded-full overflow-hidden'>
                                                <img className='w-full h-full object-cover' src={artist.image_profil} alt="Image artiste de l'album" />
                                            </div>
                                        )}
                                    </>
                                ))}
                            </div>

                            <div className='flex gap-2 flex-wrap'>
                                <button className="flex justify-center items-center gap-1 uppercase text-foreground bg-primary border-none rounded-none px-5 py-3 cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300 font-normal">
                                    <PlayIcon className="transition-all duration-300" />
                                    Listen now
                                </button>
                                <button className="flex justify-center items-center gap-1 uppercase text-foreground border border-foreground rounded-none px-5 py-3 cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300 font-normal">
                                    <ShareIcon className="transition-all duration-300" />
                                    Share
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="absolute inset-0 z-1 bg-cover bg-center filter blur-sm" style={{ backgroundImage: `url(${music.image_album})` }}></div>
            </header>
        </>
    )
}

export default Header;