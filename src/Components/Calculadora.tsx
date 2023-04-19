import { useState } from "react"

export default function Calculadora() {

  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState<number | string>()
  const [height, setHeight] = useState<number | string>()
  const [age, setAge] = useState<number | string>()

  function lookDatas() {
    console.log(gender, weight, height, age)
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-auto gap-1 bg-emerald-200 p-9 mx-10 rounded-lg w-4/5">

      <div className="w-48 flex flex-col items-center">
        <h1 className="font-semibold">Selecione o gênero</h1>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <span>Homem</span>
            <input type="radio" name="gender" value='H' className="w-4 h-4" onChange={(e) => setGender(e.target.value)} />
          </div>

          <div className="flex items-center gap-2">
            <span>Mulher</span>
            <input type="radio" name="gender" value='M' className="w-4 h-4" onChange={(e) => setGender(e.target.value)} />
          </div>
        </div>
      </div>



      <div>
        <h1>Peso</h1>
        <div>
          <input type="number" placeholder="Peso em (Kg)" className="h-10 rounded-md text-center w-48" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
      </div>

      <div>
        <h1>Altura</h1>
        <div>
          <input type="number" placeholder="Altura em (Cm)" className="h-10 rounded-md text-center w-48" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
      </div>

      <div>
        <h1>Idade</h1>
        <div>
          <input type="number" placeholder="Prenncha sua idade" className="h-10 rounded-md text-center w-48" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <span >Seu nível de atividade</span>
        <select name="activity" className="h-10 rounded-md text-center w-48">
          <option value="1.2">Sedentário</option>
          <option value="1.375">Levemente ativo</option>
          <option value="1.55">Moderamente ativo</option>
          <option value="1.725">Altamente ativo</option>
          <option value="1.9">Extremamente ativo</option>
        </select>
      </div>

      <button className="bg-orange-700 w-48 h-10 rounded-lg mt-4 text-white font-semibold" onClick={lookDatas}>
        Calcular
      </button>

    </div>
  )
}
