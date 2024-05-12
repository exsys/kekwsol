"use client";
import anime, { AnimeInstance } from "animejs";
import Link from "next/link";
import { useRef } from "react";
import TwitterX from "../icons/twitterx";
import Jupiter from "../icons/jupiter";
import Telegram from "../icons/telegram";
import DexScreener from "../icons/dexscreener";
import Marquee from "react-fast-marquee";

interface ImageInfo {
    src: string;
    alt: string;
}

export default function HomeSection() {
    const aniInstance = useRef<AnimeInstance | null>(null);
    const MARQUEE_SPEED: number = 120;
    const MARQUEE_ITEMS: ImageInfo[] = [
        { src: "/emotes/kekw_gang.gif", alt: "kekwgang" },
        { src: "/emotes/kekamide.gif", alt: "kekamide" },
        { src: "/emotes/kekwchika.gif", alt: "kekchika" },
        { src: "/emotes/kekwdisco.gif", alt: "kekwdisco" },
        { src: "/emotes/kekwsquad.gif", alt: "kekwsquad" },
        { src: "/emotes/kekwholup.gif", alt: "kekwholup" },
        { src: "/emotes/kekwing.gif", alt: "kekwing" },
        { src: "/emotes/kekwpepe.gif", alt: "kekwpepe" },
        { src: "/emotes/kekw_party.gif", alt: "kekwparty" },
        { src: "/emotes/kekwexplode.gif", alt: "kekwexplode" },
        { src: "/emotes/kekw.gif", alt: "kekw" },
        { src: "/emotes/kekwlaugh.gif", alt: "kekwlaugh" },
        { src: "/emotes/kekwdance.gif", alt: "kekwdance" },
        { src: "/emotes/kekwcrack.gif", alt: "kekwcrack" },
        { src: "/emotes/kekwloop.gif", alt: "kekwloop" },
    ];

    const kekwAnimation = () => {
        const sound = document.getElementById("kekwsound") as HTMLAudioElement;
        sound.play();

        aniInstance.current = anime({
            targets: '#kekw',
            easing: 'linear',
            delay: 100,
            duration: 2600,
            keyframes: [
                { translateY: -10 },
                { translateY: 10 },
                { translateY: -10 },
                { translateY: 10 },
                { translateY: -10 },
                { translateY: 10 },
                { translateY: -10 },
                { translateY: 10 },
                { translateY: -10 },
                { translateY: 10 },
                { translateY: -10 },
                { translateY: 10 },
                { translateY: 0 },
            ],
        });
    }

    return (
        <main id="hero-section" className="h-fit">
            <audio id="kekwsound" src="/sounds/kekwsound.mp3" />

            <div className="h-full flex flex-col gap-12 lg:gap-2 lg:flex-row justify-center items-center w-3/4 mx-auto py-24">
                <div className="flex flex-col gap-10 items-center flex-1">
                    <h1 className="text-7xl font-semibold drop-shadow-md">
                        $KEKW
                    </h1>

                    <Link href={"https://jup.ag/swap/SOL-KEKW"} target="_blank"
                        className="py-3 px-12 button-clr rounded-full drop-shadow cursor-pointer text-xl font-semibold">
                        Buy now
                    </Link>
                    <div>
                        <h2 className="text-center text-4xl drop-shadow-md mb-6 font-semibold">
                            Socials
                        </h2>

                        <nav className="flex gap-8 items-center drop-shadow-md">
                            <Link href={"https://twitter.com/KEKWSolana"} target="_blank"
                                className="button-clr rounded-full w-[60px] h-[60px]
                                flex justify-center items-center">
                                <TwitterX className="w-[60px] h-[60px] fill-white" />
                            </Link>
                            <Link href={"https://t.me/kekw_spl"} target="_blank"
                                className="button-clr rounded-full w-[60px] h-[60px]
                                flex justify-center items-center">
                                <Telegram className="w-[44px] h-[44px] fill-white" />
                            </Link>
                            <Link href={"https://dexscreener.com/solana/35it9pqarypj1trxrrx2erjxsnyw6mq6cr58vgrq5gnn"} target="_blank"
                                className="button-clr rounded-full w-[60px] h-[60px]
                                flex justify-center items-center">
                                <DexScreener className="w-[52px] h-[52px] fill-white" />
                            </Link>
                            <Link href={"https://jup.ag/swap/SOL-KEKW"} target="_blank"
                                className="button-clr rounded-full w-[60px] h-[60px]
                                flex justify-center items-center">
                                <Jupiter className="w-[44px] h-[44px] fill-white" />
                            </Link>
                        </nav>
                    </div>

                </div>

                <div id="kekw" className="flex-1 drop-shadow-lg h-full flex justify-center">
                    <img src="/images/kekwpixel.jpg" alt="kekw" className="lg:w-3/5 rounded cursor-pointer" onClick={() => kekwAnimation()} />
                </div>
            </div>

            <Marquee pauseOnClick speed={MARQUEE_SPEED} className="">
                {MARQUEE_ITEMS.map((imageInfo: ImageInfo, index: number) => (
                    <div key={index} className="mr-16">
                        <img src={imageInfo.src} alt={imageInfo.alt} className="w-[80px]" />
                    </div>
                ))}
            </Marquee>
        </main>
    )
}