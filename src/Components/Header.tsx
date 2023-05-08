import { HiMenu } from "react-icons/hi";
import { useState } from 'react'
import Link from "next/link";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    function handleOpenMenu() {
        setIsMenuOpen(true)
    }

    function handleCloseMenu() {
        setIsMenuOpen(false)
    }


    return (
        <>
            <header className="flex flex-row items-center justify-between bg-green-600 h-20 drop-shadow-md w-screen px-10">
                <div>
                    <div>
                        <Link href={'/'}>
                            <h1 className="text-4xl font-bold text-white ">BadalaFit</h1>
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-2x1 font-semibold">Calculadora de calorias basais</h2>
                    </div>
                </div>
                <div>
                    <HiMenu size={30} color="#fff" onClick={handleOpenMenu} cursor={'pointer'} />
                </div>


            </header>
            {isMenuOpen && (

                <div className="absolute top-0 left-0 w-full h-full bg-black/80">
                    <div className="flex flex-col h-screen justify-center gap-10 items-center">
                        <Link href={'/infos'} className="flex items-center justify-center text-white font-semibold bg-orange-500 w-4/5 h-12 rounded-md hover:scale-105 ease-in-out duration-500 hover:bg-orange-500">
                            <button >
                                O que é taxa metábolica basal (TMB) ?
                            </button>
                        </Link>

                        <Link href={"infos/manipulando-peso"} className="flex items-center justify-center text-white font-semibold bg-orange-500 w-4/5 h-12 rounded-md hover:scale-105 ease-in-out duration-500 hover:bg-orange-500">
                            <button >Como perder/ganhar peso sabendo a (TMB) ?</button>
                        </Link>

                        <button className="text-white font-semibold bg-orange-500 w-4/5 h-12 rounded-md hover:scale-105 ease-in-out duration-500 hover:bg-orange-500" onClick={handleCloseMenu}>Voltar</button>
                    </div>
                </div>

            )}

        </>
    )
}
