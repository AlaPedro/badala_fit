import Calculadora from "@/Components/Calculadora"
import Header from "@/Components/Header"

export default function Home() {

  return (
    <>

      <Header />

      <main className="flex items-center justify-center mt-40">
        <Calculadora />
      </main>

    </>

  )
}
