import { useState } from 'react'
import RenderBooleano from './components/RenderBooleano'
import RenderCondicional from './components/RenderCondicional'
import RenderTernario from './components/RenderTernario'
import RenderTernarioFalso from './components/RenderTernarioFalso'
import RenderFuncaoTrue from './components/RenderFuncaoTrue'
import RenderFuncaoFalse from './components/RenderFuncaoFalse'
import './App.css'

function App() {
  const [estado, setEstado] = useState(true)
  const [inpIdade, setInpIdade] = useState()

  function mudarEstado(){
    setEstado(!estado)
  }

  function atualizarIdade(event){
    setInpIdade(event.target.value)
  }

  function renderPorFuncao(){
    if(inpIdade >=65){
      return <RenderFuncaoTrue/>
    }else{
      return <RenderFuncaoFalse/>
    }
  }
  return (
    <>
      <button onClick={mudarEstado}>Mudar estado</button>
      <button onClick={() => setEstado(!estado)}>Mudar estado AF</button>
      {estado && <RenderBooleano/>}

      <input type="number" 
        value={inpIdade}
        onChange={atualizarIdade}
        placeholder='Digite um número'
      />
      { inpIdade >= 18 && <RenderCondicional />}

      { inpIdade <= 12 ?<RenderTernario/> : <RenderTernarioFalso/> }

      {renderPorFuncao()}
     
    </>
  )
}

export default App
