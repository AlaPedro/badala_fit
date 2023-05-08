import { useState } from "react"
import Result from "./Result"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Calculadora() {

  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState<number | string>('')
  const [height, setHeight] = useState<number | string>('')
  const [age, setAge] = useState<number | string>('')
  const [activity, setActivity] = useState<number | string>("1.2")
  const [result, setResult] = useState<number>()

  // const [seeButton, setSeeButton] = useState()


  function verifyData() {
    if (gender === '') {
      toastWarn('Selecione o seu gênero')
      return
    }
    if (weight === '') {
      toastWarn('Preencha seu peso em KG')
      return
    }
    if (height === '') {
      toastWarn('Preencha sua altura em CM')
      return
    }
    if (age === '') {
      toastWarn('Preencha sua idade')
      return
    }
    handleCalcBasal()
  }

  function handleCalcBasal() {
    if (gender === 'H') {
      const menBasal = Math.round(Number(activity) * (66 + (13.7 * Number(weight)) + (5 * Number(height)) - (6.8 * Number(age))))
      setResult(menBasal)
      return
    }
    if (gender === "M") {
      const womenBasal = Math.round(Number(activity) * (655 + (9.6 * Number(weight)) + (1.8 * Number(height)) - (4.7 * Number(age))))
      setResult(womenBasal)
      return
    }
  }

  const toastWarn = (message: string) => toast.warn(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (

    <div className="flex flex-col gap-4 w-96 items-center">

      <div className="flex flex-col items-center justify-center h-auto gap-1 bg-emerald-200 mx-10 rounded-lg min-w-full py-4">

        <div className="flex flex-col items-center">
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
            <input type="number" placeholder="Preencha sua idade" className="h-10 rounded-md text-center w-48" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span >Seu nível de atividade</span>
          <select name="activity" className="h-10 rounded-md text-center w-48" onChange={(e) => setActivity(e.target.value)}>
            <option value="1.2" >Sedentário</option>
            <option value="1.375">Levemente ativo</option>
            <option value="1.55">Moderamente ativo</option>
            <option value="1.725">Altamente ativo</option>
            <option value="1.9">Extremamente ativo</option>
          </select>
        </div>

        <button className="bg-orange-700 w-48 h-10 rounded-lg mt-4 text-white font-semibold hover:scale-110 ease-in-out duration-500 hover:bg-orange-500" onClick={verifyData}>
          Calcular
        </button>
      </div>


      {result && (
        <Result result={result} />
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </div>
  )
}
