import Header from "@/components/Header"
import Link from "next/link"
export default function ManipulandoPeso() {
    return (
        <div>
            <Header />

            <div className=" flex flex-col items-center justify-center gap-10 p-10">
                <strong className="text-center">Eu sei minha taxa metabólica basal, como faço para perder ou ganhar peso?</strong>

                <span className="text-justify">
                    Se você conhece sua taxa metabólica basal, pode usá-la como uma referência para ajustar sua dieta e atingir seus objetivos de perda ou ganho de peso.
                    <br />
                    <br />
                    Para perder peso, você precisa criar um déficit calórico, o que significa que você deve consumir menos calorias do que está queimando. Para fazer isso, você pode reduzir sua ingestão calórica diária em cerca de 10-20% abaixo da sua taxa metabólica basal. Por exemplo, se sua TMB é de 1800 calorias, você pode reduzir sua ingestão calórica diária para cerca de 1440-1620 calorias para criar um déficit calórico.
                    <br />
                    <br />
                    Para ganhar peso, você precisa criar um superávit calórico, o que significa que você deve consumir mais calorias do que está queimando. Para fazer isso, você pode aumentar sua ingestão calórica diária em cerca de 10-20% acima da sua taxa metabólica basal. Por exemplo, se sua TMB é de 1800 calorias, você pode aumentar sua ingestão calórica diária para cerca de 1980-2160 calorias para criar um superávit calórico.
                    <br />
                    <br />
                    No entanto, é importante lembrar que a perda ou ganho de peso não é apenas uma questão de calorias. A qualidade e a composição dos alimentos que você come, bem como seu nível de atividade física, também desempenham um papel importante na perda ou ganho de peso. É sempre recomendável buscar o conselho de um profissional de saúde ou nutricionista antes de iniciar qualquer programa de perda ou ganho de peso.
                </span>
                <Link href={'/'}>
                    <button className="text-white font-semibold bg-orange-500 px-4 h-10 rounded-md hover:scale-105 ease-in-out duration-500 hover:bg-orange-500"> Voltar para página inicial</button>
                </Link>
            </div>
        </div>
    )
}
