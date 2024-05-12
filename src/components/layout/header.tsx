import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#323232]">
            <div className="py-5 w-3/5 mx-auto flex justify-center sm:justify-between items-center">
                <img src="/images/kekw.png" alt="logo" className="w-[70px] rounded-full drop-shadow-md" />

                <nav className="hidden sm:flex items-center gap-12">
                    <Link href="#info-section" className="p-2 text-2xl font-medium transition-all hover:text-[#00AEEF]">
                        About
                    </Link>
                    <Link href="#kekenomics" className="text-2xl font-medium transition-all hover:text-[#00AEEF]">
                        Kekenomics
                    </Link>
                    <Link href="#kekw-section" className="text-2xl font-medium transition-all hover:text-[#00AEEF]">
                        Kekw
                    </Link>
                </nav>
            </div>
        </header>
    )
}