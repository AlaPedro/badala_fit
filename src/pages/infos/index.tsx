import Header from "@/Components/Header"
import Link from "next/link"
export default function index() {
    return (
        <div>
            <Header />

            <div className="h-screen flex flex-col items-center justify-center gap-10 p-10">
                <strong>O que é taxa metabólica basal ? (TMB)</strong>

                <span className="text-justify">
                    A taxa metabólica basal (TMB) é a quantidade de energia que o corpo gasta em repouso absoluto para manter as funções vitais, como respiração, circulação sanguínea, regulação da temperatura corporal e funcionamento dos órgãos. Em outras palavras, é a quantidade mínima de calorias que uma pessoa precisa consumir por dia para manter suas funções corporais básicas. A TMB é influenciada por vários fatores, incluindo idade, peso, altura, gênero e composição corporal. É importante lembrar que a TMB é apenas uma parte da equação para calcular as necessidades calóricas diárias de uma pessoa, e outras atividades diárias, como exercício físico, também devem ser levadas em consideração para obter uma estimativa precisa das necessidades calóricas individuais.
                </span>
                <Link href={'/'}>
                    <button className="text-white font-semibold bg-orange-500 px-4 h-10 rounded-md hover:scale-105 ease-in-out duration-500 hover:bg-orange-500"> Voltar para página inicial</button>
                </Link>
            </div>
        </div>
    )
}
