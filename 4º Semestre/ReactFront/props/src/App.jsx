import './App.css'
import Pessoa from './components/Pessoa'

function App() {
  
  const pessoas = [
    { id: 1, nome: 'João', profissao: 'Engenheiro' },
    { id: 2, nome: 'Maria', profissao: 'Médica' },
    { id: 3, nome: 'Carlos', profissao: 'Professor' },
    { id: 4, nome: 'Ana', profissao: 'Advogada' },
    { id: 5, nome: 'Pedro', profissao: 'Programador' },
    { id: 6, nome: 'Luísa', profissao: 'Arquiteta' },
    { id: 7, nome: 'Rafael', profissao: 'Designer' },
    { id: 8, nome: 'Mariana', profissao: 'Enfermeira' },
    { id: 9, nome: 'Lucas', profissao: 'Contador' },
    { id: 10, nome: 'Juliana', profissao: 'Psicóloga' },
    { id: 11, nome: 'Fernando', profissao: 'Fotógrafo' },
    { id: 12, nome: 'Patrícia', profissao: 'Farmacêutica' },
    { id: 13, nome: 'Gabriel', profissao: 'Jornalista' },
    { id: 14, nome: 'Aline', profissao: 'Nutricionista' },
    { id: 15, nome: 'Diego', profissao: 'Piloto' }
];

console.log(pessoas);


console.log(pessoas);

  
  console.log(pessoas);
  
  return (
      <div className='flexLinha'>
        {/*<Pessoa nome={"Mano Juca"} profissao={"Desenvolverdor FrontEnd"}/>
        <Pessoa nome={"Ciro"} profissao={"Presidente"}/>*/}
        
        {
          pessoas.map( (pessoa) => (
            <Pessoa nome={pessoa.nome} profissao={pessoa.profissao}/>
          ) )
        }

      </div>
  )
}

export default App
