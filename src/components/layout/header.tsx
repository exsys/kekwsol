import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#323232]">
            <div className="py-5 w-3/5 mx-auto flex justify-center sm:justify-between items-center cursor-pointer">
                <img src="/images/kekw.png" alt="logo" className="w-[70px] rounded-full drop-shadow-md" />

                <nav className="hidden sm:flex items-center gap-12 text-white">
                    <Link href="#info-section" className="text-2xl font-medium">
                        About
                    </Link>
                    <Link href="#kekenomics" className="text-2xl font-medium">
                        Kekenomics
                    </Link>
                    <Link href="#kekw-section" className="text-2xl font-medium">
                        Kekw
                    </Link>
                </nav>
            </div>
        </header>
    )
}