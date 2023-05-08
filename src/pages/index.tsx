import Calculadora from "@/components/Calculadora"
import Header from "@/components/Header"

export default function Home() {

  return (
    <div className="h-screen">

      <Header />
      <main className="flex items-center justify-center mt-40">
        <Calculadora />
      </main>

    </div>

  )
}
