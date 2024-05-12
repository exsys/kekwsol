"use client";
import { KEKW_EMOTES } from "@/assets/emotes";
import { useState } from "react";

export default function KekwGenerator() {
    const [currentKekw, setCurrentKekw] = useState(KEKW_EMOTES[0]);

    const randomKekw = () => {
        const randomKekw = KEKW_EMOTES[Math.floor(Math.random() * KEKW_EMOTES.length)];
        setCurrentKekw(randomKekw);
    };

    return (
        <section id="kekw-section" className="h-fit">
            <div className="h-full flex flex-col gap-20 justify-center items-center drop-shadow-md py-20">
                <div className="w-[96%] lg:w-3/4 mx-auto flex flex-col items-center gap-10">
                    <h1 className="text-5xl font-semibold text-center">
                        Are you maxbidding anon?
                    </h1>

                    <img src="/images/kekwmaxbid.png" alt="kekwmaxbid" />
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="w-[128px] h-[128px]">
                        <img src={currentKekw.src} alt={currentKekw.alt} className="w-full" />
                    </div>

                    <div>
                        <button className="bg-amber-800/80 py-3 px-10 rounded-full text-white text-xl font-semibold
                        hover:bg-amber-800/90 transition-all active:scale-95" onClick={() => randomKekw()}>
                            KEKW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}