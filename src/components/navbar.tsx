import React from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useDisclosure,
} from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { InstagramIcon, TwitterIcon, TwitchIcon, TiktokIcon, FacebookIcon, DiscordIcon, MusicIcon, MenuIcon, CloseIcon, ShareIcon } from "./icons";

let logos = [
    <InstagramIcon />,
    <TiktokIcon />,
    <TwitterIcon />,
    <TwitchIcon />,
    <FacebookIcon />,
    <DiscordIcon />,
    <MusicIcon />,
]

let drawerList = [
    {
        title: "MUSIC",
        list: [
            "OUR MUSIC",
            "INSTINCT",
            "UNCAGED",
            "SILK",
        ]
    },
    {
        title: "ARTISTS",
    },
    {
        title: "ABOUT",
        list: [
            "ABOUT MONSTERCAT",
            "DIVERSITY & INCLUSION",
            "CODE OF ETHICS",
            "ENVIRONMENTAL",
            "CONTACT US",
            "CARREERS",
        ]
    },
    {
        title: "NEWS",
    },
    {
        title: "EVENTS",
        list: [
            "MONSTERCAT EVENTS EXPERIENCE",
            "UPCOMING EVENTS",
        ]
    },
    {
        title: "PROGRAMMING",
        list: [
            "MonstercatTV",
            "CALL OF THE WILD",
            "SILK SHOWCASE",
            "UPCOMING SHOWS",
        ]
    },
    {
        title: "GOLD",
    },
    {
        title: "PARTNERS",
    },
    {
        title: "PRESS",
    },
    {
        title: "PLAYER",
    },
    {
        title: "SHOP",
    },
    {
        title: "LOST CIVILIZATION",
    }
];

export default function Navbar() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const disabledKeys = drawerList
        .map((item, index) => (!item.list ? index.toString() : null))
        .filter((key) => key !== null);

    return (
        <>
            <button className="p-0 m-0 bg-transparent text-right border-none block cursor-pointer" onClick={onOpen}>
                <MenuIcon />
            </button>
            <Drawer className="bg-background" isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-row justify-between mb-6">
                                <img src="/svg/monstercat-logo-white.svg" className="w-62 cursor-pointer" />
                                <button className="p-0 m-0 bg-transparent text-right text-foreground border-none block cursor-pointer" onClick={onClose}>
                                    <CloseIcon className="w-6 h-6 text-white mr-2" />
                                </button>
                            </DrawerHeader>
                            <DrawerBody>
                                <Accordion disabledKeys={disabledKeys} className="cursor-pointer">
                                    {drawerList.map((item, index) => (
                                        <AccordionItem indicator={item.list ? '' : ' '} key={index} aria-label={`Accordion ${index}`} title={item.title}>
                                            {item.list && (
                                                <ul className="pl-4 flex flex-col gap-3">
                                                    {item.list.map((listItem, listIndex) => (
                                                        <li key={listIndex} className="text-sm text-gray cursor-pointer hover:text-white ease-in-out duration-500"><a href="/">{listItem}</a></li>
                                                    ))}
                                                </ul>
                                            )}
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </DrawerBody>
                            <DrawerFooter className="flex flex-col gap-8 mt-6">
                                <div className="flex gap-3">
                                    {logos.map((logo, index) => (
                                        <button key={index} className="p-0 m-0 bg-transparent text-right text-foreground border-none block cursor-pointer">
                                            {logo}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="flex justify-center items-center gap-1 uppercase text-foreground border border-foreground rounded-none px-3 py-2 mr-2 cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300 font-normal">
                                        Sign In
                                    </button>
                                    <p>Or</p>
                                    <button className="flex justify-center items-center gap-1 uppercase px-px py-2 cursor-pointer font-normal">
                                        Sign Up
                                    </button>
                                </div>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
