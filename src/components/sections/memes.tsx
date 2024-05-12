import { KEKW_MEMES } from "@/assets/memes";

export default function MemesSection() {
    return (
        <section id="meme-section" className="h-full">
            <div className="h-full flex flex-col justify-center items-center gap-20">
                <h1 className="text-5xl font-semibold">
                    There is a KEKW for every occasion
                </h1>

                <div className="w-4/5 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {KEKW_MEMES.map((meme: any, index: number) => (
                            <div key={index} className="flex justify-center items-center w-[320px] h-[320px]">
                                <img src={meme.src} alt={meme.alt} className="rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}