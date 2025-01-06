import React from 'react';

const albums = [
    {
        title: 'Feeling',
        creator: 'Conro',
        image: '/img/albumCover1.jpg'
    },
    {
        title: 'Find u.',
        creator: 'Conro',
        image: '/img/albumCover2.jpg'
    },
    {
        title: 'Falling for you',
        creator: 'Sabai, With Love & Nevve',
        image: '/img/albumCover3.jpg'
    },
    {
        title: 'Memory Bank',
        creator: 'Dyro x Conro',
        image: '/img/albumCover4.jpg'
    },
    {
        title: 'Luv(Drunk)',
        creator: 'Conro',
        image: '/img/albumCover5.jpg'
    },
    {
        title: 'You gotta be',
        creator: 'Conro & LissA',
        image: '/img/albumCover6.jpg'
    },
]

function TrackList() {

    return (
        <section className="mx-auto mt-10 px-5 text-xl font-normal w-full mt-5 lg:w-auto lg:px-35 lg:mt-20 lg:pb-25">
            <h2 className="uppercase lg:text-4xl font-normal md:mb-10">Other releases like this</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-5">
                {albums.map((album, index) => (
                    <div
                        key={index}
                        className="col-span-1 cursor-pointer"
                    >
                        <div className="w-full h-40 overflow-hidden">
                            <img
                                src={album.image}
                                className="object-cover h-full w-full"
                                alt={`Image d'album: ${album.title}`}
                            />
                        </div>

                        <div className="mt-4">
                            <p className="text-lg uppercase font-normal">{album.title}</p>
                            <p className="text-xs font-normal italic text-gray-300 font-normal">{album.creator}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default TrackList;