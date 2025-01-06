import React, { useState } from 'react';
import { PlayIcon, PauseIcon, ShareIcon } from "../components/icons";

const listOfMusic = [
    {
        title: "The Small Things",
        time: {
            minute: '3',
            seconde: '35'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Without Your Love",
        time: {
            minute: '3',
            seconde: '09'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Therapy",
        time: {
            minute: '3',
            seconde: '06'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Fighters",
        time: {
            minute: '3',
            seconde: '46'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Way Up",
        time: {
            minute: '3',
            seconde: '32'
        },
        creators: [
            {
                name: "Conro",
            },
            {
                name: "Nevve",
            }
        ]
    },
    {
        title: "Waiting",
        time: {
            minute: '3',
            seconde: '07'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Dreaming",
        time: {
            minute: '2',
            seconde: '57'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Tattoo",
        time: {
            minute: '3',
            seconde: '29'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Out for the Night",
        time: {
            minute: '3',
            seconde: '05'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Overdue",
        time: {
            minute: '2',
            seconde: '48'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Say It",
        time: {
            minute: '3',
            seconde: '04'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Here to Stay",
        time: {
            minute: '2',
            seconde: '44'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
]


function TrackList() {
    // Initialisation de l'état pour chaque piste
    const [playingTracks, setPlayingTracks] = useState<Record<number, boolean>>({});

    const handleChange = (index: number) => {
        setPlayingTracks((prev) => ({
            ...prev,
            [index]: !prev[index], // Alterne l'état de lecture pour la piste donnée
        }));
    };

    return (
        <section className="mx-auto mt-10 px-5 text-xl font-bold w-full lg:w-auto lg:px-35 lg:mt-15">
            <h2 className="uppercase lg:text-4xl font-normal md:mb-10">Track List</h2>

            <div className="flex flex-wrap mt-5 gap-5 lg:mt-10 lg:gap-10 font-montserrat font-bold">
                {listOfMusic.map((track, index) => (
                    <div key={index} className="flex justify-between items-center w-full">
                        <div className="flex items-center sm:gap-2 lg:gap-5">
                            <p className="text-lg w-[20.6px] font-normal">{index + 1}</p>
                            <div
                                className="cursor-pointer"
                                onClick={() => handleChange(index)}
                            >
                                {!playingTracks[index] ? (
                                    <PlayIcon className="w-4" />
                                ) : (
                                    <PauseIcon className="w-4" />
                                )}
                            </div>
                            <div>
                                <p className="text-lg font-sans">{track.title}</p>
                                <p className="text-sm font-normal">
                                    <>
                                        {track.creators.map((creator, idx) => (
                                            <span className='font-sans italic' key={idx}>
                                                {creator.name}
                                                {idx < track.creators.length - 1 && " & "}
                                            </span>
                                        ))}
                                    </>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 lg:gap-5">
                            <p className="text-lg font-sans">
                                {track.time.minute}:{track.time.seconde}
                            </p>
                            <div className="cursor-pointer">
                                <ShareIcon />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrackList;
