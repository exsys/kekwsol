export default function InfoSection() {
    return (
        <section id="info-section" className="h-fit lg:h-full">
            <div className="h-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 w-[94%]
            lg:w-4/5 2xl:w-3/5 mx-auto text-center lg:text-left py-20 lg:py-0">
                <div className="flex-1">
                    <p className="text-2xl xl:text-3xl !leading-normal text-center">
                        The one and only El Risitas. $KEKW is here to lead the charge, show the way, and inject a 
                        much-needed dose of fun and sustainability into the crypto world. Get ready to ride the wave with $KEKW, 
                        the coin that’s turning heads and changing minds.
                    </p>
                </div>
                <div className="flex-1 drop-shadow-lg flex justify-center">
                    <img src="/images/elrisitas.jpg" alt="elrisitas" className="sm:w-3/4 lg:w-full xl:w-4/5" />
                </div>
            </div>
        </section>
    )
}