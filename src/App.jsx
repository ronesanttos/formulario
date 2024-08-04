import './App.css'
import { FiSend } from 'react-icons/fi'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import UserForm from './components/UserForm'
import Steps from './components/Steps'

import { userForm } from './hooks/userForm'
import { useState } from 'react'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  const [data, setData] = useState(formTemplate)

  const upadetedFiel = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const formComponets = [<UserForm data={data} upadetedFiel={upadetedFiel} />, <ReviewForm data={data} upadetedFiel={upadetedFiel} />, <Thanks data={data} />]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirsStep } = userForm(formComponets)
  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizis com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </div>

      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirsStep && (<button type='button' onClick={() => changeStep(currentStep - 1)}> <GrFormPrevious />
              <span>Voltar</span></button>)}

            {!isLastStep ? (
              <button type='submit'><span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'><span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
