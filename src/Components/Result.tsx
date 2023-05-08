import { useState } from 'react'
import { useRouter } from 'next/router'
type Props = {
    result: number
}

export default function Result({ result }: Props) {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [gainWeight, setGainWeight] = useState<number>()
    const [loseWeight, setLoseWeight] = useState<number>()
    const [finalMessage, setFinalMessage] = useState<string>('')
    const router = useRouter()

    function handleGainWeight() {
        const operatorGainWeight: number = (result + (result * 0.2))
        setModalIsOpen(true)
        setGainWeight(operatorGainWeight)
        setFinalMessage('Ganhar peso')
    }

    function handleLoseWeight() {
        const operatorLoseWeight = (result - (result * 0.2))
        setModalIsOpen(true)
        setLoseWeight(operatorLoseWeight)
        setFinalMessage('Perder peso')
    }

    function closeModal() {
        router.reload()
    }
    return (

        <>
            <div className="flex flex-col items-center justify-center gap-1 bg-emerald-400 mx-10 rounded-lg min-w-full h-20">
                <h1 className="text-center">Seu taxa metabólica basal diária é de:
                    <strong>  {result}</strong>
                </h1>
            </div>

            <div>
                <h1 className="text-center">Qual seu objetivo?</h1>

                <div className="flex gap-4">
                    <button className="bg-orange-700 w-40 h-10 rounded-lg mt-4 text-white font-semibold hover:scale-110 ease-in-out duration-500 hover:bg-orange-500" onClick={handleGainWeight}>Ganhar peso</button>
                    <button className="bg-orange-700 w-40 h-10 rounded-lg mt-4 text-white font-semibold hover:scale-110 ease-in-out duration-500 hover:bg-orange-500" onClick={handleLoseWeight}>Perder peso</button>
                </div>
            </div>

            {modalIsOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                        <div className="flex flex-col gap-4 w-96 items-center">
                            <div className="flex flex-col items-center justify-center h-auto gap-1 bg-emerald-600 mx-10 rounded-lg min-w-full py-4">
                                <strong>Seu objetivo final</strong>

                                <div>
                                    <h1>Sua taxa metabólica basal: <strong>{result}</strong> </h1>
                                </div>
                                <div className="text-center">
                                    <h1>Sua meta de calorias diária para {finalMessage} é : <strong>{gainWeight}</strong> <strong>{loseWeight}</strong></h1>
                                </div>

                                <div>

                                    <button className="bg-orange-700 w-48 h-10 rounded-lg mt-4 text-white font-semibold hover:scale-110 ease-in-out duration-500 hover:bg-orange-500" onClick={closeModal}>Voltar</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )}



        </>
    )
}
