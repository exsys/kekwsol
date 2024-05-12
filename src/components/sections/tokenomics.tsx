import Link from "next/link";

export default function Tokenomics() {
    const CONTRACT_ADDRESS = "CEYNkwuEXU1KD3MN47NaMvHznPPimR15Sjfv6Y2r1SVw";

    return (
        <section id="kekenomics" className="h-fit lg:h-full">
            <div className="h-fit lg:h-full flex flex-col justify-center items-center gap-10 py-20 lg:py-0 lg:-mt-20">
                <h1 className="text-6xl sm:text-7xl font-semibold mb-10 drop-shadow-md">
                    Kekenomics
                </h1>

                <div className="flex flex-col lg:flex-row justify-between items-center w-[92%] xl:w-3/4 2xl:w-2/3
                mx-auto gap-10 lg:gap-2 drop-shadow-md">
                    <div className="flex flex-col justify-center items-center gap-6 text-center flex-1">
                        <div className="w-36 h-36 overflow-hidden drop-shadow-md">
                            <img src="/emotes/kekw_rare.gif" alt="kekwrare" className="object-cover w-full h-full rounded" />
                        </div>
                        <h2 className="text-5xl font-semibold">
                            Total Supply
                        </h2>
                        <span className="text-3xl font-semibold">
                            954,998,228.54
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-6 text-center flex-1">
                        <div className="w-36 h-36 overflow-hidden drop-shadow-md">
                            <img src="/emotes/kekw_rare.gif" alt="kekwrare" className="object-cover w-full h-full rounded" />
                        </div>
                        <h2 className="text-5xl font-semibold">
                            LP Burned
                        </h2>
                        <span className="text-3xl font-semibold">
                            100%
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-6 text-center flex-1">
                        <div className="w-36 h-36 overflow-hidden drop-shadow-md">
                            <img src="/emotes/kekw_rare.gif" alt="kekwrare" className="object-cover w-full h-full rounded" />
                        </div>
                        <h2 className="text-5xl font-semibold">
                            Tax
                        </h2>
                        <span className="text-3xl font-semibold">
                            0%
                        </span>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-sm sm:text-xl lg:text-4xl drop-shadow-md">
                        {CONTRACT_ADDRESS}
                    </h2>
                </div>

                <div className="hover:scale-95 transition-all drop-shadow-md">
                    <Link href={"https://jup.ag/swap/SOL-KEKW"} target="_blank"
                        className="rounded-full border-2 py-3 px-12 text-2xl button-clr">
                        Buy here
                    </Link>
                </div>
            </div>
        </section>
    )
}